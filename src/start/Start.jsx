import "./Start.css";
import pabloImg from "../assets/pablo.png";
function Start() {
  return (
    <>
      <div class="perfil">
        <div class="info">
          <h1>PABLO PIANELO ALONSO</h1>
          <h2>Full Stack Developer</h2>
        </div>

        <div class="avatar">
          <img src={pabloImg} className="avatarImg"   alt="Foto de Pablo" />
        </div>
      </div>
    </>
  );
}

export default Start;
