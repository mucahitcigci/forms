import React, { useState } from "react";

export default function Kayit(props) {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [mail, setMail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name + "" + pass + "" + mail);
  };
  return (
    <div id="wrapper">
      <div className="form-container">
        <span className="form-heading">
          <i className="bi-signpost-split"></i> Kayıt Ol
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
            <i className="bi-envelope-fill"></i>
            <input
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              type="email"
              placeholder="E-posta.."
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
            <button>
              <i className="bi-send-plus-fill"></i>
            </button>
          </div>
          <div className="switch-login">
            <a onClick={() => props.onFormSwitch("giris")}>
              Zaten bir hesaba sahip misiniz? <span>Giriş Yap</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
