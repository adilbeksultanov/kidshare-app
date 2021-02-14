import React, { useState } from "react";

import TempPhoto from "../Assets/images/photo-1.jpg";

export default function RegisterScreen() {
  const addChild = () => {
    console.log("Adding another child!: ");
  };

  const [firstName, setFirstName] = useState("talgatik");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [university, setUniversity] = useState("");
  const [relationship, setRelationship] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div>
      <div className="registrationBody">
        <div className="column-1">
          <div className="parent-photo-row">
            <img src={TempPhoto} />
          </div>
        </div>

        <div className="column-2">
          <h1 className="registration-column-2-title">Basic Information</h1>
          <div className="info-container">
            <p>
              First Name:{" "}
              <span>
                <input
                  type="text"
                  value={firstName}
                  id="firstName"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </span>
            </p>
            <p>
              Last Name:{" "}
              <span>
                <input
                  type="text"
                  value={lastName}
                  id="lastName"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </span>
            </p>

            <p>
              University:{" "}
              <span>
                <input
                  type="text"
                  value={university}
                  id="university"
                  onChange={(e) => {
                    setUniversity(e.target.value);
                  }}
                />
              </span>
            </p>

            <p>
              Relationship to child:{" "}
              <span>
                <input type="text" value={relationship} />
              </span>
            </p>
          </div>

          <div className="info-container">
            <div>
              <h2 className="info-container-title">Address</h2>
            </div>

            <p>
              Street No.{" "}
              <span>
                <input />
              </span>
            </p>

            <p>
              Street name:{" "}
              <span>
                <input />
              </span>
            </p>

            <p>
              Apartment #:{" "}
              <span>
                <input />
              </span>
            </p>

            <p>
              Postal Code:{" "}
              <span>
                <input />
              </span>
            </p>

            <p>
              Country{" "}
              <span>
                <input />
              </span>
            </p>
          </div>

          <div className="info-container">
            <h1>Contact Info</h1>

            <p>
              Phone #:{" "}
              <span>
                <input />
              </span>
            </p>

            <p>
              Email:{" "}
              <span>
                <input />
              </span>
            </p>

            <p>
              Emergency phone #:{" "}
              <span>
                <input />
              </span>
            </p>
          </div>

          <div className="info-container">
            <h1>Children</h1>

            <p>
              First Name:{" "}
              <span>
                <input />
              </span>
            </p>

            <p>
              Gender:{" "}
              <span>
                <input />
              </span>
            </p>
            <p>
              Age:{" "}
              <span>
                <input />
              </span>
            </p>

            <p>
              Allergies:{" "}
              <span>
                <input />
              </span>
            </p>

            <p>
              Dietary Restrictions{" "}
              <span>
                <input />
              </span>
            </p>

            <button onClick={addChild}>Add Child</button>
            <p>Additional Information: </p>
            <input />
          </div>

          <div className="info-container">
            <p>
              Open to Accept Children:{" "}
              <span>
                <input />
              </span>
            </p>

            <p>
              Looking for a family:{" "}
              <span>
                <input />
              </span>
            </p>
          </div>
        </div>
      </div>

      <div id="registration-submit-btn-wraper">
        <button id="registration-submit-btn">Submit</button>
      </div>
    </div>
  );
}
