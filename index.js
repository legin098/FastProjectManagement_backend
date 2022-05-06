import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import conectarDb from "./config/db.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import proyectoRoutes from "./routes/proyectoRoutes.js";
import tareaRoutes from "./routes/tareaRoutes.js";

const app = express();
app.use(express.json());

dotenv.config();

conectarDb();

//configuracion de cors
const whiteList = [process.env.FRONTEND_URL];

const corsOptions = {
  origin: function (origin, callback) {
    console.log(origin);
    if (whiteList.includes(origin)) {
      //Puede consultar la api
      callback(null, true);
    } else {
      //No esta permitido
      callback(new Error("Erro de Cors"));
    }
  },
};

app.use(cors(corsOptions));

// Routing
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/proyectos", proyectoRoutes);
app.use("/api/tareas", tareaRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
