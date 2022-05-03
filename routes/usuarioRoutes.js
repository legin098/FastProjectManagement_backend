import express from "express";
import { autenticar, comprobarToken, confirmar, nuevoPassword, reestablecerPassword, registrar } from "../controllers/usuarioController.js";

const router = express.Router();

//Autenticacion, Registro y Confirmacion de usuarios
router.post("/", registrar);
router.post("/login", autenticar);
router.get("/confirmar/:token", confirmar);
router.post("/reestablecer-password", reestablecerPassword);
router.route("/reestablecer-password/:token").get(comprobarToken).post(nuevoPassword);

export default router;
