import z from "zod";

export const TrackSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  durationInSeconds: z.int().optional(),
  status: z.enum(["ACTIVE", "INACTIVE"]).default("ACTIVE"),
  imageUrl: z.string().url().optional(),
  audioUrl: z.string().url().optional(),
  bandId: z.string().uuid().optional(),
});

const uuidRegex =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export const TrackPatchSchema = TrackSchema.extend({
  id: z.string("ID inválido").regex(uuidRegex, "ID inválido"),
});

export const TrackArraySchema = z.array(TrackSchema).min(1);
