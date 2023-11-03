import React from "react";
import Drawer from "./Drawer";
import Gallery from "./Gallery";
import Navbar from "./Navbar";
import Music from "./Music";
import Chartbar from "./Chartbar";
import Semicircle from "./Semicircle";
import Recentlyuploaded from "./Recentlyuploaded";
function Home() {
  return (
    <>
      <div
        class="card"
        style={{
          backgroundColor: "#e3e5ff",
          borderRadius: "20px",
          border: "none",
        }}
      >
        <div
          class="container-fluid  py-0 "
          style={{
            backgroundColor: "#f7faff",
          }}
        >
          <div class="row">
            <div
              className="col-lg-3 col-md-3 p-2 col-sm-12 "
              style={{ backgroundColor: "white" }}
            >
              <Drawer />
            </div>
            <div className="col-lg-9 col-md-9 col-sm-12 px-4 ">
              <Navbar />
              <div class="row">
                <div class="col-lg-5 col-md-5 col-sm-12">
                  <div class="row">
                    <p style={{ fontSize: "13px" }}>QUICK ACCESS</p>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                      {" "}
                      <Gallery />
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                      {" "}
                      <Music />
                    </div>
                    <div class="row m-0 p-0">
                      <div class="col-12 ">
                        <Semicircle />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-7 col-md-7 col-sm-12 px-4">
                  <Chartbar />
                  <Recentlyuploaded />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
