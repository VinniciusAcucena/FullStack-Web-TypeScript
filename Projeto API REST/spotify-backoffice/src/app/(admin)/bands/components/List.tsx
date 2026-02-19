"use client";

import Button from "@/app/components/Button";
import { Band } from "../../../../../generated/prisma";
import React, { useState } from "react";
import Loading from "../../../components/Loading";
import Pagination from "./Pagination";
import { BandList } from "../types/common";
import Edit from "./Edit";
import Remove from "./Remove";

interface Props {
  data: BandList | null;
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
  const [bandEdit, setBandEdit] = useState<Band | null>(null);
  const [editIsOpen, setEditIsOpen] = useState<boolean>(false);

  const [bandRemove, setBandRemove] = useState<Band | null>(null);
  const [removeIsOpen, setRemoveIsOpen] = useState<boolean>(false);

  const handleEditClick = (band: Band) => {
    setBandEdit(band);
    setEditIsOpen(true);
  };
  const handleRemoveClick = (band: Band) => {
    setBandRemove(band);
    setRemoveIsOpen(true);
  };

  const TableRow = ({ band }: { band: Band }) => {
    return (
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-gray-800">
          {band.name}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-gray-800">
          {band.description && band.description.length > 50
            ? `${band.description.slice(0, 50)}...`
            : band.description}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-gray-800">
          <span
            className={`inline-flex items-center px-2 py-0.5 rounded ${band.status === "ACTIVE" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
          >
            {band.status}
          </span>
        </td>
        <td className="text-right font-medium space-x-4 whitespace-nowrap">
          <Button onClick={() => handleEditClick(band)}>Editar</Button>
          <Button onClick={() => handleRemoveClick(band)}>Excluir</Button>
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
              Nome
            </th>
            <th scope="col" className="px-6 py-3">
              Descrição
            </th>
            <th scope="col">Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data?.bands) && data.bands.length > 0 ? (
            data.bands.map((band) => <TableRow key={band.id} band={band} />)
          ) : (
            <tr>
              <td colSpan={2} className="text-center text-gray-500 py-4">
                {loading ? <Loading></Loading> : "Nenhuma banda encontrada"}
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

      {editIsOpen && bandEdit && (
        <Edit
          band={bandEdit}
          setIsOpen={setEditIsOpen}
          onSuccess={() => onSuccess()}
          setCurrentPage={setCurrentPage}
        ></Edit>
      )}

      {removeIsOpen && bandRemove && (
        <Remove
          band={bandRemove}
          setIsOpen={setRemoveIsOpen}
          onSuccess={() => onSuccess()}
          setCurrentPage={setCurrentPage}
        ></Remove>
      )}
    </div>
  );
}
