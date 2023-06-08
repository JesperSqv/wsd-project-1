import { sql } from "../database/database.js";

const create = async (name) => {
  await sql`INSERT INTO shopping_lists (name) VALUES (${ name })`;
};

const findAllActiveShoppingLists = async () => {
  return await sql`SELECT * FROM shopping_lists WHERE active = true`;
};

const findName = async (id) => {
  const rows = await sql`SELECT * FROM shopping_lists where id = ${ id }`;
  if (rows && rows.length > 0) {
    return rows[0];
  }

  return false;
};

export { create, findAllActiveShoppingLists, findName };