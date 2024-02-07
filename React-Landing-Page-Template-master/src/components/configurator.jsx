import React, { useState } from "react";
import "../styles/configurator.css"

export const Configurator = (props) => {
  const [selectedSegment, setSelectedSegment] = useState("");
  const [selectedManufacturer, setSelectedManufacturer] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedComponent, setSelectedComponent] = useState("");
  const [selectedAlternateComponent, setSelectedAlternateComponent] = useState("");
  
  const handleSegmentChange = (event) => {
    setSelectedSegment(event.target.value);
    setSelectedManufacturer(""); // Reset subsequent dropdowns
    setSelectedModel("");
    setSelectedComponent("");
    setSelectedAlternateComponent("");
  };

  const handleManufacturerChange = (event) => {
    setSelectedManufacturer(event.target.value);
    setSelectedModel("");
    setSelectedComponent("");
    setSelectedAlternateComponent("");
  };

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
    setSelectedComponent("");
    setSelectedAlternateComponent("");
  };

  const handleComponentChange = (event) => {
    setSelectedComponent(event.target.value);
    setSelectedAlternateComponent("");
  };

  const handleAlternateComponentChange = (event) => {
    setSelectedAlternateComponent(event.target.value);
  };

  return (
    <div id="configurator" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Configure here</h2>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-3">
            <h3>Segment</h3>
            <select
              className="custom-select"
              value={selectedSegment}
              onChange={handleSegmentChange}
            >
              <option value="">Select Segment</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
            </select>
          </div>
          <div className={`col-xs-12 col-md-3 ${selectedSegment ? "" : "disabled"}`}>
            <h3>Manufacturer</h3>
            <select
              className="custom-select"
              value={selectedManufacturer}
              onChange={handleManufacturerChange}
              disabled={!selectedSegment}
            >
              <option value="">Select Manufacturer</option>
              <option value="">Select Segment</option>
              <option value="Toyata">Toyata</option>
              <option value="Tata">Tata</option>
              <option value="Maruti">Maruti</option>
            </select>
          </div>
          <div className={`col-xs-12 col-md-3 ${selectedManufacturer ? "" : "disabled"}`}>
            <h3>Model</h3>
            <select
              className="custom-select"
              value={selectedModel}
              onChange={handleModelChange}
              disabled={!selectedManufacturer}
            >
              <option value="">Select Model</option>
              {/* Add options based on selected manufacturer */}
            </select>
          </div>
          <div className={`col-xs-12 col-md-3 ${selectedModel ? "" : "disabled"}`}>
            <h3>Components</h3>
            <select
              className="custom-select"
              value={selectedComponent}
              onChange={handleComponentChange}
              disabled={!selectedModel}
            >
              <option value="">Select Component</option>
              {/* Add options based on selected model */}
            </select>
          </div>
          <div className={`col-xs-12 col-md-3 ${selectedComponent ? "" : "disabled"}`}>
            <h3>Alternate Components</h3>
            <select
              className="custom-select"
              value={selectedAlternateComponent}
              onChange={handleAlternateComponentChange}
              disabled={!selectedComponent}
            >
              <option value="">Select Alternate Component</option>
              {/* Add options based on selected component */}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
