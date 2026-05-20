import React, { useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_7ye00hp",
      "template_hk05l2m",
      form.current,
      "cPaptWu3U-dA9MYUB"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <div className="section-card">
        <div>
          <h5 className="section-label">Contact</h5>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-6">
          {/* Options */}
          <div className="flex flex-col gap-3">
            {[
              {
                icon: <MdOutlineEmail className="text-[1.1rem] text-blue-500 dark:text-blue-400" />,
                label: "Email",
                value: "leinster.tyer12@gmail.com",
                href: "mailto:leinster.tyer12@gmail.com",
              },
              {
                icon: <RiMessengerLine className="text-[1.1rem] text-blue-500 dark:text-blue-400" />,
                label: "Messenger",
                value: "Tyer Guirre Mercado",
                href: "https://m.me/tyer.leinster",
              },
            ].map(({ icon, label, value, href }) => (
              <div
                key={label}
                className="bg-gray-50 dark:bg-zinc-800 border border-black/[0.08] dark:border-white/[0.08] rounded-xl p-4 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-200"
              >
                {icon}
                <h4 className="text-[0.82rem] font-semibold text-gray-900 dark:text-zinc-50 mt-1 mb-0.5">
                  {label}
                </h4>
                <p className="text-[0.72rem] text-gray-400 dark:text-zinc-500 mb-2">{value}</p>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[0.72rem] text-blue-500 dark:text-blue-400 hover:text-gray-900 dark:hover:text-zinc-50 transition-all duration-200"
                >
                  Send a message
                </a>
              </div>
            ))}
          </div>

          {/* Form */}
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-black/[0.08] dark:border-white/[0.08] text-gray-900 dark:text-zinc-50 text-[0.875rem] placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:bg-blue-500/5 dark:focus:bg-blue-400/10 transition-all duration-200"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-black/[0.08] dark:border-white/[0.08] text-gray-900 dark:text-zinc-50 text-[0.875rem] placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:bg-blue-500/5 dark:focus:bg-blue-400/10 transition-all duration-200"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-black/[0.08] dark:border-white/[0.08] text-gray-900 dark:text-zinc-50 text-[0.875rem] placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:bg-blue-500/5 dark:focus:bg-blue-400/10 transition-all duration-200 resize-none"
            />
            <button type="submit" className="btn-primary self-start">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
