import React, { useState } from "react";
import { Table } from "flowbite-react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateVariationModal from "../components/CreateVariationModal";
import EditVariationModal from "../components/EditVariationModal";

const Variation = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="overflow-x-auto">
      <div className="py-3 flex justify-between">
        <CreateVariationModal setOpenModal={setOpenModal} />
        <input
          type="search"
          name=""
          id=""
          placeholder="Search product"
          className="rounded-lg border-green-800"
        />
      </div>
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Key</Table.HeadCell>
          <Table.HeadCell>Value</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Size
            </Table.Cell>
            <Table.Cell>L</Table.Cell>
            <Table.Cell>
              <a
                href="#"
                className="font-medium mr-5 text-cyan-600 hover:underline dark:text-cyan-500"
                onClick={() => setOpenModal(true)}
              >
                Edit
              </a>
              <DeleteIcon />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      {openModal && (
        <EditVariationModal openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </div>
  );
};
export default Variation;
