var nodemailer = require("nodemailer");
// email sender function
exports.sendEmail = function(data) {
  // Definimos el transporter
  var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "ingchristian27@gmail.com",
      pass: "chrisdudao"
    }
  });
  // Definimos el email
  var mailOptions = {
    from: "Buscaride",
    to: data.email,
    subject: data.subject,
    html: data.text
    // html: { path: data.url }
  };
  console.log(data);

  // Enviamos el email
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log("==============================");
      //console.log(error);
      return false;
    } else {
      console.log("Email enviado: " + info.response);
      return true;
    }
  });
};
