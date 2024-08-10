import "./intro.css";
import bg from "../../assets/image.png";
import { Link } from "react-scroll";
import contactImg from "../../assets/whatsapp.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Merhaba, </span>
        <span className="introText">
          Ben <span className="introName">Sergen</span>
          <br /> Matematik Öğretmeni
        </span>

        <p className="introPara">
          Yılların kazandırdığı deneyim ile, öğrencilerimin matematikte en
          yüksek
          <br /> başarıyı elde etmelerine rehberlik ediyorum.
        </p>
        <Link>
          <a
            href="https://api.whatsapp.com/send?phone=905533245772&text=Merhaba,%20Web%20sitenizden%20ulaşıyorum;%20"
            target="_blank"
          >
            <button className="btn">
              <img src={contactImg} alt="" className="btnImg" />
              İletişime Geç
            </button>
          </a>
        </Link>
      </div>
      <img src={bg} alt="" className="bg" />
    </section>
  );
};

export default Intro;
