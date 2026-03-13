import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const uploadRouter = {
  bandImage: f({
    image: { maxFileSize: "2MB" },
  }).onUploadComplete(async ({ file }) => {
    return { url: file.ufsUrl };
  }),

  trackImage: f({
    image: { maxFileSize: "4MB" },
  }).onUploadComplete(async ({ file }) => {
    console.log("UPLOAD COMPLETE SERVER", file);
    console.log("SERVEr URL:", process.env.UPLOADTHING_URL);
    return { url: file.ufsUrl };
  }),

  trackAudio: f({
    audio: { maxFileSize: "8MB", maxFileCount: 1 },
  }).onUploadComplete(async ({ file }) => {
    return { url: file.ufsUrl };
  }),
} satisfies FileRouter;

export type UploadRouter = typeof uploadRouter;
