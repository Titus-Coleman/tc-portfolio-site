import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'


const defaultState = {
  firstname: "",
  lastname: "", 
  title: "", 
  company: "", 
  email: "", 
  phone: "", 
  subject: "", 
  message: "",
}

function ContactMe() {
    const[values,setValues] = useState({...defaultState});



    const handleChange = (event: any) => {
      const { name, value } = event.target;
      setValues({
        ...values,
        [name]: value
    });
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setValues({...defaultState})
      } else {
        console.error(response);
      }
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <section>
      <h3 className={styles.contactTitle}>Contact</h3>
      {/* <p>dev@tituscoleman.com</p> */}
    
    <div 
      id='contact'
      className={styles.contactBox}>
    <form className={styles.contactForm}
          onSubmit={(handleSubmit)}
          >
        <div className={styles.inputDiv}>
          <input className={styles.inputForm}
                name='firstname'
                value={values.firstname}
                onChange={handleChange}
                id='firstname' required/>
          <label className={styles.inputLabel}>First Name</label>
        </div>
        <div className={styles.inputDiv}>
        <input className={styles.inputForm} 
                name='lastname'
                value={values.lastname}
                onChange={handleChange}
                id='lastname' required/>
        <label className={styles.inputLabel}>Last Name</label>
        </div>
        {/* <div className={styles.inputDiv}>
        <input className={styles.inputForm} 
                name='title'
                value={values.title}
                onChange={handleChange}
                id='title' required/>
        <label className={styles.inputLabel}>Title</label>
        </div>
        <div className={styles.inputDiv}>
        <input className={styles.inputForm} 
                name='company'
                value={values.company}
                onChange={handleChange}
                id='company' required/>
        <label className={styles.inputLabel}>Company</label>
        </div> */}
        <div className={styles.inputDiv}>
        <input className={styles.inputForm} 
                name='email'
                type={'email'}
                value={values.email}
                onChange={handleChange}
                id='email' required/>
        <label className={styles.inputLabel}>Email Address</label>
        </div>
        {/* <div className={styles.inputDiv}>
        <input className={styles.inputForm} 
                name='phone'
                type={'tel'}
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                value={values.phone}
                onChange={handleChange}
                id='phone' required/>
        <label className={styles.inputLabel}>Phone Number, e.g.: 555-555-5555</label>
        </div> */}
        <div className={styles.inputDiv}>
        <input className={styles.inputForm}
                name='subject' 
                value={values.subject}
                onChange={handleChange}
                id='subject' required/>
        <label className={styles.inputLabel}>Subject</label>
        </div>
        <div className={styles.inputDiv}>
        <label className={styles.inputMsg}>Message</label>
        <textarea 
          className={styles.msgForm} 
          placeholder='Hey Titus! We would love to bring you on!'
          name='message'
          value={values.message}
          onChange={handleChange}
          id="message" 
          required
          autoCorrect='on'/>
          </div>
        <button className={styles.formBtn}type="submit" id='submit' value={'submit'}>Submit</button>
    </form>
    </div>
    </section>
  )
}

export default ContactMe