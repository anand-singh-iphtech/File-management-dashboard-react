import React from "react";
import { Chart } from "react-google-charts";
export const data = [
  ["Task", "Hours per Day"],
  ["Photos", 11],
  ["Videos", 2],
  ["Music", 2],
  ["Documents ", 2],
  ["Others", 7],
];
export const options = {
  pieHole: 0.5,
  is3D: false,
  legend: "none",
  backgroundColor: "none",
};
function Semicircle() {
  return (
    <div class="justify-content-center align-items-center ">
      <nav class="navbar navbar-light bg-light justify-content-between mt-3 ">
        <b style={{ marginBottom: "2px" }}>STORAGE INFORMATION</b>
        <button
          style={{
            border: "1px solid #e9ecf1 ",
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        >
          <span class="material-symbols-outlined mt-1">more_vert</span>
        </button>
      </nav>
      <div class="row align-items-start">
        <div class="col ">
          <p style={{ fontSize: "14px", margin: "0px" }}>Total Space </p>
          <b>256 GB</b>
        </div>

        <div class="col">
          <p style={{ fontSize: "14px", margin: "0px" }}>Total Space </p>
          <b>52.9 GB</b>
        </div>
        <div class="col-auto">
          <h6 style={{ fontSize: "14px", margin: "0px" }}>Total Space </h6>
          <b>203.1 GB</b>
        </div>
      </div>{" "}
      <div className="row">
        <div className="col-6">
          {" "}
          <Chart
            chartType="PieChart"
            width="100%"
            height="300px"
            data={data}
            options={options}
          />
        </div>
        <div className="col-6">
          {" "}
          <Chart
            chartType="PieChart"
            width="100%"
            height="300px"
            data={data}
            options={options}
          />
        </div>
      </div>
    </div>
  );
}

export default Semicircle;
