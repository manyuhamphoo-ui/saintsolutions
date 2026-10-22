import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Button from './Button'
import { supabase } from '../lib/supabase'

export default function Form({
  fields,
  submitLabel,
  successTitle,
  successText
}) {

  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')


  const handleSubmit = async (e) => {

    e.preventDefault()

    setLoading(true)
    setError('')


    const formData = Object.fromEntries(
      new FormData(e.target)
    )


    try {

      const { error } = await supabase
        .from('messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            business_name: formData.business,
            service: formData.service,
            message: formData.message,
            status: 'New',
            source: 'Website'
          }
        ])


      if (error) {
        throw error
      }


      setSent(true)

      e.target.reset()


    } catch (error) {

      console.error(
        'Submission error:',
        error
      )

      setError(
        'Something went wrong. Please try again or contact us directly.'
      )


    } finally {

      setLoading(false)

    }

  }


  return (

    <AnimatePresence mode="wait">

      {sent ? (

        <motion.div
          key="success"
          initial={{
            opacity:0,
            scale:0.95
          }}
          animate={{
            opacity:1,
            scale:1
          }}
          className="
          rounded-2xl
          border
          border-gold/50
          bg-panel
          p-10
          text-center"
          role="status"
        >

          <div
            className="
            mx-auto
            mb-5
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-gold-grad
            text-2xl
            text-ink"
          >
            ✓
          </div>


          <h3 className="
          font-display
          text-3xl
          font-semibold">

            {successTitle}

          </h3>


          <p className="
          mt-3
          text-white/60">

            {successText}

          </p>


        </motion.div>


      ) : (


        <motion.form

          key="form"

          onSubmit={handleSubmit}

          initial={{
            opacity:0
          }}

          animate={{
            opacity:1
          }}

          exit={{
            opacity:0
          }}

          className="
          space-y-5
          rounded-2xl
          border
          border-white/10
          bg-panel/60
          p-6
          sm:p-10"

        >


          {fields.map((f)=>(


            <div key={f.name}>


              <label

                htmlFor={f.name}

                className="
                mb-2
                block
                text-sm
                font-medium
                text-white/80"

              >

                {f.label}

              </label>



              {f.type === 'select' ? (


                <select

                  id={f.name}

                  name={f.name}

                  required={f.required !== false}

                  defaultValue=""

                  className="input"

                >

                  <option value="" disabled>
                    Select an option
                  </option>


                  {f.options.map((option)=>(

                    <option
                      key={option}
                      value={option}
                    >

                      {option}

                    </option>

                  ))}


                </select>



              ) : f.type === 'textarea' ? (


                <textarea

                  id={f.name}

                  name={f.name}

                  rows={5}

                  required={f.required !== false}

                  placeholder={f.placeholder}

                  className="
                  input
                  resize-none"

                />



              ) : (


                <input

                  id={f.name}

                  name={f.name}

                  type={f.type}

                  required={f.required !== false}

                  placeholder={f.placeholder}

                  className="input"

                />


              )}


            </div>


          ))}



          {error && (

            <div className="
            rounded-lg
            border
            border-red-500/40
            bg-red-500/10
            p-4
            text-sm
            text-red-300">

              {error}

            </div>

          )}



          <Button

            type="submit"

            disabled={loading}

            className="
            w-full
            disabled:opacity-60"

          >

            {loading
              ? 'Sending...'
              : submitLabel
            }


          </Button>


        </motion.form>


      )}

    </AnimatePresence>

  )
}