import React from "react";
function Gallery() {
  return (
    <>
      <div
        class="card1 p-2 pt-0 mb-4   "
        style={{
          borderRadius: "20px",
          backgroundColor: "#508aff",
          color: "white",
          boxShadow: "0px 8px 10px -5px #508aff",
        }}
      >
        <div
          class="card1 d-flex justify-content-center align-items-center  p-4 mb-4 mt-0 "
          style={{
            margin: "0 30%",
            borderRadius: "20px",
            border: "1px solid #e0dcdc",
            backgroundColor: "#6296ff",
            boxShadow: "0 0px 10px rgba(255, 255, 255, 0.5)",
          }}
        >
          <span class="material-symbols-outlined  ">imagesmode</span>
        </div>
        <h6 class="ps-2">Photos</h6>
        <div class="d-flex justify-content-between px-2">
          <p>20,100 Files</p>
          <p>6.5 GB</p>
        </div>
      </div>
      <div
        class="card1 p-2 pt-0 mb-4 "
        style={{
          borderRadius: "20px",
          backgroundColor: "#ff7ead",
          color: "white",
          boxShadow: "0px 8px 10px -5px #ff7ead",
        }}
      >
        <div
          class="card d-flex justify-content-center align-items-center p-4 mb-4 mt-0 "
          style={{
            margin: "0 30%",
            borderRadius: "20px",
            border: "1px solid #e0dcdc",
            backgroundColor: "#ff8db6",
            boxShadow: "0 0px 10px rgba(255, 255, 255, 0.5)",
          }}
        >
          <span class="material-symbols-outlined">play_circle</span>
        </div>
        <h6 class="ps-2">Videos</h6>
        <div class="d-flex justify-content-between px-2">
          <p>150 Files</p>
          <p>750 MB</p>
        </div>
      </div>
    </>
  );
}
export default Gallery;
