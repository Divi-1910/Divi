import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import SplashCursor from "./components/SplashCursor";
import CustomCursor from "./components/CustomCursor";
import LoadingSpinner from "./components/LoadingSpinner";
import Preload from "./components/Preload";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const Skills = lazy(() => import("./pages/Skills"));
const Education = lazy(() => import("./pages/Education"));
const Experience = lazy(() => import("./pages/Experience"));
const Profiles = lazy(() => import("./pages/Profiles"));

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<LoadingSpinner />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/academics" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/profiles" element={<Profiles />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

const App = () => (
  <BrowserRouter>
    <Preload />
    <SplashCursor />
    <CustomCursor />
    <div className="min-h-screen bg-black m-0 p-0">
      <Navbar />
      <AnimatedRoutes />
    </div>
  </BrowserRouter>
);

export default App;
