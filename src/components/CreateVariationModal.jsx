import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";

const CreateVariationModal = () => {
  const [openModal, setOpenModal] = useState(false);
  const [variationType, setVariationType] = useState("");
  const [variationValue, setVariationValue] = useState("");
  const [selectedColor, setSelectedColor] = useState("#000000"); // Default color

  const handleCreateVariation = () => {
    // Perform logic for creating variation based on variationType and variationValue
    console.log(
      `Creating ${variationType} variation with value: ${variationValue}`
    );
    setOpenModal(false);
  };

  const handleColorChange = (e) => {
    setVariationValue(e.target.value);
    setSelectedColor(e.target.value);
  };

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Create Variation</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Variation</Modal.Header>
        <Modal.Body>
          <div className="mb-4">
            <label htmlFor="variationType" className="block font-bold mb-2">
              Select Variation Type:
            </label>
            <select
              id="variationType"
              name="variationType"
              className="w-full p-2 border border-gray-300 rounded-md"
              onChange={(e) => setVariationType(e.target.value)}
            >
              <option value="">Select Type</option>
              <option value="color">Color</option>
              <option value="size">Size</option>
              {/* Add more options as needed */}
            </select>
          </div>
          {variationType === "color" && (
            <div className="mb-4">
              <label htmlFor="color" className="block font-bold mb-2">
                Color:
              </label>
              <input
                type="color"
                id="color"
                name="color"
                className="w-full p-2 border border-gray-300 rounded-md"
                onChange={handleColorChange}
              />
              <div className="mt-3">
                <span className="font-bold ">Selected Color:</span>{" "}
                <span
                  className="mt-2 inline-block"
                  style={{
                    backgroundColor: selectedColor,
                    display: "inline-block",
                    width: "20px",
                    height: "20px",
                    marginLeft: "5px",
                  }}
                ></span>
              </div>
            </div>
          )}
          {variationType === "size" && (
            <div className="mb-4">
              <label htmlFor="size" className="block font-bold mb-2">
                Size:
              </label>
              <input
                type="text"
                id="size"
                name="size"
                className="w-full p-2 border border-gray-300 rounded-md"
                onChange={(e) => setVariationValue(e.target.value)}
              />
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCreateVariation}>Create Variation</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateVariationModal;
