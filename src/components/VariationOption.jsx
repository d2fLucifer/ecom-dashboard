// VariationOption.js
import React from "react";
import { Button } from "flowbite-react";
import DeleteIcon from "@mui/icons-material/Delete";

const VariationOption = ({
  index,
  option,
  handleOptionChange,
  handleDeleteOption,
}) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="px-6 py-4">
        <div className="flex flex-col w-1/2 gap-2">
          <select
            value={option.key}
            onChange={(e) => handleOptionChange(index, "key", e.target.value)}
            className="rounded-sm h-10 border-inherit"
          >
            <option value="size">Size</option>
            <option value="color">Color</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex flex-col w-1/2 gap-2">
          <select
            value={option.value}
            onChange={(e) => handleOptionChange(index, "value", e.target.value)}
            className="rounded-sm h-10 border-inherit"
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
      </td>
      <td className="px-6 py-4">
        <Button onClick={() => handleDeleteOption(index)} color="red">
          <DeleteIcon />
        </Button>
      </td>
    </tr>
  );
};

export default VariationOption;
