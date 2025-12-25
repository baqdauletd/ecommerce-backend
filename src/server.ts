import { buildApp } from "./app";

const app = buildApp();

app.listen({ port: 3000 }, () => {
  console.log("Server running on http://localhost:3000");
});
