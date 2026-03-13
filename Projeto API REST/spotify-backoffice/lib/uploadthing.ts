import { generateUploadButton } from "@uploadthing/react";
import type { UploadRouter } from "@/app/api/uploadthing/core";
import { generateUploadDropzone } from "@uploadthing/react";

export const UploadDropzone = generateUploadDropzone<UploadRouter>();

export const UploadButton = generateUploadButton<UploadRouter>();
