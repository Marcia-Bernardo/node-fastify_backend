import { randomUUID } from "node:crypto";

export class DbMemory {
  // #videos = [] ao invés de array irei usar a estrutura de dados Map e dentro do Map não existe o método push

  // create(video) {
  //     this.#videos.push(video)
  // }

  // update(id, video){
  //     this.#videos.push(video)
  // }

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
    this.#videos.set(id, video);
  }

  delete(id) {
    this.#videos.delete(id);
  }
}
