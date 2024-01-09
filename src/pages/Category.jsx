import React, { useState } from "react";
import { Table } from "flowbite-react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateCategoryModal from "../components/CreateCategoryModal";
import EditCategoryModal from "../components/EditCategoryModal";

const Category = () => {
  const [openModal, setOpenModal] = useState(false);
  const [count, setCount] = useState(0);
  return (
    <div className="overflow-x-auto ">
      <div className="py-3 flex justify-between">
        <CreateCategoryModal />
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
          <Table.HeadCell>Image</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>

          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              <img
                className="rounded w-24 h-24"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="Extra large avatar"
              />
            </Table.Cell>
            <Table.Cell>Sport</Table.Cell>
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
        <EditCategoryModal openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </div>
  );
};

export default Category;
