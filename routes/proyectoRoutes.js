import express from "express";
import {
  agregarColaborador,
  editarProyecto,
  eliminarColaborador,
  eliminarProyecto,
  nuevoProyecto,
  obtenerProyecto,
  obtenerProyectos,
  obtenerTareas,
} from "../controllers/proyectoController.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.route("/").get(checkAuth, obtenerProyectos).post(checkAuth, nuevoProyecto);
router.get("/:id").get(checkAuth, obtenerProyecto).put(checkAuth, editarProyecto).delete(checkAuth, eliminarProyecto);
router.post("/agregar-colaborador/:id", checkAuth, agregarColaborador);
router.post("/agregar-colaborador/:id", checkAuth, eliminarColaborador);
router.get("/tareas/:id", checkAuth, obtenerTareas);

export default router;
