import { fastify } from "fastify";
import { videoRouter } from "./routes/videosRoutes.js";

const server = fastify();

server.register(videoRouter, { prefix: "/videos" });
server.listen({
  host: "0.0.0.0",
  port: process.env.PORT ?? 3333,
});
