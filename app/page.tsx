import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Footer from "./components/Footer";
import ShaderBackground from "./components/ShaderBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <ShaderBackground />

      <div className="relative z-10">
        <Header />
        <Hero />
        <Features />
        <About />
        <Footer />
      </div>

      {/* Global Grain/Noise Overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </main>
  );
}
