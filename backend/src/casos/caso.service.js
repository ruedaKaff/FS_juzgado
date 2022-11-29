import { response } from "express";
import { connection } from "../common/connection.js";
import "dotenv/config.js";
const find = (req, res = response) => {

connection.query (
    `
    SELECT caso.id_caso,caso.nombre_caso, caso.fecha, caso.veredicto, juez.nombre_juez, acusado.nombre_acusado, acusado.foto_acusado
    FROM caso
    INNER JOIN juez ON caso.id_juez = juez.id_juez
    JOIN acusado ON caso.id_acusado = acusado.id_acusado;
    
   `,
    [],
    function (err, result, fields) {
      result.length == 0
        ? res.status(404).json({ response: process.env.DEFAULT })
        : res.json(result);
    }
  );
};

export { find};
