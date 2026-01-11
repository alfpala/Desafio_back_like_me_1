
import express from "express";
import cors from "cors";
import pkg from "pg";
import pool from "./db/config.js";

import { getAllPosts, createPost } from "./db/consultas.js";
const { Pool } = pkg;

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


app.get("/posts", async (req, res) => {
  try {
    const post = await getAllPosts();
    res.status(200).json({post});    
  } catch (error) {
    res.status(500).json({ error: "Error al obtener posts" });
  }
});

app.post("/posts", async (req, res) => {
  
  try {
    const { titulo, url, descripcion } = req.body;
    const newPost = await createPost({ titulo, url, descripcion });
    res.status(201).json({post:newPost});
  } catch (error) {
    res.status(500).json({ error: "Error al crear post" });
  }
});

// PARTE II
/*
app.put("/posts/like/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query(
      "UPDATE posts SET likes = likes + 1 WHERE id = $1",
      [id]
    );
    res.json({ message: "Like agregado" });
  } catch (error) {
    res.status(500).json({ error: "Error al dar like" });
  }
});

app.delete("/posts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM posts WHERE id = $1", [id]);
    res.json({ message: "Post eliminado" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar post" });
  }
});
*/
app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});
