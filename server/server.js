const http = require("http");
const app = require("./app");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("Hello Production World!");
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
