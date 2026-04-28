import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WhatWeTest from "./pages/WhatWeTest";
import WhoWeAre from "./pages/WhoWeAre";
import FoundersStory from "./pages/FoundersStory";
import Support from "./pages/Support";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/what-we-test" element={<WhatWeTest />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/founders-story" element={<FoundersStory />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </BrowserRouter>
  );
}
