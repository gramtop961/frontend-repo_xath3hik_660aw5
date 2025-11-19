import { motion } from 'framer-motion'

const reviews = [
  {
    name: 'Aisha Khan',
    photo: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=200&auto=format&fit=crop',
    text: 'Absolutely loved the curation! Beautiful packaging and the handwritten note made it so special.',
    rating: 5
  },
  {
    name: 'Neha Sharma',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
    text: 'Ordered 20 corporate hampers and the experience was seamless. Premium and on time!',
    rating: 5
  },
  {
    name: 'Riya Patel',
    photo: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=200&auto=format&fit=crop',
    text: 'The custom builder helped me create the perfect birthday surprise. Highly recommended!',
    rating: 5
  }
]

function Stars({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-amber-500">★</span>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-rose-900 text-center">What Customers Say</h2>
        <p className="text-rose-700/70 text-center mt-2 max-w-2xl mx-auto">A few kind words from happy gifters.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-rose-50/60 border border-rose-100 rounded-3xl p-6"
            >
              <div className="flex items-center gap-4">
                <img src={r.photo} alt={r.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-medium text-rose-900">{r.name}</p>
                  <Stars count={r.rating} />
                </div>
              </div>
              <p className="text-rose-700/80 text-sm mt-3">“{r.text}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
