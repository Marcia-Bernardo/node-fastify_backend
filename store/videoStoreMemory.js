import { randomUUID } from "node:crypto";

export class VideoStoreMemory {
  #videos = new Map();

  list(search) {
    return Array.from(this.#videos.entries())
      .map((videoArray) => {
        const id = videoArray[0];
        const data = videoArray[1];

        return {
          id,
          ...data,
        };
      })
      .filter((video) => {
        if (search) {
          return video.title.includes(search);
        }

        return true;
      });
  }

  create(video) {
    //Universal Unique ID
    const videoId = randomUUID();

    this.#videos.set(videoId, video);
  }

  update(id, video) {
    const searchId = this.#videos.get(id);
    if (searchId === undefined) {
      return "No video with this ID";
    }
    this.#videos.set(id, video);
  }

  delete(id) {
    this.#videos.delete(id);
  }
}
