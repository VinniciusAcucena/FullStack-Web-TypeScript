-- AlterTable
ALTER TABLE "bands" ADD COLUMN     "image_url" TEXT;

-- AlterTable
ALTER TABLE "tracks" ADD COLUMN     "audio_url" TEXT,
ADD COLUMN     "image_url" TEXT;
