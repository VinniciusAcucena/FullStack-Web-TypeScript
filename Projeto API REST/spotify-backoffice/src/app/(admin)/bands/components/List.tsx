"use client";

import Button from "@/app/components/Button";
import { Band } from "../../../../../generated/prisma";
import { useEffect, useState } from "react";
import Loading from "../../../components/Loading";
import Pagination from "./Pagination";

interface BandList {
  pagination: {
    currentPage: number;
    totalItems: number;
    totalPages: number;
  };
  bands: Band[];
}

const TableRow = ({ band }: { band: Band }) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-gray-800">{band.name}</td>
      <td className="px-6 py-4 whitespace-nowrap text-gray-800">
        {band.description && band.description.length > 50
          ? `${band.description.slice(0, 50)}...`
          : band.description}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-gray-800">
        <span className="inline-flex items-center px-2 py-0.5 rounded bg-green-100 text-green-800">
          {band.status}
        </span>
      </td>
      <td className="text-right font-medium space-x-4 whitespace-nowrap">
        <Button>Editar</Button>
        <Button>Excluir</Button>
      </td>
    </tr>
  );
};

export default function List() {
  const [data, setData] = useState<BandList | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const fetchBands = async (page: number) => {
      try {
        setData(null);
        setLoading(true);
        const response = await fetch(
          `http://localhost:3001/api/band?page=${page}&take=10`,
        );
        const bandList: BandList = await response.json();

        setData(bandList);
        setLoading(false);
      } catch (error: unknown) {
        console.log("Error");
      }
    };

    fetchBands(currentPage);
  }, [currentPage]);

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
    </div>
  );
}
