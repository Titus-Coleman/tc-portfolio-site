import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';
import Modal from '../components/Modal';
import Image from 'next/image';

const defaultState = {
  firstname: '',
  lastname: '',
  title: '',
  company: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

function ContactMe() {
  const [modelOpen, setModelOpen] = useState(false);
  const [values, setValues] = useState({ ...defaultState });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        // setModelOpen(true);
        setValues({ ...defaultState });
      } else {
        console.error(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <hr id="contact" className={styles.hr} />
      <section>
        <h3 className={styles.contactTitle}>Contact</h3>
        <div className={styles.contactBox}>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.inputDiv}>
              <input
                className={styles.inputForm}
                name="firstname"
                value={values.firstname}
                onChange={handleChange}
                id="firstname"
                required
              />
              <label className={styles.inputLabel}>First Name</label>
            </div>
            <div className={styles.inputDiv}>
              <input
                className={styles.inputForm}
                name="lastname"
                value={values.lastname}
                onChange={handleChange}
                id="lastname"
                required
              />
              <label className={styles.inputLabel}>Last Name</label>
            </div>
            <div className={styles.inputDiv}>
              <input
                className={styles.inputForm}
                name="email"
                type={'email'}
                value={values.email}
                onChange={handleChange}
                id="email"
                required
              />
              <label className={styles.inputLabel}>Email Address</label>
            </div>
            <div className={styles.inputDiv}>
              <input
                className={styles.inputForm}
                name="subject"
                value={values.subject}
                onChange={handleChange}
                id="subject"
                required
              />
              <label className={styles.inputLabel}>Subject</label>
            </div>
            <div className={styles.inputDiv}>
              <label className={styles.inputMsg}>Message</label>
              <textarea
                className={styles.msgForm}
                placeholder="Hey Titus! We would love to bring you on!"
                name="message"
                value={values.message}
                onChange={handleChange}
                id="message"
                required
                autoCorrect="on"
              />
            </div>
            <button
              className={styles.formBtn}
              type="submit"
              id="submit"
              value={'submit'}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>

          {modelOpen && (
            <Modal
              open={modelOpen}
              onClose={() => {
                setModelOpen(!modelOpen);
              }}
            >
              <p className={styles.modalText}>Thanks, I'll reach out ASAP!</p>
              <Image src={'/officeMeeting.svg'} fill alt="office meeting" />
              {/* <button
                className={styles.modalClose}
                type="button"
                onClick={() => {
                  setModelOpen(!modelOpen);
                }}
              >
                Close
              </button> */}
            </Modal>
          )}
        </div>
      </section>
    </>
  );
}

export default ContactMe;
