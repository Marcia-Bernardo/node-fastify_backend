import { sql } from "./dbConection.js";

// await sql`DROP TABLE IF EXISTS videos;`;

await sql`

 CREATE TABLE videos(
    id          TEXT PRIMARY KEY,
    title       TEXT,
    description TEXT,
    duration    INTEGER
)`;
