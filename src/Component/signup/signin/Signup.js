import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./sign.css";

const Signup = () => {
  const [udata, setUdata] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    cpassword: ""
  });

  const handleonChange = (e) => {
    const { name, value } = e.target;

    setUdata(() => {
      return {
        ...udata,
        [name]: value
      }
    })

  };
  return (

    <section>
      <div className="sign_container">
        <div className="sign_header">
         <NavLink to='/'> <img src="https://pngimg.com/uploads/youtube/youtube_PNG102356.png" alt="" /></NavLink>
        </div>
        <div className="sign_form">
          <form action="">
            <h1>Sign-Up</h1>
            <div className="form_data">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                name="name"
                value={udata.name}
                onChange={handleonChange}
                id="name" />
            </div>
            <div className="form_data">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                value={udata.email}
                onChange={handleonChange}
                id="email" />
            </div>
            <div className="form_data">
              <label htmlFor="number">Mobile number</label>
              <input
                type="number"
                name="mobile"
                value={udata.mobile}
                id="mobile"
                onChange={handleonChange}
                placeholder="Atlist 6 char"
              />
            </div>
            <div className="form_data">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                onChange={handleonChange}
                value={udata.password}
                name="password"
                id="password"
                placeholder="Atleast 6 char"
              />
            </div>
            <div className="form_data">
              <label htmlFor="password">Password again</label>
              <input
                type="password"
                name="cpassword"
                onChange={handleonChange}
                value={udata.cpassword}
                id="cpassword" />
            </div>
            <button className="signin_btn">Continue</button>
            <div className="signin_info">
              <p>Already have an account?</p>
              <NavLink to="/signin">signin</NavLink>
            </div>
          </form>
        </div>
      </div>
    </section>

  );
};

export default Signup;