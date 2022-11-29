import { Router } from "express";
const prueba = Router();
import { findOne } from "./prueba.service.js";

prueba.use((req, res, next) => {
  next();
});

/* prueba.get("/", find);
 */
prueba.get("/:id", findOne);

/* prueba.post("/", create);

prueba.put("/:id", update);

prueba.delete("/:id_prueba", remove);
 */
export { prueba };
