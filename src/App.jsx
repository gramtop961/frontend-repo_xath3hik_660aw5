import Hero from './components/Hero'
import Featured from './components/Featured'
import WhyChoose from './components/WhyChoose'
import Builder from './components/Builder'
import Reviews from './components/Reviews'
import About from './components/About'
import ContactCTA from './components/ContactCTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-rose-900 font-[--font-sans]">
      {/* Top nav / brand */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-rose-600 text-white font-semibold">G</span>
            <span className="font-medium tracking-tight">Gifteria</span>
          </div>
          <nav className="hidden sm:flex gap-6 text-sm text-rose-800/80">
            <a href="#featured" className="hover:text-rose-900">Hampers</a>
            <a href="#custom" className="hover:text-rose-900">Build Your Own</a>
            <a href="#reviews" className="hover:text-rose-900">Reviews</a>
            <a href="#contact" className="hover:text-rose-900">Contact</a>
          </nav>
          <a
            href="https://wa.me/911234567890?text=Hi%20Gifteria!%20I%20want%20to%20order%20a%20hamper."
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center justify-center rounded-full px-4 py-2 bg-rose-600 text-white text-sm hover:bg-rose-700"
          >
            Order on WhatsApp
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Featured />
        <WhyChoose />
        <Builder />
        <section id="reviews">
          <Reviews />
        </section>
        <About />
        <section id="contact">
          <ContactCTA />
        </section>
      </main>

      <footer className="border-t border-rose-100 py-10 text-center text-sm text-rose-700/70">
        © {new Date().getFullYear()} Gifteria • Handcrafted in India
      </footer>
    </div>
  )
}

export default App
