type LineData = {
  color: string;
  // Raw numeric values, one per xAxis point
  values: number[];
};

type ChartProps = {
  title: string;
  status: string;
  value: string;
  unit?: string;
  xAxis: string[];
  xTicks: string[];
  rightLabels: { value: string; color: string }[];
  lines: LineData[];
  noBackground?: boolean;
};

export default function BiomarkerChart({
  title,
  status,
  value,
  unit,
  xAxis,
  xTicks,
  rightLabels,
  lines,
  noBackground = false,
}: ChartProps) {
  const W = 460;
  const padBottom = 28;
  const padTop = 20;   // space above the top grid line inside SVG
  const padX = 15;

  // Derive scale from xTicks (which define the displayed Y range)
  const scaleMin = parseFloat(xTicks[0]);
  const scaleMax = parseFloat(xTicks[xTicks.length - 1]);
  const scaleRange = scaleMax - scaleMin;

  // Grid height: one interval per rightLabel gap
  const gridRows = Math.max(1, rightLabels.length - 1);
  const rowH = 18; // px per grid row — controls how tall the graph area is
  const innerH = gridRows * rowH;
  const H = padTop + innerH + padBottom;
  const innerW = W - padX * 2;
  const stepX = xAxis.length > 1 ? innerW / (xAxis.length - 1) : 0;

  // Convert a raw value → SVG Y coordinate
  // Values outside the scale are allowed (they go above/below grid), but we clip via clipPath
  const toY = (v: number) => {
    const ratio = (v - scaleMin) / scaleRange; // 0 = scaleMin, 1 = scaleMax
    return padTop + (1 - ratio) * innerH; // top = max, bottom = min
  };

  const currentValueNum = parseFloat(value);
  const pointerPosPercent = Math.min(100, Math.max(0, ((currentValueNum - scaleMin) / scaleRange) * 100));

  const CYAN = "#32d7d7";
  const ORANGE = "#ff9500";
  const RED = "#ff3b30";

  const getPtColor = (v: number) => {
    if (title.includes("Glucose")) {
      if (v > 90) return ORANGE;
      if (v < 65) return ORANGE;
      return CYAN;
    }
    if (title.includes("Cholesterol")) {
      if (v >= 240) return RED;
      if (v >= 180) return ORANGE;
      return CYAN;
    }
    // ApoB / LDL
    if (v > 120) return RED;
    if (v > 90) return ORANGE;
    return CYAN;
  };

  const clipId = `clip-${title.replace(/\s+/g, "")}`;

  return (
    <div className={`flex flex-col gap-0 select-none h-full ${noBackground ? "" : "rounded-3xl bg-[rgba(230,239,255,0.03)] border border-[rgba(230,239,255,0.05)] p-6"}`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-1">
        <span className="text-[#E6EFFF] text-[11px] font-semibold tracking-tight leading-tight">{title}</span>
        <span className="text-[#E6EFFF99] text-[11px] font-semibold uppercase tracking-wider whitespace-nowrap pl-2">{status}</span>
      </div>

      <div className="flex items-baseline gap-1 mb-4">
        <span className="text-[#29BCBC] font-bold text-[39px] leading-none tracking-tighter">{value}</span>
        {unit && <span className="text-[rgba(230,239,255,0.5)] text-[12px] font-semibold">{unit}</span>}
      </div>

      {/* Scale Bar */}
      <div className="relative w-full mb-5 px-[15px]">
        {/* Pointer triangle above the bar */}
        <div className="relative mb-1">
          <div
            className="absolute w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[7px] border-t-[#136cfb]"
            style={{ left: `${pointerPosPercent}%`, transform: "translateX(-50%)" }}
          />
        </div>
        {/* Tick labels */}
        <div className="flex justify-between mb-1.5">
          {xTicks.map((t, i) => (
            <span key={i} className="text-[rgba(230,239,255,0.85)] text-[10px] font-bold">{t}</span>
          ))}
        </div>
        {/* Gradient bar */}
        <div
          className="h-[3px] w-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${CYAN} 0%, ${CYAN} 45%, ${ORANGE} 72%, ${RED} 100%)` }}
        />
      </div>

      {/* Chart Area: SVG + Y labels side by side */}
      <div className="flex gap-3 items-start">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="flex-1 w-full"
          style={{ height: H }}
          overflow="visible"
        >
          <defs>
            {/* Clip to keep lines inside the grid area */}
            <clipPath id={clipId}>
              <rect x={padX} y={padTop} width={innerW} height={innerH} />
            </clipPath>
          </defs>

          {/* Horizontal dotted grid lines, one per rightLabel */}
          {rightLabels.map((lbl, i) => {
            const y = padTop + (i / gridRows) * innerH;
            return (
              <line
                key={i}
                x1={padX} x2={W - padX}
                y1={y} y2={y}
                stroke={lbl.color}
                strokeWidth="0.8"
                strokeDasharray="3 4"
                opacity="0.35"
              />
            );
          })}
          {/* Bottom grid line */}
          <line
            x1={padX} x2={W - padX}
            y1={padTop + innerH} y2={padTop + innerH}
            stroke={rightLabels[rightLabels.length - 1]?.color ?? "#fff"}
            strokeWidth="0.8"
            strokeDasharray="3 4"
            opacity="0.35"
          />

          {/* Data lines & points — clipped to grid */}
          <g clipPath={`url(#${clipId})`}>
            {lines.map((ln, si) => {
              const pts = ln.values.map((v, i) => ({ x: padX + i * stepX, y: toY(v), v }));
              return (
                <g key={si}>
                  {pts.map((p, i) => {
                    if (i === 0) return null;
                    const prev = pts[i - 1];
                    return (
                      <line
                        key={i}
                        x1={prev.x} y1={prev.y}
                        x2={p.x} y2={p.y}
                        stroke={getPtColor(prev.v)}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    );
                  })}
                </g>
              );
            })}
          </g>

          {/* Data points & labels — NOT clipped so labels above top row are visible */}
          {lines.map((ln, si) => {
            const pts = ln.values.map((v, i) => ({ x: padX + i * stepX, y: toY(v), v }));
            return (
              <g key={si}>
                {pts.map((p, i) => {
                  const color = getPtColor(p.v);
                  return (
                    <g key={i}>
                      <circle
                        cx={p.x} cy={p.y} r="5"
                        fill={color} stroke="#000a19" strokeWidth="1.5"
                        style={{ filter: `drop-shadow(0 0 4px ${color})` }}
                      />
                      <text
                        x={p.x} y={p.y - 11}
                        fontSize="10" fontWeight="800"
                        fill={color} textAnchor="middle"
                      >
                        {p.v}
                      </text>
                    </g>
                  );
                })}
              </g>
            );
          })}

          {/* X-axis date labels */}
          {xAxis.map((lbl, i) => (
            <text
              key={i}
              x={padX + i * stepX}
              y={H - 6}
              fontSize="9.5"
              fontWeight="600"
              fill={i === xAxis.length - 1 ? "#fff" : "rgba(230,239,255,0.4)"}
              textAnchor="middle"
            >
              {lbl}
            </text>
          ))}
        </svg>

        {/* Right Y-Axis value labels aligned to grid rows */}
        <div className="flex flex-col w-8 shrink-0" style={{ paddingTop: padTop, gap: rowH - 13 }}>
          {rightLabels.map((lbl, i) => (
            <span key={i} className="text-[10px] font-bold text-right block leading-none" style={{ color: lbl.color }}>
              {lbl.value}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
