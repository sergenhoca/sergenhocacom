import "./contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import InstagramIcon from "../../assets/instagram.png";
import TwitterIcon from "../../assets/twitter.png";
import YoutubeIcon from "../../assets/youtube.png";
import TiktokIcon from "../../assets/tiktok.png";
import kadin1 from "../../assets/kadın1.webp";
import kadin2 from "../../assets/kadın2.webp";
import kadin4 from "../../assets/kadin4.webp";
import kadin5 from "../../assets/kadin5.webp";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_cne6iv5", "template_o6t5n2e", form.current, {
        publicKey: "EJbqAK3AZkLAksZUu",
      })
      .then(
        () => {
          console.log("yes");
          e.target.reset();
          toast.success("Mesajınız başarıyla gönderildi!");
        },
        (error) => {
          toast.error("Bir sorun oluştu", error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      {/* yorumlar */}
      <div id="clients">
        <h1 className="contactPageTitle">Yorumlar</h1>
      </div>
      {/* deneme */}
      <div id="yorumlar-container">
        <div id="card-1" className="yorum-card">
          <img src={kadin1} alt="User Avatar" />
          <h3>Öykü A***</h3>
          <p>★★★★★</p>
          <p className="card-desc">
            "Matematikteki ilgi eksikliğimi <b>Sergen Dinçer</b>'in matematik
            özel dersleriyle aştım. Onun öğretme tutkusu beni etkiledi, artık
            matematiği seviyorum!"
          </p>
        </div>
        <div id="card-2" className="yorum-card">
          <img src={kadin2} alt="User Avatar" />
          <h3>Koray C***</h3>
          <p>★★★★★</p>
          <p className="card-desc">
            <b>"Sergen Hoca</b>, matematikte özgüveni artırıyor. Çocuğum,
            sorunları çözme konusunda daha rahat ve istekli hale geldi."
          </p>
        </div>
        <div id="card-3" className="yorum-card">
          <img src={kadin5} alt="User Avatar" />
          <h3>Aylin S***</h3>
          <p>★★★★★</p>
          <p className="card-desc">
            "Matematikteki ilerlemeyi özel dersler ile yakından takip eden
            <b> Sergen Hoca</b>, çocuğumun potansiyelini açığa çıkarmasına
            yardımcı oldu."
          </p>
        </div>
        <div id="card-4" className="yorum-card">
          <img src={kadin4} alt="User Avatar" />
          <h3>Levent K***</h3>
          <p>★★★★★</p>
          <p className="card-desc">
            "Kızımın matematikteki gelişimini <b>Sergen Dinçer</b>'e borçluyuz.
            Sabırlı, ilgili ve öğrenciyi önemseyen yaklaşımını gerçekten takdir
            ediyoruz."
          </p>
        </div>
      </div>
      {/* deneme end */}
      {/* contact */}
      <div id="contact">
        <h1 className="contactPageTitle">Bana Ulaş</h1>
        <span className="contactDesc">
          Matematik eğitimi ve sunduğum hizmetler hakkında ayrıntılı bilgi
          almak, soru veya görüşlerinizi iletmek için lütfen benimle iletişime
          geçiniz.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="İsim Soyisim"
            name="your_name"
            required
          />
          <input
            type="email"
            className="email"
            placeholder="Mail Adresi"
            name="your_email"
            required
          />
          <input
            type="number"
            className="phone"
            placeholder="Telefon Numarası "
            name="your_phone"
            required
          />
          <textarea
            name="message"
            rows="5"
            className="msg"
            placeholder="Mesajınız"
            required
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Gönder
          </button>
          <div className="links">
            <a href="https://www.instagram.com//" target="_blank">
              <img src={InstagramIcon} alt="Instagram" className="link" />
            </a>
            <a href="https://www.youtube.com/@SergenHoca" target="_blank">
              <img src={YoutubeIcon} alt="Youtube" className="link" />
            </a>
            <a
              href="https://www.tiktok.com/@sergenhocamatematik"
              target="_blank"
            >
              <img src={TiktokIcon} alt="Tiktok" className="link" />
            </a>
            <a href="https://x.com/HocaSergen36455" target="_blank">
              <img src={TwitterIcon} alt="Twitter" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
