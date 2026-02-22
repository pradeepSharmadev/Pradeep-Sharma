"use client";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      // Simulate API call (replace with real backend)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Form Submitted:", formData);

      setSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="section-padding bg-[var(--bg-color)] border-t border-[var(--border-color)]"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
        <h2 className="text-6xl md:text-9xl serif-font mb-16 leading-none">
          Let's talk.
        </h2>
        <div className="flex flex-col items-center gap-8">
          <a
            className="text-1xl md:text-2xl font-light hover:text-[var(--accent-purple)] transition-colors duration-300 underline underline-offset-8 decoration-1 decoration-[var(--border-color)]"
            href="mailto:pradeepsharma7319@gmail.com"
          >
            pradeepsharma7319@gmail.com
          </a>
          <div className="flex justify-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">
            <a className="nav-link" href="#">
              LinkedIn
            </a>
            <a className="nav-link" href="#">
              Dribbble
            </a>
            <a className="nav-link" href="#">
              Instagram
            </a>
          </div>
        </div>
        <div className="max-w-2xl mx-auto text-left pt-16">
          <form className="space-y-12" onSubmit={handleSubmit}>
            <div className="group">
              <label className="contact-label" htmlFor="fullName">
                Full Name
              </label>
              <input
                className="contact-input"
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Your Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="group">
              <label className="contact-label" htmlFor="email">
                Email Address
              </label>
              <input
                className="contact-input"
                id="email"
                name="email"
                type="email"
                placeholder="yourmail@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="group">
              <label className="contact-label" htmlFor="message">
                Your Message
              </label>
              <textarea
                className="contact-input resize-none"
                id="message"
                name="message"
                rows={4}
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="pt-6">
              {success && (
                <p className="text-sm text-[var(--accent-purple)] mb-4">
                  Message sent successfully!{" "}
                  <span
                    className="ml-2 text-lg cursor-pointer text-[var(--accent-purple)]"
                    onClick={() => setSuccess(false)}
                  >
                    &times;
                  </span>
                </p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full md:w-auto px-12 py-5 hover:bg-[var(--accent-purple)] text-[var(--text-main)] font-semibold uppercase tracking-widest text-xs border rounded-sm border-[var(--border-color)] bg-[var(--accent-soft)] transition-all duration-500 dark:border-[var(--accent-soft)]"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
