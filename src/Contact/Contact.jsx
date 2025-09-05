import React, { useState } from "react";
import SharedComponent from "../SharedComponent/SharedComponent";
import styles from './Contact.module.css'


export default function Contact() {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
  });

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]:e.target.value });
  };

  return (
    <div className={`${styles.sectionPadding}`}>
      <h1 className="text-center fw-bold mt-4">CONTACT SECTION</h1>
      <SharedComponent bgColor={"#2C3E50"} color={"#2C3E50"} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form action="">
              <div className="position-relative mb-4">
              <input
              className={`${styles['custome-input']} w-100`}
                type="text"
                id="fname"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
              />
              {formData.name.length > 0 ? (
                <label
                  htmlFor="fname"
                  className={`${styles["custome-label"]} opacity-1`}
                >
                  UserName
                </label>
              ) : (
                <label
                  htmlFor="fname"
                  className={`${styles["original-label"]} opacity-0`}
                >
                  UserName
                </label>
              )}
              </div>
              <div className="position-relative mb-4">
              <input
              className={`${styles['custome-input']} w-100`}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
              {formData.email.length > 0 ? (
                <label
                  htmlFor="email"
                  className={`${styles["custome-label"]} opacity-1`}
                >
                  Email
                </label>
              ) : (
                <label
                  htmlFor="email"
                  className={`${styles["original-label"]} opacity-0`}
                >
                  Email
                </label>
              )}
              </div>
              <div className="position-relative mb-4">
              <input
              className={`${styles['custome-input']} w-100`}
                type="text"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Age"
              />
              {formData.age.length > 0 ? (
                <label
                  htmlFor="age"
                  className={`${styles["custome-label"]} opacity-1`}
                >
                  Age
                </label>
              ) : (
                <label
                  htmlFor="age"
                  className={`${styles["original-label"]} opacity-0`}
                >
                  Age
                </label>
              )}
              </div>
              <div className="position-relative mb-4">
              <input
              className={`${styles['custome-input']} w-100`}
                type="text"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
              />
              {formData.password.length > 0 ? (
                <label
                  htmlFor="password"
                  className={`${styles["custome-label"]} opacity-1`}
                >
                  Password
                </label>
              ) : (
                <label
                  htmlFor="password"
                  className={`${styles["original-label"]} opacity-0`}
                >
                  Password
                </label>
              )}
              </div>

              <button className={`rounded-2 p-2 ${styles['send-button']}`}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
