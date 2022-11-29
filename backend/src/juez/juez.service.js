import { response } from "express";
import { connection } from "../common/connection.js";
import "dotenv/config.js";
const find = (req, res = response) => {

connection.query (
    `
    SELECT juez.nombre_juez, juez.foto_juez, juez.id_juez, juzgado.nombre_juzgado
    FROM juez
    INNER JOIN juzgado ON juez.id_juzgado = juzgado.id_juzgado;
   `,
    [],
    function (err, result, fields) {
      result.length == 0
        ? res.status(404).json({ response: process.env.DEFAULT })
        : res.json(result);
    }
  );
};

export { find };
