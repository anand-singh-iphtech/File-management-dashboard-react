import React from "react";
function Navbar() {
  return (
    <nav class="navbar navbar-light bg-light justify-content-between mt-1">
      <a class="navbar-brand ">
        <b>Dashboard</b>
      </a>
      <form class="form-inline">
        <div class="d-flex me-3">
          <div className="input-group">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ borderRadius: "13px", border: "none" }}
            />
          </div>
          <div class="dropdown-center  ">
            <button
              class="btn  dropdown-toggle ms-3"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ borderRadius: "13px", border: "1px solid gray" }}
            >
              <span class="material-symbols-outlined me-1">desktop_mac</span>
              Desktop
            </button>
          </div>
        </div>
      </form>
    </nav>
  );
}

export default Navbar;
