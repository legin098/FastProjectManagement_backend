import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
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

export const emailRestablecerPassword = async (datos) => {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  //informacion del email

  const info = await transport.sendMail({
    from: '"FPM - Administrador de proyectos 👻" <Administrador@fpm.com> ',
    to: email,
    subject: "FPM - Restablece tu Password 🔐",
    text: "Restablece tu password en FPM 😁",
    html: `
    <h3>Hola ${nombre}</h3>
    <p>Has solicitado restablecer tu password en Fast Project Management</p>
    <p>Sigue el siguiente enlace para restablecer tu password:
    <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Restablecer password</a>
    </p>
    <p>Si no has solicitado esta accion en FPM, ignora este mensaje</p>
    `,
  });
};
