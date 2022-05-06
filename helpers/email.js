import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "ddf11cd571bd06",
      pass: "1bf89d6a27942c",
    },
  });

  //informacion del email

  const info = await transport.sendMail({
    from: '"FPM - Administrador de proyectos 👻" <Administrador@fpm.com> ',
    to: email,
    subject: "FPM - Confirmación de cuenta 📌",
    text: "Comprueba tu cuenta en FPM 😁",
    html: `
    <h3>Hola ${nombre}</h3>
    <p>Comprueba tu cuenta en Fast Project Management</p>
    <p>Tu cuente ya esta casi lista, solo debes comprobar en el siguiente enlace:
    <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar cuenta</a>
    </p>
    <p>Si no has solicitado una cuenta en FPM, ignora este mensaje</p>
    `,
  });
};
