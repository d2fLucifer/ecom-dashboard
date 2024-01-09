import React, { useState } from "react";
import { Table } from "flowbite-react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateVariationModal from "../components/CreateVariationModal";

const Order = () => {
  const [selectedStatus, setSelectedStatus] = useState("Successful");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleStatusChange = (newStatus) => {
    setSelectedStatus(newStatus);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="overflow-x-clip ">
      <div className="py-3 flex justify-between">
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
          <Table.HeadCell>Order ID</Table.HeadCell>
          <Table.HeadCell>User</Table.HeadCell>
          <Table.HeadCell>Product</Table.HeadCell>
          <Table.HeadCell>Payment</Table.HeadCell>
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>Payment</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              #1345
            </Table.Cell>
            <Table.Cell>Lucifer</Table.Cell>
            <Table.Cell>
              <div className="flex gap-2 ">
                <img
                  className="rounded w-12 h-12"
                  src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt="Extra large avatar"
                />
                <span className="mt-4">Gaming Gear</span>
              </div>
            </Table.Cell>
            <Table.Cell>Cash</Table.Cell>
            <Table.Cell>27/10/2023</Table.Cell>
            <Table.Cell>
              <div className="relative inline-block text-left">
                <button
                  type="button"
                  onClick={toggleDropdown}
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {selectedStatus}
                </button>
                {isDropdownOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <button
                        onClick={() => handleStatusChange("Successful")}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        Successful
                      </button>
                      <button
                        onClick={() => handleStatusChange("Pending")}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        Pending
                      </button>
                      <button
                        onClick={() => handleStatusChange("Failed")}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        Failed
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </Table.Cell>

            <Table.Cell>
              <a
                href="#"
                className="font-medium mr-5 text-cyan-600 hover:underline dark:text-cyan-500"
              >
                <DeleteIcon />
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default Order;
