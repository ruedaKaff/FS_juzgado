import { Router } from "express";

const acusado = Router();

import { find } from "./acusado.service.js";

acusado.use((req, res, next) => {
  next();
});

acusado.get("/", find);

/* juez.get("/:id", findOne);

juez.post("/", create);

juez.put("/:id", update);

juez.delete("/:id_juez", remove); */

export { acusado };
