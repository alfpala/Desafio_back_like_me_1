INSERT INTO posts (titulo, img, descripcion, likes) VALUES
('Primer Post', 'https://example.com/image1.jpg', 'Este es el primer post de ejemplo.', 10),
('Segundo Post', 'https://example.com/image2.jpg', 'Este es el segundo post de ejemplo.', 20),
('Tercer Post', 'https://example.com/image3.jpg', 'Este es el tercer post de ejemplo.', 30);

SELECT * FROM posts;

UPDATE posts SET likes = likes + 1 WHERE id = 1;

SELECT * FROM posts WHERE id = 1;

DELETE FROM posts WHERE id = 2;

SELECT * FROM posts;