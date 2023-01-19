import React, { useEffect, useState } from 'react'
import Styles from '../styles/Contact.module.css'



export const SentModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (isBrowser) {

  return (

    ReactDOM.createPortal(
    <div className={Styles.Modal}>
      Thanks! I'll reach out ASAP ! Modal

    </div>, document.getElementById("modal-root"))
  )
  } else {
    return null;
  }
}

export default SentModal