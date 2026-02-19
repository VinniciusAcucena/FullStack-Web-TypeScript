import { Track } from "../../../../../generated/prisma";

export interface TrackList {
  pagination: {
    currentPage: number;
    totalItems: number;
    totalPages: number;
  };
  tracks: Track[];
}
