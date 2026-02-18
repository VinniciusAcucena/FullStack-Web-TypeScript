import z from "zod";

export const BandSchema = z.object({
  name: z.string().min(1),
  slug: z.string().min(1),
  description: z.string().optional(),
  status: z.enum(["ACTIVE", "INACTIVE"]).default("ACTIVE"),
});

const uuidRegex =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export const BandPatchSchema = BandSchema.extend({
  id: z.string("ID inválido").regex(uuidRegex, "ID inválido"),
});

export const BandArraySchema = z.array(BandSchema).min(1);
