export default function Info() {
  return (
    <div className="info">
      <img
        alt="profil_image"
        src="https://folio-website-images.s3.eu-west-2.amazonaws.com/content/uploads/2017/11/02220310/Mercedes-deBellard-Folio-Illustration-Floral-Fashion-Portrait-Glasses-Woman-El-Corte-Ingles-1500x2000.jpg"
      />
      <div id="info-name">
        <h3>Jane DOE</h3>
        <p>MERN Stack Developer</p>
      </div>
      <div id="info-buttons">
        <button id="mail-btn">&#x2709; Mail</button>
        <button id="linkedin-btn">&#10165; Linkedin</button>
      </div>
    </div>
  );
}
