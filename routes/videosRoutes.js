import { VideoService } from "../services/videosService.js";
import { VideoStore } from "../store/videoStore.js";

const database = new VideoStore();
const videoService = new VideoService();
const router = (fastify, _, done) => {
  fastify.post("/", async (req, reply) => {
    const { title, description, duration } = req.body;
    const result = await videoService.create(title, description, duration);
    reply.status(201).send(result);
  });

  fastify.get("/", async (req, reply) => {
    const search = req.query.search;

    const videos = await database.list(search);
    return reply.status(201).send(videos);
  });

  //Route Parameter
  fastify.put("/:id", async (req, reply) => {
    const videoId = req.params.id;
    const { title, description, duration } = req.body;

    await database.update(videoId, {
      title,
      description,
      duration,
    });

    return reply.status(204).send("Update success");
  });

  fastify.delete("/:id", async (req, reply) => {
    const videoId = req.params.id;

    await database.delete(videoId);

    return reply.status(204).send("Delete sucess");
  });

  done();
};
export { router as videoRouter };
