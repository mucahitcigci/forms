import React from "react";

export default function Kayit() {
  return (
    <div id="wrapper">
      <div className="form-container">
        <span className="form-heading">
          <i className="bi-signpost-split"></i> Kayıt Ol
        </span>

        <form action="">
          <div className="input-group">
            <i className="bi-person-fill"></i>
            <input type="text" placeholder="Kullanıcı Adı..." required />
            <span className="bar"></span>
          </div>
          <div className="input-group">
            <i className="bi-envelope-fill"></i>
            <input type="email" placeholder="E-posta.." required />
            <span className="bar"></span>
          </div>
          <div className="input-group">
            <i className="bi-file-lock2-fill"></i>
            <input type="password" placeholder="Şifre..." required />
            <span className="bar"></span>
          </div>
          <div className="input-group">
            <i className="bi-file-lock2-fill"></i>
            <input type="password" placeholder="Şifre Tekrar..." required />
            <span className="bar"></span>
          </div>
          <div className="input-group">
            <button>
              <i className="bi-send-plus-fill"></i>
            </button>
          </div>
          <div className="switch-login">
            <a href={"/"}>
              Zaten bir hesaba sahip misiniz? <span>Giriş Yap</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
