// Create web server
// Create a route to handle comments form submission
const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
    <form action="/comments" method="POST">
      <input type="text" name="username" placeholder="username" required>
      <input type="text" name="comment" placeholder="comment" required>
      <button>Submit</button>
    </form>
  `);
});

app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  res.send(`Thank you for your comment, ${username}!`);
});

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
