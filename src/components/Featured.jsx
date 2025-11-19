import { motion } from 'framer-motion'

const products = [
  {
    name: 'Birthday Glow Box',
    price: '₹2,499',
    desc: 'A cheerful pastel curation with candles, treats and mini blooms.',
    img: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1974&auto=format&fit=crop'
  },
  {
    name: 'Anniversary Love Basket',
    price: '₹3,299',
    desc: 'Romantic picks with gourmet chocolate, diffuser and keepsakes.',
    img: 'https://images.unsplash.com/photo-1603503363442-d206f0f3d5ba?q=80&w=1974&auto=format&fit=crop'
  },
  {
    name: 'Festive Spark Gift Set',
    price: '₹2,999',
    desc: 'Warm, festive tones with artisanal snacks and luxe decor.',
    img: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2070&auto=format&fit=crop'
  },
  {
    name: 'Luxury Pamper Box',
    price: '₹4,499',
    desc: 'Spa-inspired self-care, silk scrunchies and calming scents.',
    img: 'https://images.unsplash.com/photo-1617038261037-3e6be5e5f29a?q=80&w=2070&auto=format&fit=crop'
  },
  {
    name: 'Corporate Delight Hamper',
    price: '₹2,799',
    desc: 'Elegant, branded-ready curation for clients and teams.',
    img: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=1974&auto=format&fit=crop'
  },
  {
    name: 'Custom Build-Your-Own Box',
    price: 'From ₹1,999',
    desc: 'Choose from our library of gifts to create something truly you.',
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1974&auto=format&fit=crop'
  }
]

export default function Featured() {
  return (
    <section id="featured" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-rose-900">Featured Hampers</h2>
            <p className="text-rose-700/70 mt-2">Six best-selling ideas to spark your gifting.</p>
          </div>
          <a href="#custom" className="text-rose-700 hover:text-rose-900 underline decoration-rose-300 decoration-2 underline-offset-4">Build your own →</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group bg-rose-50/60 border border-rose-100 rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(244,114,182,0.08)] hover:shadow-[0_20px_40px_rgba(244,114,182,0.16)] transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-rose-900">{p.name}</h3>
                  <span className="text-rose-700/80 text-sm">{p.price}</span>
                </div>
                <p className="text-rose-700/70 text-sm mt-2">{p.desc}</p>
                <div className="mt-4">
                  <button className="px-4 py-2 rounded-full bg-rose-600 text-white text-sm hover:bg-rose-700">View Demo</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
