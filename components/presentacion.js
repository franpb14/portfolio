import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from "react";

import { Modal, ModalBody, ModalFooter } from "reactstrap";

export default function Presentacion() {

  const [modalOpen, setModalOpen] = useState(false);
  const [formError, setFormError] = useState({ error: "" });
  const [querySubject, setQuerySetsubject] = useState("");
  const [name_, setName_] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientMsg, setClientMsg] = useState("");
 
  const sendMail = async () => {
    const data = JSON.stringify({
      name_: name_,
      email: clientEmail,
      client_message: clientMsg,
      subject: querySubject,
    });
    try {
      await fetch("/api/sendMail", {
        "method": "POST",
        "headers": { "content-type": "application/json" },
        "body": data
      })
      setModalOpen(!modalOpen)
    } catch (error) {
        console.log(error);
    }

  }

  return (
    <div id="aboutme" className="container presentacion_principal">
      <div className="row justify-content-center">
        <div className="row justify-content-center b-nn mt-4 col-11 rounded">
          <div className="col-lg-4 col-md-6"><img className="mt-4 mb-4" src="/negraFran2.jpg"></img></div> 
          <div className="col-lg-8 col-md-6">
            <div className="row justify-content-center mt-4">
              <h2>Francisco José Perejón Barrios</h2>
              <h4>Software engineer</h4>
              <p>In November I will obtain my degree in software engineering. This career has taught me a lot and instructed me, 
                 among other things, in programming, which today is not only my job but also one of my hobbies.</p>
              <div className="row justify-content-center mt-4">
                
                <button className="btn col-lg-3 col-md-6 btn-outline-light mb-3" onClick={() => setModalOpen(!modalOpen)}>Contact me</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
      <div className=" modal-header">
          <h5 className=" modal-title" id="exampleModalLabel">
            Contact me
          </h5>
          <button
            aria-label="Close"
            className="btn"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            X
          </button>
        </div>
        <ModalBody>
        <form className="form-horizontal" method="post">
            <div className="form-group">
              <div className="col-md-12">
                <label htmlFor="name">Name:</label>
                <input  id="name" name="name" type="text" placeholder="First Name" className="form-control mt-1" 
                        value={name_} onChange={(e) => setName_(e.target.value)}/>
              </div>
            </div>
            <div className="form-group">
              <div className="col-md-12 mt-2">
                <label htmlFor="clientEmail">Contact email:</label>
                <input  id="clientEmail" name="clientEmail" type="text" placeholder="Email" className="form-control mt-1" 
                        value={clientEmail} onChange={(e) => setClientEmail(e.target.value)}/>
              </div>
            </div>
            <div className="form-group">
              <div className="col-md-12 mt-2">
                <label htmlFor="clientMsg">Message:</label>
                <textarea  id="clientMsg" name="clientMsg" type="text" placeholder="Type your message" className="form-control mt-1" 
                        value={clientMsg} onChange={(e) => setClientMsg(e.target.value)}/>
              </div>
            </div>
            
          </form>
      </ModalBody>


      <ModalFooter>
        <button type="submit" className="btn btn-outline-dark"
                  onClick={(e) => {
                    e.preventDefault();
                    sendMail(name_, clientEmail, clientMsg, querySubject);
                  }}>Send</button>
      </ModalFooter>
        
      </Modal>
    </div>
  )
}
