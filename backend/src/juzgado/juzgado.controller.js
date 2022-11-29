import { Router } from "express";
const juzgado = Router();
import { find } from "./juzgado.service.js";

juzgado.use((req, res, next) => {
  next();
});

juzgado.get("/", find);

/* juzgado.get("/:id", findOne);

juzgado.post("/", create);

juzgado.put("/:id", update);

juzgado.delete("/:id_juzgado", remove); */

export { juzgado };
