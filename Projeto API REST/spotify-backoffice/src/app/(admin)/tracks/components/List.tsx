"use client";

import Button from "@/app/components/Button";
import { Track } from "../../../../../generated/prisma";
import React, { useState } from "react";
import Loading from "../../../components/Loading";
import Pagination from "./Pagination";
import { TrackList } from "../types/common";
import Edit from "./Edit";
import Remove from "./Remove";
import { TrackWithBand } from "../actions/fetchTracksAction";

interface Props {
  data: TrackList | null;
  loading: boolean;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  onSuccess: () => void;
}

export default function List({
  data,
  loading,
  currentPage,
  setCurrentPage,
  onSuccess,
}: Props) {
  const [trackEdit, setTrackEdit] = useState<Track | null>(null);
  const [editIsOpen, setEditIsOpen] = useState<boolean>(false);

  const [trackRemove, setTrackRemove] = useState<Track | null>(null);
  const [removeIsOpen, setRemoveIsOpen] = useState<boolean>(false);

  const handleEditClick = (track: Track) => {
    setTrackEdit(track);
    setEditIsOpen(true);
  };
  const handleRemoveClick = (track: Track) => {
    setTrackRemove(track);
    setRemoveIsOpen(true);
  };

  const TableRow = ({ track }: { track: any }) => {
    return (
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-gray-800">
          {track.title}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-gray-800">
          {track.band.name}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-gray-800">
          {track.durationInSeconds}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-gray-800">
          <span
            className={`inline-flex items-center px-2 py-0.5 rounded ${track.status === "ACTIVE" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
          >
            {track.status}
          </span>
        </td>
        <td className="text-right font-medium space-x-4 whitespace-nowrap">
          <Button onClick={() => handleEditClick(track)}>Editar</Button>
          <Button onClick={() => handleRemoveClick(track)}>Excluir</Button>
        </td>
      </tr>
    );
  };

  return (
    <div>
      <table className="min-w-full border border-gray-200 rounded-sm overflow-hidden">
        <thead className="bg-gray-800 text-gray-50 uppercase text-left text-sm">
          <tr>
            <th scope="col" className="px-6 py-3">
              Titulo
            </th>
            <th scope="col" className="px-6 py-3">
              Banda
            </th>
            <th scope="col" className="px-6 py-3">
              Duração em segundos
            </th>
            <th scope="col">Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data?.tracks) && data.tracks.length > 0 ? (
            data.tracks.map((track) => (
              <TableRow key={track.id} track={track} />
            ))
          ) : (
            <tr>
              <td colSpan={2} className="text-center text-gray-500 py-4">
                {loading ? (
                  <Loading></Loading>
                ) : (
                  "Nenhuma música encontrada encontrada"
                )}
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {data?.pagination.totalPages && (
        <Pagination
          totalPages={data?.pagination.totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        ></Pagination>
      )}

      {editIsOpen && trackEdit && (
        <Edit
          track={trackEdit}
          setIsOpen={setEditIsOpen}
          onSuccess={() => onSuccess()}
          setCurrentPage={setCurrentPage}
        ></Edit>
      )}

      {removeIsOpen && trackRemove && (
        <Remove
          track={trackRemove}
          setIsOpen={setRemoveIsOpen}
          onSuccess={() => onSuccess()}
          setCurrentPage={setCurrentPage}
        ></Remove>
      )}
    </div>
  );
}
