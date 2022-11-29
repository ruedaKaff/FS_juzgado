import { response } from "express";
import { connection } from "../common/connection.js";
import "dotenv/config.js";
const find = (req, res = response) => {

connection.query (
    `
    SELECT *
    FROM acusado
    
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
