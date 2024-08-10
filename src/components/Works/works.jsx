import "./works.css";
import Portfolio1 from "../../assets/portfolio-1.png";
import Portfolio2 from "../../assets/portfolio-2.png";
import Portfolio3 from "../../assets/portfolio-3.png";
import Portfolio4 from "../../assets/portfolio-4.png";
import Portfolio5 from "../../assets/portfolio-5.png";
import Portfolio6 from "../../assets/portfolio-6.png";
import Walmart from "../../assets/walmart.png";
import Microsoft from "../../assets/microsoft.png";
import Adobe from "../../assets/adobe.png";
import Facebook from "../../assets/facebook.png";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">Eğitimlerim</h2>
      <span className="worksDesc">
        Matematik eğitimi konusundaki geniş tecrübemle, öğrencilerin bireysel
        ihtiyaçlarına uygun çeşitli hizmetler sunuyorum. Birebir derslerden grup
        derslerine, sınav hazırlık programlarından online derslere kadar, her
        öğrencinin matematikte başarılı olmasını sağlamak için kapsamlı destek
        sağlıyorum.
      </span>
      <div className="worksImgs">
        <img src={Portfolio1} alt="" className="worksImg" />
        <img src={Portfolio2} alt="" className="worksImg" />
        <img src={Portfolio3} alt="" className="worksImg" />
        <img src={Portfolio4} alt="" className="worksImg" />
        <img src={Portfolio5} alt="" className="worksImg" />
        <img src={Portfolio6} alt="" className="worksImg" />
      </div>

      <div id="clients">
        <h1 className="contactPageTitle">Tecrübe</h1>

        <div className="expCont">
          <div className="expContLeft">
            <p>
              Uzman Matematik Öğretmeni <b>Sergen Dinçer</b> "Matematikte Doğru
              Rehber, Kesin Başarı!" anlayışıyla verdiği matematik özel dersleri
              ile onlarca öğrencinin hayatına dokunmuş ve onların başarılarına
              imza atmış bulunmaktadır.
            </p>

            <div id="tecrube-veriler">
              <div class="tecrube-bar">
                <label for="ogrenci-basari">Öğrenci Başarı Oranı</label>
                <div id="ogrenci-basari" class="progress-bar">
                  <div class="progress1">95%</div>
                </div>
              </div>
              <div class="tecrube-bar">
                <span for="olumlu-geri-donusler">Olumlu Geri Dönüşler</span>
                <div id="olumlu-geri-donusler" class="progress-bar">
                  <div class="progress2">100%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="expContRight">
            <div className="card1">
              <img src={Adobe} alt="" />

              <div className="expContRightDetail">
                <p>Öğrenci (Kişi) </p>
                <span>+187</span>
              </div>
            </div>
            <div className="card2">
              <img src={Facebook} alt="" />

              <div className="expContRightDetail">
                <p>Yüz Yüze Ders (Saat) </p>
                <span>+7900</span>
              </div>
            </div>
            <div className="card3">
              <img src={Microsoft} alt="" />

              <div className="expContRightDetail">
                <p>Online Ders (Saat) </p>
                <span>+950</span>
              </div>
            </div>
            <div className="card4">
              <img src={Walmart} alt="" />

              <div className="expContRightDetail">
                <p>Tecrübe (Yıl) </p>
                <span>+9</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
