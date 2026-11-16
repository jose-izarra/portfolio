import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Home from "@/pages/Home";
import MyCV from "@/pages/MyCV";
import NotFound from "@/pages/NotFound";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { MotionConfig } from "motion/react";
import { Route, Routes } from "react-router";

export default function App() {
  return (
    // reducedMotion="user" drops transform animations for people who ask for less motion
    <MotionConfig reducedMotion="user">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<MyCV />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </MotionConfig>
  );
}
