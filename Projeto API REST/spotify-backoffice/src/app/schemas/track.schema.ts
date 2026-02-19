import z from "zod";

export const TrackSchema = z.object({
  name: z.string().min(1),
  slug: z.string().min(1),
  durationInSeconds: z.int().optional(),
  status: z.enum(["ACTIVE", "INACTIVE"]).default("ACTIVE"),
});

const uuidRegex =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export const TrackPatchSchema = TrackSchema.extend({
  id: z.string("ID inválido").regex(uuidRegex, "ID inválido"),
});

export const TrackArraySchema = z.array(TrackSchema).min(1);
