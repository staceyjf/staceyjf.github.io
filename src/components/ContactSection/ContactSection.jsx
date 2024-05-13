import { useContext } from "react";

import { NavigationContext } from "../../context/NavigationContextProvider.jsx";
import { contactData } from "../../data/contactData.js";

import styles from "./ContactSection.module.scss";

function ContactSection() {
  const { contactRef } = useContext(NavigationContext);

  return (
    <section ref={contactRef} className={styles.contact}>
      <div className={styles.contact_container}>
        <div className={styles.contact_body}>
          {/* Left side */}
          <div className={styles.contact_left}>
            <h2 className={styles.contact_title}>Let's stay in touch.</h2>
            <h2 className={styles.contact_title}>
              Drop me a line or see what I'm currently up to.
            </h2>
          </div>
          {/* Right side - loop through contact details */}
          <div className={styles.contact_details}>
            {contactData.map((contact) => {
              return (
                <a
                  href={contact.url}
                  className={styles.contact_personal_details}
                  key={contact.id}
                >
                  <div className={styles.contact_icon}>
                    <i className={contact.icon}></i>
                  </div>
                  <p>{contact.displayName}</p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
