import { useContext } from "react";

import { NavigationContext } from "../../context/NavigationContextProvider.jsx";
import { personalData } from "../../data/data.js";

import { contactData } from "../../data/contactData.js";

import { HiOutlineMailOpen } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

import styles from "./ContactSection.module.scss";

function ContactSection() {
  const { contactRef } = useContext(NavigationContext);

  return (
    <section ref={contactRef} className={styles.contact}>
      <div className={styles.contact_container}>
        <div className={styles.contact_body}>
          {/* Left side */}
          <div className={styles.contact_left}>
            <h2 className={styles.contact_title}>Let's Stay in Touch</h2>
            <h2 className={styles.contact_title}>
              Drop me a line or see what I'm currently up to.
            </h2>
          </div>
          {/* Right side */}
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
            {/* <a
              href={`mailto:${personalData.email}`}
              className={styles.contact_personal_details}
            >
              <div className={styles.contact_icon}>
                <HiOutlineMailOpen />
              </div>
              <p>{personalData.email}</p>
            </a>
            <a
              href={`mailto:${personalData.linkedIn}`}
              className={styles.contact_personal_details}
            >
              <div className={styles.contact_icon}>
                <FaLinkedin />
              </div>
              <p>{personalData.linkedIn}</p>
            </a>
            <a
              href={`mailto:${personalData.gitHub}`}
              className={styles.contact_personal_details}
            >
              <div className={styles.contact_icon}>
                <FaGithubSquare />
              </div>
              <p>{personalData.gitHub}</p>
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
