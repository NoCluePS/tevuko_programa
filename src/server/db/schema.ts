// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  bigint,
  index,
  mysqlTableCreator,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = mysqlTableCreator(
  (name) => `tevuko_programa_${name}`,
);

export const stats = createTable(
  "stats",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
    retire: varchar("retire_number", {
      length: 255,
    }).notNull(),
    pijus: varchar("pijus", {
      length: 255,
    }).notNull(),
    elze: varchar("elze", {
      length: 255,
    }).notNull(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt").onUpdateNow(),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.retire),
  }),
);
