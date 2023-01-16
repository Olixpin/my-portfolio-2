import React, { useState, useEffect } from "react";
import { IconAndText, ComponentLayoutSize } from "../components/UI";
import { Mail, Phone } from "@mui/icons-material";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactMe = () => {
  const [contactDetails, setContactDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const inputs = [
    {
      id: "fullName",
      type: "text",
      placeholder: "Enter your full name",
      label: "Fullname",
      required: true,
      // pattern should also accept . and - and space
      errorMessage: "Please enter a valid name",
    },

    {
      id: "email",
      type: "email",
      placeholder: "Enter your email",
      label: "Email",
      required: true,
      pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
      errorMessage: "Please enter a valid email",
    },

    {
      id: "message",
      type: "text",
      placeholder: "Enter your message",
      label: "Message",
      required: true,
      pattern: "[a-zA-Z]{3,}",
      errorMessage: "Please enter a valid message",
    },
  ];

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setContactDetails({
      ...contactDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch("https://formspree.io/f/xnqoqzjy", {
      method: "POST",
      body: JSON.stringify(contactDetails),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setLoading(false);
        setSubmitted(true);
        setContactDetails({
          fullName: "",
          email: "",
          phone: "",
          message: "",
        });
        toast.success("Message sent successfully");
      })
      .catch((err) => {
        setLoading(false);
        setSubmitted(false);
        setError(err);
        toast.error("Message not sent");
      });
  };

  useEffect(() => {
    if (submitted) {
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }

    if (error) {
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  }, [submitted]);

  return (
    <section
      id="contact"
      className="py-32 bg-white dark:bg-backgroundDark max-[800px]:py-16 "
    >
      <ToastContainer />
      <ComponentLayoutSize>
        <div className="flex flex-col  justify-center ">
          <h1 className="text-8xl font-medium max-[1028px]:text-7xl dark:text-grey100 max-[800px]:text-5xl max-[425px]:text-3xl max-[800px]:mb-4">
            Contact Me
          </h1>
          <div
            id="wrapper"
            className=" grid gap-16 px-16 max-[1033px]:px-0 py-5 pl-0 max-[800px]:px-0 max-[800px]:flex flex-col max-[800px]:gap-0 max-[800px]:py-0"
            style={{
              gridTemplateColumns: "1.7fr 0fr 9fr",
            }}
          >
            <div className="flex flex-col gap-12 max-[800px]:py-0 py-8 max-[800px]:grid max-[800px]:grid-cols-2 max-[425px]:hidden text-xl">
              <IconAndText
                Icon={Phone}
                text={
                  <a href="tel:+234906 3363 754" className="font-bold text-xl">
                    0906 3363 754
                  </a>
                }
              />
              <IconAndText
                Icon={Mail}
                text={
                  <a
                    href="mailto:noibiabdulrasaq@gmail.com"
                    className="font-bold text-xl"
                  >
                    noibi@gmail.com
                  </a>
                }
              />
            </div>

            <div className="middle bg-grey800 dark:bg-background w-[.5px] text-center max-[800px]:hidden">
              &nbsp;
            </div>
            <div className="right py-8 flex flex-col gap-16 ">
              <form
                id="contact-form"
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
              >
                {inputs.map(
                  ({
                    id,
                    type,
                    placeholder,
                    label,
                    required,
                    pattern,
                    errorMessage,
                  }) => (
                    <div key={id} className="flex flex-col gap-2">
                      <label
                        htmlFor={id}
                        className="text-xl font-bold dark:text-background"
                      >
                        {label}
                      </label>
                      {id === "message" ? (
                        <textarea
                          type={type}
                          name={id}
                          id={id}
                          placeholder={placeholder}
                          required={required}
                          pattern={pattern}
                          value={contactDetails[id]}
                          onChange={handleChange}
                          rows="8"
                          className="rounded-md p-4 border border-grey800 dark:border-backgroundDark2 resize-none dark:bg-backgroundDark hover:border-primaryMain focus:border-primaryMain focus:outline-none focus:ring-2 focus:ring-primaryMain focus:ring-opacity-50 dark:text-background"
                        />
                      ) : (
                        <input
                          type={type}
                          name={id}
                          id={id}
                          placeholder={placeholder}
                          required={required}
                          pattern={pattern}
                          value={contactDetails[id]}
                          onChange={handleChange}
                          className="rounded-md px-4 py-3 border border-grey800 dark:border-backgroundDark2 dark:bg-backgroundDark hover:border-primaryMain focus:border-primaryMain focus:outline-none focus:ring-2 focus:ring-primaryMain focus:ring-opacity-50 dark:text-background"
                        />
                      )}
                      <small
                        className={`text-errorMain ${
                          submitted ? "hidden" : "block"
                        }`}
                      >
                        {error}
                      </small>
                    </div>
                  )
                )}
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.5 },
                  }}
                  className={`dark:text-white text-md font-medium px-16 py-3 rounded-md border border-primaryMain hover:bg-primaryDark w-max hover:text-white`}
                >
                  {loading ? "Sending..." : submitted ? "Sent ✅" : "Submit"}
                </motion.button>
                {/* {submitted && (
                  <p className="text-primaryMain px-4 py-2 bg-white border border-grey100 w-max">
                    Message sent successfully
                  </p>
                )}
                {error && <p className="text-errorMain">Message not sent</p>} */}
              </form>
            </div>
          </div>
        </div>
      </ComponentLayoutSize>
    </section>
  );
};

export default ContactMe;
