import { Band } from "../../../../../generated/prisma";

export interface BandList {
  pagination: {
    currentPage: number;
    totalItems: number;
    totalPages: number;
  };
  bands: Band[];
}
