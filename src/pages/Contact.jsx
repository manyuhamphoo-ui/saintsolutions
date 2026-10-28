import PageHeader from '../components/PageHeader'
import Form from '../components/Form'
import Reveal from '../components/Reveal'
import { serviceOptions } from '../data/content'

const fields = [
  {
    name: 'name',
    label: 'Your Name',
    type: 'text',
    placeholder: 'Jane Dlamini'
  },
  {
    name: 'email',
    label: 'Email Address',
    type: 'email',
    placeholder: 'your@email.com'
  },
  {
    name: 'phone',
    label: 'Phone / WhatsApp',
    type: 'text',
    placeholder: '063 682 1672'
  },
  {
    name: 'business',
    label: 'Business Name',
    type: 'text',
    placeholder: 'Your company name'
  },
  {
    name: 'service',
    label: 'Service Required',
    type: 'select',
    options: serviceOptions
  },
  {
    name: 'message',
    label: 'Tell Us About Your Project',
    type: 'textarea',
    placeholder:
      'Tell us about your business, your goals, and how SaintSolutions can help you grow online.'
  }
]

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Let's Build Something Amazing"
        text="Have a business idea, website project, or digital challenge? SaintSolutions helps businesses build a stronger online presence."
      />

      <section className="pb-24">
        <div className="container-x grid gap-10 lg:grid-cols-3">

          <Reveal className="lg:col-span-2">

            <Form
              fields={fields}
              submitLabel="Send Message"
              successTitle="Message Sent Successfully!"
              successText="Thank you for contacting SaintSolutions. Your enquiry has been received. We will get back to you within one business day."
            />

          </Reveal>


          <Reveal delay={0.1}>

            <aside className="space-y-8 rounded-2xl border border-white/10 bg-panel p-8">


              {/* EMAIL */}
              <div>

                <h3 className="font-semibold text-gold">
                  Email
                </h3>

                <a
                  href="mailto:saintsolutionsupport@gmail.com"
                  className="mt-2 block text-white/70 hover:text-gold transition"
                >
                  saintsolutionsupport@gmail.com
                </a>

              </div>


              {/* WHATSAPP */}
              <div>

                <h3 className="font-semibold text-gold">
                  WhatsApp / Phone
                </h3>

                <a
                  href="https://wa.me/27636821672"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-white/70 hover:text-gold transition"
                >
                  063 682 1672
                </a>


                <a
                  href="https://wa.me/27636821672"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 rounded-lg bg-gold px-5 py-2 text-black font-semibold hover:opacity-80 transition"
                >
                  Chat on WhatsApp
                </a>

              </div>


              {/* LOCATION */}
              <div>

                <h3 className="font-semibold text-gold">
                  Location
                </h3>

                <p className="mt-2 text-white/70">
                  Pretoria, Gauteng
                  <br />
                  South Africa
                  <br />
                  Serving businesses nationwide and worldwide
                </p>

              </div>


              {/* HOURS */}
              <div>

                <h3 className="font-semibold text-gold">
                  Business Hours
                </h3>

                <p className="mt-2 text-white/70">

                  Monday – Friday
                  <br />
                  07:00 – 22:00 SAST

                  <br />
                  <br />

                  Saturday – Sunday
                  <br />
                  07:00 – 12:00 SAST

                  <br />
                  <br />

                  WhatsApp enquiries available

                </p>

              </div>


              {/* AUDIT OFFER */}
              <div className="rounded-xl border border-gold/30 bg-gold/5 p-5">

                <h3 className="font-semibold text-gold mb-2">
                  Free Website Audit
                </h3>


                <p className="text-white/70 text-sm leading-relaxed">

                  Already have a website?
                  SaintSolutions will analyse your website's
                  design, performance, mobile experience, SEO,
                  security, and customer journey to identify
                  opportunities for improvement and growth.

                </p>

              </div>


              {/* WHY US */}
              <div className="rounded-xl border border-white/10 p-5">

                <h3 className="font-semibold text-white mb-2">
                  Why Choose SaintSolutions?
                </h3>


                <ul className="space-y-2 text-sm text-white/60">

                  <li>✓ Modern business websites</li>
                  <li>✓ E-commerce solutions</li>
                  <li>✓ Website improvement audits</li>
                  <li>✓ Digital growth strategies</li>
                  <li>✓ Personalised business support</li>

                </ul>

              </div>


            </aside>

          </Reveal>


        </div>
      </section>
    </>
  )
}