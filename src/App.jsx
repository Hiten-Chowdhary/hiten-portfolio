import { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Nav } from "./components/layout/Nav";
import { Footer } from "./components/layout/Footer";
import { ContactModal } from "./components/layout/ContactModal";
import { ScrollToTop } from "./components/layout/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const Work = lazy(() => import("./pages/Work"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const About = lazy(() => import("./pages/About"));

function PageFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-zinc-700 border-t-orange-400" />
    </div>
  );
}

function Layout() {
  const [contactOpen, setContactOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen w-full bg-zinc-950 text-zinc-100" style={{ fontFamily: "'Inter', sans-serif" }}>
      <ScrollToTop />

      <Nav onContact={() => setContactOpen(true)} scrolled={scrolled || !isHome} />

      <div key={location.pathname} className="animate-fadeUp">
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/about" element={<About onContact={() => setContactOpen(true)} />} />
            <Route
              path="*"
              element={
                <div className="mx-auto max-w-2xl px-6 pb-24 pt-40 text-center">
                  <h1 className="text-2xl font-semibold text-zinc-100">Page not found</h1>
                  <p className="mt-3 text-sm text-zinc-500">That page doesn't exist.</p>
                </div>
              }
            />
          </Routes>
        </Suspense>
      </div>

      <Footer onContact={() => setContactOpen(true)} />

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
