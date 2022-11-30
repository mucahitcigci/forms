import React from "react";

export default function Giris() {
  return (
    <div>
      <div id="wrapper">
        <div className="form-container">
          <span className="form-heading">
            <i className="bi-signpost-split"></i> Login{" "}
          </span>
          <form action="">
            <div className="input-group">
              <i className="bi-person-fill"></i>
              <input type="text" placeholder="Username..." required />
              <span className="bar"></span>
            </div>
            <div className="input-group">
              <i className="bi-file-lock2-fill"></i>
              <input type="password" placeholder="Password..." required />
              <span className="bar"></span>
            </div>

            <div className="input-group">
              <button>
                <i className="bi-send-plus-fill"></i>
              </button>
            </div>
            <div className="switch-login">
              <a href={"/kayit"}>
                Don't have an account? <span>Sign </span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
