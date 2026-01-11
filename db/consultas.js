import { text } from "express";
import pool from "./config.js";   

// Obtener todos los posts GET
export const getAllPosts = async () => {
  const sqlQuery = "SELECT * FROM posts ORDER BY id DESC";
  const result = await pool.query(sqlQuery);
  return result.rows;
};

//POST : Crear un nuevo post
export const createPost = async ({titulo, url, descripcion}) => {
  const sqlQuery = {
    text: 'INSERT INTO posts (titulo, img, descripcion, likes)',
    values: [titulo, url, descripcion,0]
  };

  const result = await pool.query(sqlQuery);
  return result.rows[0];
};