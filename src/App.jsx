import Hero3D from './components/Hero3D'
import VideoSamples from './components/VideoSamples'
import Contact from './components/Contact'
import Socials from './components/Socials'
import MouseTrail from './components/MouseTrail'

function App() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <MouseTrail />
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-black/30 border-b border-white/10">
        <div className="container mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="font-semibold">Litecor</a>
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#portfolio" className="hover:text-white/80">Portfolio</a>
            <a href="#samples" className="hover:text-white/80">Samples</a>
            <a href="#contact" className="hover:text-white/80">Contact</a>
          </div>
        </div>
      </nav>

      <Hero3D />

      <section id="portfolio" className="py-16 bg-zinc-950">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio</h2>
          <p className="text-white/70 max-w-3xl">
            A curated set of edits across niches — pacing, story, and polish tuned for retention.
          </p>
        </div>
      </section>

      <div id="samples">
        <VideoSamples />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Socials />

      <footer className="py-8 text-center text-xs text-white/50 bg-black">
        © {new Date().getFullYear()} Litecor. Crafted with care.
      </footer>
    </div>
  )
}

export default App
