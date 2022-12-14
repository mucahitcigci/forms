import React, { useState } from "react";

export default function Giris(props) {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name + " " + pass);
    console.log("ww");
  };
  return (
    <div>
      <div id="wrapper">
        <div className="form-container">
          <span className="form-heading">
            <i className="bi-signpost-split"></i> Login{" "}
          </span>
          <form onSubmit={handleSubmit} action="">
            <div className="input-group">
              <i className="bi-person-fill"></i>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Kullanıcı Adı..."
                required
              />
              <span className="bar"></span>
            </div>
            <div className="input-group">
              <i className="bi-file-lock2-fill"></i>
              <input
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                type="password"
                placeholder="Şifre..."
                required
              />
              <span className="bar"></span>
            </div>

            <div className="input-group">
              <button type="submit">
                <i className="bi-send-plus-fill"></i>
              </button>
            </div>
            <div className="switch-login">
              <a onClick={() => props.onFormSwitch("kayit")}>
                Bir hesaba sahip değil misiniz? <span>Kayıt ol</span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
