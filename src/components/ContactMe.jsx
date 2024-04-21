import ContactForm from "./ContactForm";
import ContactInfoCard from "./ContactInfoCard";
import "./ContactMe.css";

export default function ContactMe() {
  const hRef = {
    href: "https://mail.google.com/mail/u/0/#inbox?compose=new",
    target: "_blank",
  };

  const newHref = {
    href: "https://github.com/Benjammag",
    target: "_blank",
  };
  return (
    <section id="contact" className="contact-container">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <a {...hRef} className="mail">
            <ContactInfoCard
              iconUrl="./assets/images/email.png"
              text="agbetuyibenjamin4@gmail.com"
            />
          </a>
          <a {...newHref} className="git">
            <ContactInfoCard
              iconUrl="./assets/images/github.svg"
              text="https://github.com/Benjammag"
            />
          </a>
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
