import React from "react";
import Button from "@mui/material/Button";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
function Video() {
  return (
    <>
      <div
        style={{
          borderRadius: "20px ",
          backgroundColor: "white",
        }}
      >
        <nav class="navbar navbar-light  justify-content-between px-3 ">
          <a class="navbar-brand">
            <b style={{ fontSize: "15px" }}>Preview</b>
          </a>
          <button
            style={{
              border: "none",
              backgroundColor: "#926aff",
              borderRadius: "10px",
              color: "white",
              paddingTop: "6px",
            }}
          >
            <span
              class="material-symbols-outlined "
              style={{ fontSize: "20px" }}
            >
              pan_zoom
            </span>
          </button>
        </nav>
        <div
          className="card"
          style={{
            position: "relative",
            border: "none",
            background: "none",
          }}
        >
          <img
            src="https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM="
            alt="Card Image"
            style={{
              opacity: 0.7,
              height: "15rem",
              borderRadius: "20px",
              // margin: "10px",
            }}
          />
          <Button
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#e76f90",
              borderRadius: "100px",
            }}
          >
            <PlayCircleOutlineIcon style={{ fontSize: 50, color: "white" }} />
          </Button>
        </div>
      </div>
    </>
  );
}
export default Video;
