import React from 'react';
import { LuHistory, LuSettings2 } from "react-icons/lu";

export default function CalorieTracker() {
  return (
    <div className="flex flex-col items-center gap-8 w-full">
      {/* Three Circles */}
      <div className="flex items-center justify-center gap-1 sm:gap-4 scale-[0.85] sm:scale-100">
        {/* Intake */}
        <div className="flex flex-col items-center justify-center w-24 h-24 rounded-full border-4 border-[#136cfb] relative">
          <span className="text-xl font-bold text-white">440</span>
          <span className="text-xs font-semibold text-[rgba(230,239,255,0.6)]">intake</span>
        </div>

        {/* Available (Large) */}
        <div className="flex flex-col items-center justify-center w-40 h-40 rounded-full border-4 border-[#136cfb] border-t-[rgba(230,239,255,0.1)] relative">
          <div className="absolute inset-[-4px] rounded-full border-4 border-transparent border-r-[#136cfb] border-b-[#136cfb] rotate-45" />
          <span className="text-4xl font-bold text-[#136cfb]">1856</span>
          <span className="text-sm font-semibold text-[rgba(230,239,255,0.6)]">kcal avail</span>
        </div>

        {/* Target */}
        <div className="flex flex-col items-center justify-center w-24 h-24 rounded-full border-[3px] border-[rgba(230,239,255,0.2)] relative">
          <span className="text-xl font-bold text-white">2296</span>
          <span className="text-xs font-semibold text-[rgba(230,239,255,0.6)]">target</span>
        </div>
      </div>

      {/* Links */}
      <div className="flex gap-6">
        <button className="flex items-center gap-2 text-[#e6efff] text-[11px] font-semibold tracking-wide hover:text-white transition-colors">
          <LuHistory className="text-[#136cfb]" size={14} />
          View kcal history
        </button>
        <button className="flex items-center gap-2 text-[#e6efff] text-[11px] font-semibold tracking-wide hover:text-white transition-colors">
          <LuSettings2 className="text-[#136cfb]" size={14} />
          Adjust kcal & macros
        </button>
      </div>

      {/* Meal Entry */}
      <div className="w-full max-w-[340px] mt-4">
        <div className="flex items-center gap-3 bg-[rgba(230,239,255,0.06)] border border-[rgba(230,239,255,0.1)] p-3 rounded-2xl relative">
          <div className="w-5 h-5 rounded-full border-2 border-[#136cfb] flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-[#136cfb]" />
          </div>
          <p className="text-[#e6efff] text-sm font-semibold flex-1">
            Greek Yogurt, Blueberries
          </p>
          <div className="bg-[#136cfb] text-white text-[10px] font-bold px-2 py-1 rounded-md">
            121kcal
          </div>
        </div>
      </div>
    </div>
  );
}
