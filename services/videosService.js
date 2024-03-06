import { VideoStore } from "../store/videoStore.js";

const database = new VideoStore();

export class VideoService {
  async create(title, description, duration) {
    if (title === "" || title === undefined) {
      return "Title is empty";
    }

    if (description === "" || description === undefined) {
      return "Description is empty";
    }

    if (duration === "" || duration === undefined) {
      return "Duration is empty";
    }
    const isCreated = await database.create({
      title,
      description,
      duration,
    });
    console.log(isCreated);

    if (isCreated) {
      return "Success";
    }

    return "Failed";
  }
}
