import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">Uzmanlık Alanım</span>
      <span className="skillDesc">
        Matematik eğitimiyle ilgili sunduğum hizmetler, problem çözme
        yeteneklerini geliştirmek, kavramları derinlemesine anlamak ve sınav
        stratejilerini optimize etmek üzerine odaklanır. Öğrencilerin
        matematiksel becerilerini en üst düzeye çıkarmak için kapsamlı destek
        sağlarım.
      </span>

      <div className="skillBars">
        <div className="skillBar">
          <img
            src={UIDesign}
            alt="Problem Çözme Yetenekleri"
            className="skillBarImg"
          />
          <div className="skillBarText">
            <h2>Problem Çözme Yetenekleri</h2>
            <p>
              Öğrencilerin karmaşık matematik problemlerini sistematik bir
              yaklaşımla çözmelerine yardımcı olurum.
            </p>
          </div>
        </div>

        <div className="skillBar">
          <img
            src={WebDesign}
            alt="Kavram Derinleştirme ve Analiz"
            className="skillBarImg"
          />
          <div className="skillBarText">
            <h2>Kavram Derinleştirme ve Analiz</h2>
            <p>
              Matematiksel kavramları derinlemesine analiz ederek, öğrencilerin
              konuları kavramalarını ve uygulama becerilerini geliştiririm.
            </p>
          </div>
        </div>

        <div className="skillBar">
          <img
            src={AppDesign}
            alt="Sınav Stratejileri ve Optimizasyon"
            className="skillBarImg"
          />
          <div className="skillBarText">
            <h2>Sınav Stratejileri ve Optimizasyon</h2>
            <p>
              Sınavlarda maksimum verimlilik için etkili çözüm stratejileri ve
              zaman yönetimi teknikleri sunarım.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
