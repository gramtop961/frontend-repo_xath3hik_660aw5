import { motion } from 'framer-motion'
import { Box, Gift, MessageSquareHeart, CheckCircle2 } from 'lucide-react'

const steps = [
  { icon: Box, title: 'Choose a Box', desc: 'Pick from keepsake trunks, baskets, or luxe magnetic boxes.' },
  { icon: Gift, title: 'Add Gifts', desc: 'Select from artisanal treats, self-care, stationery and more.' },
  { icon: MessageSquareHeart, title: 'Add a Personal Message', desc: 'We handwrite messages on premium cards for that warm touch.' },
  { icon: CheckCircle2, title: 'Finalize & Place Order', desc: 'Approve your preview and we package + ship with care.' },
]

export default function Builder() {
  return (
    <section id="custom" className="bg-gradient-to-b from-white to-rose-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-rose-900 text-center">Custom Hamper Builder</h2>
        <p className="text-rose-700/70 text-center mt-2 max-w-2xl mx-auto">Create something as unique as your recipient. Our simple 4-step flow makes it effortless.</p>

        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6 mt-10">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white rounded-3xl p-6 border border-rose-100 shadow-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center mb-4">
                <s.icon size={22} />
              </div>
              <h3 className="font-medium text-rose-900">{i + 1}. {s.title}</h3>
              <p className="text-rose-700/70 text-sm mt-1">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
