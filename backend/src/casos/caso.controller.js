import { Router } from "express";
const caso = Router();
import { find } from "./caso.service.js";

caso.use((req, res, next) => {
  next();
});

caso.get("/", find);

/* caso.get("/:id", findOne);

caso.post("/", create);

caso.put("/:id", update);

caso.delete("/:id_caso", remove); */

export { caso };
