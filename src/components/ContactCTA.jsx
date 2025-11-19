import { Phone, Mail, MessageCircle } from 'lucide-react'

export default function ContactCTA() {
  return (
    <section className="bg-gradient-to-b from-rose-50 to-white py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-rose-900">Ready to Gift with Gifteria?</h2>
        <p className="text-rose-700/80 mt-3">We deliver locally and PAN India with careful packaging.</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://wa.me/911234567890?text=Hi%20Gifteria!%20I%20want%20to%20order%20a%20hamper."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-rose-600 text-white shadow-sm hover:bg-rose-700"
          >
            <MessageCircle size={18} /> Order on WhatsApp
          </a>
          <div className="flex items-center gap-2 text-rose-800/80">
            <Mail size={18} /> hello@gifteria.demo
          </div>
          <div className="flex items-center gap-2 text-rose-800/80">
            <Phone size={18} /> +91 98765 43210
          </div>
        </div>
      </div>
    </section>
  )
}
