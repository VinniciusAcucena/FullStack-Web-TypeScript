"use server";

export type CreateBandFormState = {
  ok: boolean;
  message?: string;
  errors?: Record<string, string[]>;
};

export async function createBandAction(
  _prevState: CreateBandFormState,
  formData: FormData,
): Promise<CreateBandFormState> {
  return { ok: true };
}
