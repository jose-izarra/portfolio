import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import MyCV from "@/pages/MyCV";
import NotFound from "@/pages/NotFound";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Route, Routes } from "react-router";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mycv" element={<MyCV />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Analytics />
      <Footer />
      <SpeedInsights />
    </>
  );
}
