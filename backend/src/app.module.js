import express, { json } from "express";
const app = express();
import cors from "cors";
import { caso } from "./casos/caso.module.js";
import { juez } from "./juez/juez.module.js";
import { acusado } from "./acusado/acusado.controller.js";
import { juzgado } from "./juzgado/juzgado.controller.js";
import { prueba } from "./prueba/prueba.module.js";

import "dotenv/config.js";






app 
.use(cors())
.use(json())
.use("/caso", caso)
.use("/juez", juez)
.use("/acusado", acusado)
.use("/juzgado", juzgado)
.use("/prueba", prueba)


export {

    app,

};
