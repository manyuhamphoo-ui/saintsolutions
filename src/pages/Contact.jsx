import PageHeader from '../components/PageHeader'
import Form from '../components/Form'
import Reveal from '../components/Reveal'
import { serviceOptions } from '../data/content'

const fields = [
  { name: 'name', label: 'Your name', type: 'text', placeholder: 'Jane Dlamini' },
  { name: 'email', label: 'Email address', type: 'email', placeholder: 'you@business.co.za' },
  { name: 'business', label: 'Business name', type: 'text', placeholder: 'Your company' },
  { name: 'service', label: 'Service required', type: 'select', options: serviceOptions },
  { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Tell us about your project and goals' },
]

export default function Contact() {
  return (
    <>
      <PageHeader title="Contact Us" text="Tell us about your project. We reply within one business day." />
      <section className="pb-24">
        <div className="container-x grid gap-10 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <Form fields={fields} submitLabel="Send message" successTitle="Message sent" successText="Thank you. We will reply within one business day." />
          </Reveal>
          <Reveal delay={0.1}>
            <aside className="space-y-8 rounded-2xl border border-white/10 bg-panel p-8">
              <div><h3 className="font-semibold text-gold">Email</h3><a href="mailto:hello@saintsolutions.co.za" className="mt-2 block text-white/70 hover:text-gold">hello@saintsolutions.co.za</a></div>
              <div><h3 className="font-semibold text-gold">Location</h3><p className="mt-2 text-white/70">Pretoria, South Africa<br />Working with clients nationwide</p></div>
              <div><h3 className="font-semibold text-gold">Hours</h3><p className="mt-2 text-white/70">Monday to Friday<br />08:00 to 17:00 SAST</p></div>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  )
}
