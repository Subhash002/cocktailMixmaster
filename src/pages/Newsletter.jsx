import React from "react";
import { toast } from "react-toastify";
import { Form, redirect, useNavigation } from "react-router-dom";
import axios from "axios";
const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const response = await axios.post(newsletterUrl, data);
  console.log(response);
  toast.success(response.data.msg, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
  return redirect("/");
};
const Newsletter = () => {
  const ElementState = useNavigation();
  console.log(ElementState);
  return (
    <Form method="POST" className="form">
      <h4 style={{ textAlign: "center" }}>Our Newsletter</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          First Name:{" "}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-input"
          defaultValue={"harinam@email.com"}
        />
      </div>
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          Last Name:{" "}
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          className="form-input"
          defaultValue="harinam@email.com"
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Email:{" "}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-input"
          defaultValue="harinam@email.com"
        />
      </div>
      <button
        type="submit"
        className="btn"
        disabled={ElementState.state === "submitting"}
      >
        {ElementState.state === "submitting" ? "Submitting" : "Send"}
      </button>
    </Form>
  );
};

export default Newsletter;
