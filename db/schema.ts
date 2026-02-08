import { pgTable, text, timestamp, unique, uuid } from "drizzle-orm/pg-core";

export const shortLinks = pgTable(
	"short_links",
	{
		id: uuid("id").defaultRandom().primaryKey(),
		userId: text("user_id").notNull(),
		shortCode: text("short_code").notNull(),
		originalUrl: text("original_url").notNull(),
		createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
		updatedAt: timestamp("updated_at", { withTimezone: true })
			.notNull()
			.defaultNow()
			.$onUpdate(() => new Date()),
	},
	(table) => ({
		userShortCodeUnique: unique("short_links_user_id_short_code_unique").on(
			table.userId,
			table.shortCode
		),
	})
);

export type ShortLink = typeof shortLinks.$inferSelect;
export type NewShortLink = typeof shortLinks.$inferInsert;
