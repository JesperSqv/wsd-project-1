import { sql } from "../database/database.js";

const createItem = async (listId, name) => {
  await sql`INSERT INTO
  shopping_list_items (shopping_list_id, name)
    VALUES (${listId}, ${name})`;
};

const findItems= async (listId) => {
  const rows = await sql`SELECT * FROM shopping_list_items
    WHERE shopping_list_id = ${ listId }`;

  if (rows && rows.length > 0) {
    return rows[0];
  }

  return false;
};

const collectItem = async (id) => {
  await sql`UPDATE shopping_list_items
    SET collected = TRUE WHERE id = ${ id }`;
};

export { createItem, findItems, collectItem };