import React from "react";
import { FileInput, Label } from "flowbite-react";

const ProductInfor = ({ handleFileChange }) => {
  const categories = ["Electronics", "Clothing", "Books", "Toys"]; // Add your desired categories

  return (
    <div>
      <h2 className="text-2xl font-serif">Product Information</h2>

      <form onSubmit={(e) => e.preventDefault()} className="py-12">
        <div className="flex flex-col w-1/2 gap-2">
          <label htmlFor="name" className="font-bold">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="rounded-sm h-10 border-inherit"
          />
        </div>
        <div className="flex flex-col w-1/2 gap-2">
          <label htmlFor="message" className="font-bold">
            Description
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
        <div className="flex flex-col w-1/2 gap-2">
          <label htmlFor="quantity" className="font-bold">
            Quantity In stock
          </label>
          <input
            type="number"
            name="quantity"
            id="quantity"
            className="rounded-sm h-10 border-inherit"
          />
        </div>
        <div className="flex flex-col w-1/2 gap-2">
          <label htmlFor="price" className="font-bold">
            Price
          </label>
          <input
            type="text"
            name="price"
            id="price"
            className="rounded-sm h-10 border-inherit"
          />
        </div>
        <div className="flex flex-col w-1/2 gap-2">
          <label htmlFor="category" className="font-bold">
            Category
          </label>
          <select
            id="category"
            name="category"
            className="rounded-sm h-10 border-inherit"
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="w-1/2">
          <div>
            <Label htmlFor="file-upload-helper-text" value="Upload file" />
          </div>
          <FileInput
            id="file-upload-helper-text"
            helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)."
            onChange={handleFileChange}
          />
        </div>
      </form>
    </div>
  );
};

export default ProductInfor;
