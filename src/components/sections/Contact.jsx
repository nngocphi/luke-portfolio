import RevealOnScroll from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { useState } from "react";

const InputField = ({ type, name, value, placeholder, onChange }) => (
  <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    required
    className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white transition-all duration-300 ease-in-out focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none"
    placeholder={placeholder}
  />
);

const TextAreaField = ({ name, value, placeholder, onChange }) => (
  <textarea
    name={name}
    value={value}
    onChange={onChange}
    required
    rows="5"
    className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white transition-all duration-300 ease-in-out focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none"
    placeholder={placeholder}
  />
);

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        console.log("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() =>
        console.error("Oops! Something went wrong. Please try again."),
      );
  };

  return (
    <section
      id="contact"
      className="flex min-h-screen items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="w-full px-4 md:w-150">
          <h2 className="mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-center text-3xl font-bold text-transparent">
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <InputField
              type="text"
              name="name"
              value={formData.name}
              placeholder="Name"
              onChange={handleChange}
            />
            <InputField
              type="email"
              name="email"
              value={formData.email}
              placeholder="example@gmail.com"
              onChange={handleChange}
            />
            <TextAreaField
              name="message"
              value={formData.message}
              placeholder="Message"
              onChange={handleChange}
            />
            <button
              type="submit"
              className="w-full cursor-pointer rounded bg-blue-500 px-6 py-3 font-medium text-white transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
