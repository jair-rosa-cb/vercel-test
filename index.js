import "dotenv/config";
import express from 'express'

const app = express();
app.use(express.json());

app.get("/api", (req, res) => {
  res.status(200).send({
    url: process.env.DISCORD_URL,
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
