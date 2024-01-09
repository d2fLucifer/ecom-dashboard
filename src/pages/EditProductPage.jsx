import React, { useState } from "react";
import ProductInfor from "../components/ProductInfor";
import { Button } from "flowbite-react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import { Table } from "flowbite-react";
import VariationOption from "../components/VariationOption";

export default function EditProductPage() {
  const [images, setImages] = useState([]);
  const [variationOptions, setVariationOptions] = useState([
    { key: "", value: "" }, // Initial row
  ]);

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    setImages((prevImages) => [...prevImages, ...Array.from(selectedFiles)]);
  };

  const handleAddOption = () => {
    setVariationOptions((prevOptions) => [
      ...prevOptions,
      { key: "", value: "" },
    ]);
  };

  const handleOptionChange = (index, field, value) => {
    setVariationOptions((prevOptions) => {
      const newOptions = [...prevOptions];
      newOptions[index][field] = value;
      return newOptions;
    });
  };

  const handleDeleteOption = (index) => {
    setVariationOptions((prevOptions) =>
      prevOptions.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2">
        <div className="p-4 border">
          <ProductInfor handleFileChange={handleFileChange} />
        </div>
        <div className="p-4 border mt-4 ">
          <div className="py-3 mb-12 font-serif overscroll-auto text-2xl">
            Variation Option
          </div>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Key
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Value
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {variationOptions.map((option, index) => (
                  <VariationOption
                    key={index}
                    index={index}
                    option={option}
                    handleOptionChange={handleOptionChange}
                    handleDeleteOption={handleDeleteOption}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <Button
            className="flex mt-6 "
            size="sm"
            color="purple"
            onClick={handleAddOption}
          >
            <AddCircleIcon />
            <span className="ml-2">Add option</span>
          </Button>
        </div>
      </div>

      <div className="p-4 border ">
        <div className="py-3 mb-12 font-serif overscroll-auto text-2xl">
          Image Preview
        </div>
        <div className="flex flex-wrap gap-2 ">
          {images.map((file, index) => (
            <img
              key={index}
              className="h-auto max-w-lg mx-auto object-contain"
              width={180}
              src={URL.createObjectURL(file)}
              alt={`image-${index}`}
            />
          ))}
        </div>
      </div>
      <div className="mt-10 flex  gap-6">
        <Button size="lg">Create</Button>
        <Button size="lg" color="light">
          Cancel
        </Button>
      </div>
    </div>
  );
}
