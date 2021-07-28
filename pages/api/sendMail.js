const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.NEXT_PUBLIC_SENGRID_KEY)
export default (req, res) => {
  const { name_, email,  client_message} = req.body;
  const msg = {
    to: 'franperejonbarrios@gmail.com', // Change to your recipient
    from: 'desarrolladorfpb@gmail.com', // Change to your verified sender
    subject: `Página personal: ${name_}`,
    text: `${name_} quiere contactar contigo y además te ha escrito el siguiente mensaje: \n
      ${client_message}. \n
      Su email para contactar es: ${email}.\n
      Un saludo.`,
    html: `<strong>${name_}</strong> quiere contactar contigo y además te ha escrito el siguiente mensaje:<br>
    <i>${client_message}</i>.<br>
    Su email para contactar es: <strong>${email}</strong>.<br>
    Un saludo.`,
  }
  res.statusCode = 200
  sgMail
    .send(msg)
    .then((response) => {
      console.log('Email sent')
      res.json({ name: msg, response: response})
    })
    .catch((error) => {
      console.error(error)
      res.json({ name: msg, error: error})
    })
  
  }