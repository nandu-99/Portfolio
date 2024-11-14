"use client";
import { BackgroundBeams } from "../../components/ui/background-beams";
import { ButtonX } from "@/components/ui/cvborder";
import { useState } from "react";

function page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formDataString = `name: ${(formData.name)} \nemail: ${(formData.email)} \nmessage: ${(formData.message)}`;
    try {
      const response = await fetch("https://quick-send-mail.vercel.app/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "pvnanda99666@gmail.com",
          subject: "Portfolio Form",
          text: formDataString,
        }),
      });

      if (response.ok) {
        setResponseMessage("Message sent successfully!");
        setFormData({name: "", email:"", message:""})
      } else {
        setResponseMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setResponseMessage("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div>
        <BackgroundBeams />
      </div>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Connect with Me
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Hello! 👋 If you'd like to get in touch with me for inquiries, feedback, or potential collaborations, feel free to reach out! I'm here and ready to connect.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="h-10 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700 placeholder:p-2 text-white p-3"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="h-10 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700 placeholder:p-2 text-white p-3"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="h-20 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700 placeholder:p-2 text-white p-3"
          />
          <div style={{ paddingTop: '20px' }}>
            <ButtonX type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send"}
            </ButtonX>
          </div>
        </form>
        {responseMessage && (
          <p className="mt-4 text-center text-white">{responseMessage}</p>
        )}
      </div>
    </div>
  );
}

export default page;
