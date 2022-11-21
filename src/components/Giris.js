import React from "react";

export default function Giris() {
  return (
    <div>
      <div id="wrapper">
        <div className="form-container">
          <span className="form-heading">
            <i className="bi-signpost-split"></i> Giriş Yap{" "}
          </span>
          <form action="">
            <div className="input-group">
              <i className="bi-person-fill"></i>
              <input type="text" placeholder="Kullanıcı Adı..." required />
              <span className="bar"></span>
            </div>
            <div className="input-group">
              <i className="bi-file-lock2-fill"></i>
              <input type="password" placeholder="Şifre..." required />
              <span className="bar"></span>
            </div>

            <div className="input-group">
              <button>
                <i className="bi-send-plus-fill"></i>
              </button>
            </div>
            <div className="switch-login">
              <a href={"/kayit"}>
                Bir hesaba sahip değil misiniz? <span>Kayıt ol</span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
