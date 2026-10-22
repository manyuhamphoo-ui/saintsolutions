import PageHeader from '../components/PageHeader'
import Form from '../components/Form'
import { industryOptions } from '../data/content'

const fields = [
  { name: 'business', label: 'Business name', type: 'text', placeholder: 'Your company' },
  { name: 'url', label: 'Website URL', type: 'url', placeholder: 'https://yourbusiness.co.za' },
  { name: 'industry', label: 'Industry', type: 'select', options: industryOptions },
  { name: 'challenge', label: 'Main challenge', type: 'textarea', placeholder: 'For example: low traffic, slow site, few enquiries' },
  { name: 'email', label: 'Email address', type: 'email', placeholder: 'you@business.co.za' },
]

export default function Audit() {
  return (
    <>
      <PageHeader title="Free Website Audit" text="We review your speed, SEO, mobile experience and conversions, then send you a prioritised action plan." />
      <section className="pb-24">
        <div className="container-x max-w-2xl">
          <Form fields={fields} submitLabel="Request my audit" successTitle="Audit requested" successText="We will review your website and email your report within 3 business days." />
        </div>
      </section>
    </>
  )
}
