import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import logo1 from "./local/boy.png";
import "./css/drawer.css";
function Drawer() {
  return (
    <>
      <div class="d-flex pt-2 ps-3" style={{ alignItems: "center" }}>
        <Stack direction="row" spacing={2} style={{ marginRight: "12px" }}>
          <Avatar
            sx={{
              width: 24,
              height: 24,
              fontSize: "14px",
              backgroundColor: "#a504e2",
              padding: "15px",
              boxShadow: "0px 0px 10px 3px rgba(147, 99, 234, 0.75)",
            }}
          >
            M
          </Avatar>
        </Stack>
        <b style={{ color: "#ff7ead", margin: "0px" }}>Murad</b>
      </div>
      <div class="row px-3">
        <div class="col-6 mt-3">
          <div
            class="card5 p-3 mb-2 text-center  rounded "
            style={{
              border: "1px solid #ededeb",
            }}
          >
            <div
              class="card p-0 rounded-3"
              style={{
                background: "none",
              }}
            >
              {" "}
              <div class="card-body text-center d-flex align-items-center justify-content-center">
                <span class="material-symbols-outlined">home_app_logo</span>
              </div>
            </div>
            Home
          </div>

          <div
            class="card5  p-3 my-3 text-center  rounded"
            style={{ border: "1px solid #ededeb" }}
          >
            <div class="card p-0 " style={{ background: "none" }}>
              {" "}
              <div class="card-body text-center d-flex align-items-center justify-content-center">
                <span class="material-symbols-outlined">kid_star</span>
              </div>
            </div>
            Favorite
          </div>

          <div
            class="card5 p-3 my-3 text-center  rounded "
            style={{ border: "1px solid #ededeb" }}
          >
            <div class="card p-0 " style={{ background: "none" }}>
              {" "}
              <div class="card-body text-center d-flex align-items-center justify-content-center">
                <span class="material-symbols-outlined">help</span>
              </div>
            </div>
            Help
          </div>

          <div
            class="card5 p-3 my-3 text-center   rounded "
            style={{ border: "1px solid #ededeb" }}
          >
            <div class="card p-0 " style={{ background: "none" }}>
              {" "}
              <div class="card-body text-center d-flex align-items-center justify-content-center">
                <span class="material-symbols-outlined">history</span>
              </div>
            </div>
            History
          </div>
        </div>
        <div class="col-6 mt-3">
          {" "}
          <div
            class="card5 p-3 mb-3 text-center   rounded "
            style={{ border: "1px solid #ededeb" }}
          >
            <div class="card p-0 " style={{ background: "none" }}>
              {" "}
              <div class="card-body text-center d-flex align-items-center justify-content-center">
                <span class="material-symbols-outlined">description</span>
              </div>
            </div>
            All File
          </div>
          <div
            class="card5 p-3 my-3 text-center  rounded "
            style={{ border: "1px solid #ededeb" }}
          >
            <div class="card p-0 " style={{ background: "none" }}>
              {" "}
              <div class="card-body text-center d-flex align-items-center justify-content-center">
                <span class="material-symbols-outlined">upload_file</span>
              </div>
            </div>
            Shared
          </div>
          <div
            class="card5 p-3 my-3 text-center  rounded "
            style={{ border: "1px solid #ededeb" }}
          >
            <div class="card p-0 " style={{ background: "none" }}>
              {" "}
              <div class="card-body text-center d-flex align-items-center justify-content-center">
                <span class="material-symbols-outlined">settings</span>
              </div>
            </div>
            Settings
          </div>
          <div
            class="card5 p-3 my-2 text-center  rounded "
            style={{ border: "1px solid #ededeb" }}
          >
            <div class="card p-0 " style={{ background: "none" }}>
              {" "}
              <div class="card-body text-center d-flex align-items-center justify-content-center">
                <span class="material-symbols-outlined m-0">delete</span>
              </div>
            </div>
            Trash
          </div>
        </div>
      </div>
      <div class="row px-3">
        <div class="col-12 ">
          <div
            class="card mt-1 "
            style={{ backgroundColor: "#eef3fb", border: "2px dashed gray" }}
          >
            {" "}
            <div class="card-body text-center d-flex-column align-items-center justify-content-center ">
              <span class="drop material-symbols-outlined">
                expand_circle_up
              </span>
              <h6>drag and drop</h6>
              <h6>or</h6>
              <u className="drop" style={{ color: "#864cff" }}>
                Browse Files
              </u>
            </div>
          </div>
        </div>
        <div class="col-12  ">
          <div
            className="col-12 mt-5 pt-5 "
            style={{
              position: "relative",
              backgroundColor: "#8455ff",
              border: "none",
              borderRadius: "20px",
              boxShadow: "0px 0px 10px 3px rgba(147, 99, 234, 0.75)",
              color: "white",
            }}
          >
            <h6 class="text-center"> Murad hossain</h6>

            <h6 class="text-center pb-3">UI/UX Designer</h6>

            <Avatar
              src={logo1}
              sx={{
                width: 80,
                height: 80,
                backgroundColor: "#a17dff",
                position: "absolute",
                top: "0%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                borderRadius: "50%",
                border: "1px solid white",
                padding: "10px",
              }}
            ></Avatar>
          </div>
        </div>
      </div>
    </>
  );
}

export default Drawer;
