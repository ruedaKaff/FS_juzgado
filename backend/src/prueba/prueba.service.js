import { response } from "express";
import { connection } from "../common/connection.js";
import "dotenv/config.js";
const findOne = (req, res = response) => {

connection.query (
    `
    SELECT prueba.descripcion, prueba.veracidad, prueba.foto_prueba, caso.nombre_caso, prueba.id_caso
    FROM prueba
    INNER JOIN caso ON prueba.id_caso = caso.id_caso
    where caso.id_caso = ?
   `,
    [req.params.id],
    function (err, result, fields) {
      result.length == 0
        ? res.status(404).json({ response: process.env.DEFAULT })
        : res.json(result);
    }
  );
};

const create = (req, res = response) => {
  const { descripcion,veracidad,foto_prueba, id_caso,} = req.body;
  const prueba = {
    descripcion,
    veracidad,
    foto_prueba,
    id_caso
  };
  connection.query(
    `
  INSERT INTO prueba  
  SET ?`,prueba,
    function (err, result, fields) {
      err ? res.json(err) : res.json(result);
    }
  );
};

export { findOne, create};
