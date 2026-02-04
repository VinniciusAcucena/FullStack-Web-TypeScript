"use client";

import Button from "@/app/components/Button";
import { Band } from "../../../../../generated/prisma";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";

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

  useEffect(() => {
    const fetchBands = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/band");
        const bandList: BandList = await response.json();

        setData(bandList);
        setLoading(false);
      } catch (error: unknown) {
        console.log("Error");
      }
    };

    fetchBands();
  }, []);

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
        <div className="flex justify-center mt-8 gap-2">
          <button>Voltar</button>
          {Array.from(
            { length: data?.pagination.totalPages },
            (_, i) => i + 1,
          ).map((pageNumber) => {
            const isActive = pageNumber === data.pagination.currentPage;
            return (
              <button
                key={pageNumber}
                className={`border rounded py-1  px-3 hover:cursor-pointer hover:bg-gray-700 hover:text-gray-300 ${isActive ? `bg-gray-700 text-gray-300` : `bg-white text-gray-800`}`}
              >
                {pageNumber}
              </button>
            );
          })}

          <button>Avançar</button>
        </div>
      )}
    </div>
  );
}
