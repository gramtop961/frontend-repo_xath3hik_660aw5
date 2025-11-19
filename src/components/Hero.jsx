import { motion } from 'framer-motion'

const bgUrl = 'https://images.unsplash.com/photo-1617038260897-896cda33499b?q=80&w=2070&auto=format&fit=crop'

export default function Hero({ onExplore }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={bgUrl} alt="Handcrafted gift hampers" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,245,248,0.8),rgba(255,245,248,0.95))]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-28 sm:py-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-block px-3 py-1 rounded-full text-rose-600 bg-rose-100 border border-rose-200 text-sm mb-5">Premium handcrafted gifting</span>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-rose-900 leading-tight">
            Gifteria — Handcrafted Hampers Made With Love
          </h1>
          <p className="mt-5 text-lg text-rose-700/80">
            Thoughtfully curated premium gift hampers for every occasion.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#featured"
              onClick={onExplore}
              className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-rose-600 text-white shadow-sm hover:bg-rose-700 transition-colors"
            >
              Explore Hampers
            </a>
            <a
              href="https://wa.me/911234567890?text=Hi%20Gifteria!%20I%20want%20to%20order%20a%20hamper."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-white/70 backdrop-blur border border-rose-200 text-rose-700 hover:bg-white transition"
            >
              Order on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 w-[120%] h-40 rounded-[100%] bg-gradient-to-b from-transparent to-white"></div>
    </section>
  )
}
