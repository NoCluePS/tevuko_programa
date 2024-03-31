import { desc } from "drizzle-orm";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { stats } from "~/server/db/schema";

export const retireRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        retire: z.string().regex(/^[0-9]*$/g, "NUMBER_ONLY"),
        pijus: z.string().regex(/^[0-9]*$/g, "NUMBER_ONLY"),
        elze: z.string().regex(/^[0-9]*$/g, "NUMBER_ONLY"),
      }),
    )
    .mutation(async ({ ctx, input: { retire, pijus, elze } }) => {
      await ctx.db.insert(stats).values({
        retire,
        pijus,
        elze,
      });
    }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.select().from(stats);
  }),

  getLatest: publicProcedure.query(async ({ ctx }) => {
    const data = await ctx.db
      .select()
      .from(stats)
      .orderBy(desc(stats.createdAt))
      .limit(1);
    
    return data[0];
  }),
});
