const nodemailer= require("nodemailer")

const sendEmail = async options =>{
    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "tech.evolution.tic@gmail.com",
          pass: "t3ch.3v0lut10n"
        }
      });
    const mensaje={
        from: "TechEvolution Store <tech.evolution.tic@gmail.com>",
        to: options.email,
        subject: options.subject,
        text: options.mensaje
    }

    await transport.sendMail(mensaje)
}

module.exports= sendEmail;