import React from "react";
function Music() {
  return (
    <>
      <div
        class="card1 p-2 pt-0 mb-4 "
        style={{
          borderRadius: "20px",
          backgroundColor: "#ffc355",
          color: "white",
          boxShadow: "0px 8px 10px -5px #ffc355",
        }}
      >
        <div
          class="card d-flex justify-content-center align-items-center p-4 mb-4 mt-0 "
          style={{
            margin: "0 30%",
            borderRadius: "20px",
            border: "1px solid #e0dcdc",
            backgroundColor: "#ffcd73",
            boxShadow: "0 0px 10px rgba(255, 255, 255, 0.5)",
          }}
        >
          <span class="material-symbols-outlined">library_music</span>
        </div>
        <h6 class="ps-2">Music</h6>
        <div class="d-flex justify-content-between px-2">
          <p>200 Files</p>
          <p>650 MB</p>
        </div>
      </div>
      <div
        class="card1 p-2 pt-0 mb-4 "
        style={{
          borderRadius: "20px",
          boxShadow: "0px 8px 10px -5px #8255ff",
          backgroundColor: "#8255ff",
          color: "white",
        }}
      >
        <div
          class="card d-flex justify-content-center align-items-center p-4 mb-4 mt-0 "
          style={{
            margin: "0 30%",
            borderRadius: "20px",
            border: "1px solid #e0dcdc",
            backgroundColor: "#926aff",
            boxShadow: "0 0px 10px rgba(255, 255, 255, 0.5)",
          }}
        >
          <span class="material-symbols-outlined">description</span>
        </div>
        <h6 class="ps-2">Documents</h6>
        <div class="d-flex justify-content-between px-2">
          <p>200 Files</p>
          <p>20 MB</p>
        </div>
      </div>
    </>
  );
}

export default Music;
