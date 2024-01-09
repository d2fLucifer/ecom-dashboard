import React, { useState } from "react";
import { Button } from "flowbite-react";

const CreateUserPage = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const roles = ["Admin", "User", "Guest"];
  console.log(selectedRole);
  const handleRoleChange = (role) => {
    setSelectedRole(role);
  };

  return (
    <div className="mx-24">
      <form action="">
        <img
          src="https://free.clipartof.com/855-Free-Clipart-Of-A-Male-Avatar.png"
          alt=""
          className="rounded w-36 h-36"
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
        <div className="border py-12 mt-12 px-10 flex justify-between">
          <div>
            <div className="flex flex-col gap-2">
              <label className="font-bold" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="rounded-lg border-gray-400 border-1"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="rounded-lg border-gray-400 border-1"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="rounded-lg border-gray-400 border-1"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="role"
              >
                Select Role
              </label>
              <select
                value={selectedRole}
                onChange={(e) => handleRoleChange(e.target.value)}
                id="role"
                name="role"
                className="block w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="">Select Role</option>
                {roles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold" htmlFor="phonenumber">
                Phone
              </label>
              <input
                type="text"
                name="phonenumber"
                id="phonenumber"
                className="rounded-lg border-gray-400 border-1"
              />
            </div>
          </div>
        </div>
        <div className="mt-10 flex  gap-6">
          <Button size="lg">Create</Button>
          <Button size="lg" color="light">
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateUserPage;
