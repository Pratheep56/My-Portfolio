import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [anonymous, setAnonymous] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    const formData = new FormData();

    formData.append("access_key", "d733e930-5448-46fe-8054-30321c6c18ab");

    formData.append("subject", "Portfolio Contact | Pratheep Senthilkumar");

    formData.append("from_name", form.name);

    formData.append(
      "email",
      anonymous ? "Anonymous" : form.email
    );

    formData.append("message", form.message);

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setStatus("success");

        setForm({
          name: "",
          email: "",
          message: "",
        });

        setAnonymous(false);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
      rounded-[30px]
      border
      border-white/10
      bg-white/[0.04]
      backdrop-blur-2xl
      p-8
      "
    >
      <h3 className="text-2xl font-bold">
        Send a Message
      </h3>

      <p className="mt-2 text-slate-400">
        I'll get back to you as soon as possible.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-5"
      >
        {/* Name */}

        <input
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="
          w-full
          rounded-xl
          border
          border-white/10
          bg-black/20
          p-4
          outline-none
          transition
          focus:border-cyan-300
          "
        />

        {/* Email */}

        <input
          name="email"
          type="email"
          required={!anonymous}
          disabled={anonymous}
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="
          w-full
          rounded-xl
          border
          border-white/10
          bg-black/20
          p-4
          outline-none
          transition
          disabled:opacity-50
          focus:border-cyan-300
          "
        />

        {/* Anonymous */}

        <label className="flex items-center gap-3 text-sm text-slate-300">

          <input
            type="checkbox"
            checked={anonymous}
            onChange={() => setAnonymous(!anonymous)}
          />

          Send Anonymously

        </label>

        {/* Message */}

        <textarea
          rows={6}
          name="message"
          required
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
          className="
          w-full
          rounded-xl
          border
          border-white/10
          bg-black/20
          p-4
          resize-none
          outline-none
          transition
          focus:border-cyan-300
          "
        />

        {/* Button */}

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={loading}
          className="
          group
          w-full
          rounded-xl
          border
          border-cyan-400/25
          bg-transparent
          py-4
          font-semibold
          transition-all
          duration-300
          hover:border-cyan-300
          hover:bg-cyan-300/10
          disabled:cursor-not-allowed
          disabled:opacity-70
          "
        >
          {loading ? (
            "Sending..."
          ) : (
            <>
              Start Conversation
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </>
          )}
        </motion.button>
      </form>

      {status === "success" && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-center text-green-400"
        >
          Message Sent Successfully

          Thank you for reaching out.
          I'll get back to you as soon as possible.
        </motion.p>
      )}

      {status === "error" && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-center text-red-400"
        >
          Something went wrong. Please try again.
        </motion.p>
      )}
    </motion.div>
  );
}