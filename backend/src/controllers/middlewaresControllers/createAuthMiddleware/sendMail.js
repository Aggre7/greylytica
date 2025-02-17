const { passwordVerfication } = require('@/emailTemplate/emailVerfication');

const { Resend } = require('resend');

const sendMail = async ({
  email,
  name,
  link,
  greylytica_app_email,
  subject = 'Verify your email | greylytica',
  type = 'emailVerfication',
  emailToken,
}) => {
  const resend = new Resend(process.env.RESEND_API);

  const { data } = await resend.emails.send({
    from: greylytica_app_email,
    to: email,
    subject,
    html: passwordVerfication({ name, link }),
  });

  return data;
};

module.exports = sendMail;
