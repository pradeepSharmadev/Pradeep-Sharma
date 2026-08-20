"use client";

import React, { useState } from "react";

const Workconnect = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
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
      className="bg-[var(--bg-color)] py-32 border-t border-[var(--border-color)]"
      id="contact"
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 grid md:grid-cols-2 gap-20">
        <div className="space-y-8">
          <h2 className="text-7xl font-medium text-[var(--text-main)] serif-font">
            Let's talk.
          </h2>
          <p className="text-xl text-[var(--text-muted)] font-light leading-relaxed">
            Have a vision you'd like to bring to life? I'm available for
            full-time and freelance opportunities in Delhi, India.
          </p>
          <div className="space-y-4 pt-4">
            <p className="text-xs pb-2 font-bold uppercase tracking-[0.1rem] text-[var(--text-muted)]">
              Direct Contact
            </p>
            <div className="flex flex-col gap-1 text-sm md:text-base font-light">
              <a
                href="tel:+918434111639"
                className="w-fit hover:text-[var(--accent-purple)] transition-colors duration-300"
              >
                +91-8434111639
              </a>
              <a
                className="w-fit flex justify-center hover:text-[var(--accent-purple)] transition-colors duration-300 underline underline-offset-8 decoration-1 decoration-[var(--border-color)]"
                href="mailto:pradeepsharma7319@gmail.com"
              >
                pradeepsharma7319@gmail.com{" "}
              </a>
            </div>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit} method="POST" className="space-y-8">
            <div className="border-b border-[var(--border-color)] py-4">
              <input
                className="w-full focus:outline-none bg-transparent border-none px-0 focus:ring-0 text-lg placeholder:text-[var(--text-muted)]"
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Your Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="border-b border-[var(--border-color)] py-4">
              <input
                className="w-full focus:outline-none bg-transparent border-none px-0 focus:ring-0 text-lg placeholder:text-[var(--text-muted)]"
                id="email"
                name="email"
                type="email"
                placeholder="yourmail@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="border-b border-[var(--border-color)] py-4">
              <textarea
                className="w-full focus:outline-none bg-transparent border-none px-0 focus:ring-0 text-lg placeholder:text-[var(--text-muted)] min-h-[120px]"
                id="message"
                name="message"
                rows={4}
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
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

export default Workconnect;
