var nodemailer = require("nodemailer");
// email sender function
exports.sendEmail = function(data) {
  // Definimos el transporter
  var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "buscaride@gmail.com",
      pass: "Bu$c4.Ride.2017"
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
      console.log("existio un error en el envio de email");
      //console.log(error);
      return false;
    } else {
      console.log("Email enviado: " + info.response);
      return true;
    }
  });
};
