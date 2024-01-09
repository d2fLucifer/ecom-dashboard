import React from "react";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
const CreateCategoryModal = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Create </Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Category</Modal.Header>
        <Modal.Body>
          <div className="flex gap-32">
            <div className="gap-2 flex flex-col w-1/2 ">
              <label className="font-medium" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="rounded-lg border border-gray-300"
              />

              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="file_input"
              >
                Upload file
              </label>
              <input
                className="block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="file_input_help"
                id="file_input"
                type="file"
              />
              <p
                className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                id="file_input_help"
              >
                SVG, PNG, JPG, or GIF (MAX. 800x400px).
              </p>
            </div>
            <img
              className="rounded w-32 h-32"
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt="Extra large avatar"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>Create </Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateCategoryModal;
