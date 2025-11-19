import { Heart, Sparkles, Settings, Truck } from 'lucide-react'
import { motion } from 'framer-motion'

const items = [
  { icon: Heart, title: 'Curated With Love', desc: 'Every hamper tells a story crafted with care.' },
  { icon: Sparkles, title: 'Premium Handpicked Products', desc: 'Only the finest artisanal brands make the cut.' },
  { icon: Settings, title: 'Full Customization', desc: 'Personalize everything from box to message.' },
  { icon: Truck, title: 'Fast & Safe Delivery', desc: 'Carefully packed and shipped nationwide.' },
]

export default function WhyChoose() {
  return (
    <section className="bg-rose-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-rose-900 text-center">Why Choose Gifteria?</h2>
        <p className="text-rose-700/70 text-center mt-2 max-w-2xl mx-auto">We obsess over the details so your gifts feel effortless and unforgettable.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white rounded-3xl p-6 border border-rose-100 shadow-sm"
            >
              <div className="w-11 h-11 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center mb-4">
                <it.icon size={22} />
              </div>
              <h3 className="font-medium text-rose-900">{it.title}</h3>
              <p className="text-rose-700/70 text-sm mt-1">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
