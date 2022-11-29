import { Router } from "express";

const juez = Router();

import { find } from "./juez.service.js";

juez.use((req, res, next) => {
  next();
});

juez.get("/", find);

/* juez.get("/:id", findOne);

juez.post("/", create);

juez.put("/:id", update);

juez.delete("/:id_juez", remove); */

export { juez };
