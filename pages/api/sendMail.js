import { EmailTemplate } from '../../components/EmailTemplate'
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

export default async(req, res) => {
  const { name_, email,  client_message} = req.body
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['franperejonbarrios@gmail.com'],
    subject: `Página personal: ${name_}`,
    react: EmailTemplate({ name_, email, client_message }),
  })

  if (error) return res.status(400).json(error)

  res.status(200).json(data)
}
