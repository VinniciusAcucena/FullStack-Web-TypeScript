import z from "zod";

export const TrackSchema = z.object({
  name: z.string().min(1),
  slug: z.string().min(1),
  durationInSeconds: z.int().optional(),
  status: z.enum(["ACTIVE", "INACTIVE"]).default("ACTIVE"),
});

export const TrackArraySchema = z.array(TrackSchema).min(1);
