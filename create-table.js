import { sql } from "./dbsql.js";

async function createTable() {
  await sql`DROP TABLE IF EXISTS videos`;

  await sql`
  CREATE TABLE videos (
    id          TEXT PRIMARY KEY,
    title       TEXT,
    description TEXT,
    duration    INTEGER
  );
`;
}

createTable();
