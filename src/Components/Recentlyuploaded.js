import React from "react";
import List from "./List";
import Video from "./Video";
function Recentlyuploaded() {
  return (
    <div class="row">
      <nav class=" col-12 navbar navbar-light bg-light justify-content-between">
        <p style={{ fontWeight: "600", fontSize: "15px", color: "#706b7f" }}>
          RECENTLY UPLOADED
        </p>

        <button
          style={{
            border: "1px solid #e9ecf1",
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        >
          <span class="material-symbols-outlined mt-1">more_vert</span>
        </button>
      </nav>
      <div class="col-lg-5 col-md-12 col-sm-12">
        <List />
      </div>
      <div class="col-lg-7 col-md-12 col-sm-12">
        <Video />
      </div>
    </div>
  );
}

export default Recentlyuploaded;
