import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Forms = () => {
  return (
    <form className="text-dark d-flex flex-column align-items-left gap-4 my-auto py-4 px-3">
      <div class="form-group">
        <label for="name" className="text-secondary mb-2">
          <h6>Your Name (required)</h6>
        </label>
        <input type="text" class="form-control" id="name" />
      </div>
      <div class="form-group">
        <label for="email" className="text-secondary mb-2">
          <h6>Your Email (required)</h6>
        </label>
        <input type="email" class="form-control" id="email" />
      </div>
      <div class="form-group">
        <label for="subject" className="text-secondary mb-2">
          <h6>Subject</h6>
        </label>
        <input type="text" class="form-control" id="subject" />
      </div>
      <div class="form-group">
        <label for="message" className="text-secondary">
          <h6>Message</h6>
        </label>
        <textarea class="form-control" id="message" rows="6"></textarea>
      </div>
      <div className="container d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-primary nav-item d-lg-inline px-4 py-2"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default Forms;
