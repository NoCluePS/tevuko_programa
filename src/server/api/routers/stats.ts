import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { stats } from "~/server/db/schema";

export const retireRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        retire: z.number(),
        pijus: z.number(),
        elze: z.number(),
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
});
