"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("loading");
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setForm({ name: "", email: "", message: "" });
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* --- Left Section --- */}
        <div className="contact-info">
          <h1>
            Let’s <span>Contact</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium aliquid ut vero. Vero quidem consequuntur dolorum reprehenderit iusto mollitia eius.
          </p>

          <div className="contact-details">
            <div className="detail">
              <div className="icon">@</div>
              <div>
                <h3>Email</h3>
                <a href="mailto:info@lanoraelectroplaters.com">
                  info@lanoraelectroplaters.com
                </a>
              </div>
            </div>
            <div className="detail">
              <div className="icon">☎</div>
              <div>
                <h3>Phone</h3>
                <a href="tel:+11234567890">+1 (123) 456-7890</a>
              </div>
            </div>
            <div className="detail">
              <div className="icon">📍</div>
              <div>
                <h3>Address</h3>
                <p>42 Industrial Estate Road, Pune, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Right Section: Contact Form --- */}
        <div className="contact-form">
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit" disabled={status === "loading"}>
              {status === "loading"
                ? "Sending..."
                : status === "success"
                ? "Message Sent ✅"
                : status === "error"
                ? "Try Again ⚠️"
                : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          background: linear-gradient(to bottom, #f9fafb, #ffffff);
          padding: 1rem 1.5rem;
          overflow: hidden;
        }

        .contact-container {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        @media (max-width: 768px) {
          .contact-container {
            grid-template-columns: 1fr;
          }
        }

        .contact-info h1 {
          font-size: 2rem;
          font-weight: 800;
          color: #222;
          margin-bottom: 1rem;
        }

        .contact-info h1 span {
          color: #4f46e5;
        }

        .contact-info p {
          color: #555;
          line-height: 1.6;
          font-size: 1.1rem;
          max-width: 90%;
        }

        .contact-details {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .detail {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .detail .icon {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: linear-gradient(135deg, #4f46e5, #3b82f6);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .detail h3 {
          margin: 0;
          font-weight: 600;
          color: #111;
        }

        .detail a,
        .detail p {
          color: #555;
          text-decoration: none;
        }

        .detail a:hover {
          color: #4f46e5;
        }

        .contact-form {
          background: #fff;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
          border: 1px solid #eee;
        }

        .contact-form h2 {
          font-size: 1.6rem;
          color: #1e40af;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .contact-form form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 1rem 1.2rem;
          border: 1px solid #ddd;
          border-radius: 10px;
          font-size: 1rem;
          color: #333;
          background-color: #f8fafc;
          transition: all 0.3s ease;
          outline: none;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          background-color: #fff;
          border-color: #4f46e5;
          box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.15);
        }

        .contact-form button {
          background: linear-gradient(135deg, #4f46e5, #3b82f6);
          color: white;
          border: none;
          border-radius: 10px;
          padding: 1rem;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(79, 70, 229, 0.25);
        }

        .contact-form button:hover {
          opacity: 0.9;
          transform: translateY(-2px);
        }

        .contact-form button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      `}</style>
    </section>
  );
}
