import express from "express";
import {
  autenticar,
  comprobarToken,
  confirmar,
  nuevoPassword,
  perfil,
  restablecerPassword,
  registrar,
} from "../controllers/usuarioController.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

//Autenticacion, Registro y Confirmacion de usuarios
router.post("/", registrar);
router.post("/login", autenticar);
router.get("/confirmar/:token", confirmar);
router.post("/restablecer-password", restablecerPassword);
router.route("/restablecer-password/:token").get(comprobarToken).post(nuevoPassword);

router.get("/perfil", checkAuth, perfil);

export default router;
