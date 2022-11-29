import { app } from "./app.module.js";

console.log("escuchando el puerto: " + process.env.PORT);
app.listen(process.env.PORT)