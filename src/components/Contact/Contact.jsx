import { useState, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import "./Contact.scss";

export function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const formRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        toast.success("Thank you for your message! Please expect a response within 2 days.", {
            icon: false,
            style: {
                backgroundColor: "black",
                color: "white",
                width: "500px",
            },
            progressStyle: {
                backgroundColor: "white",
            }
        });

        if (formRef.current) {
            formRef.current.reset();
        }

        setSubmitted(true);
    };

    return (
        <section className="contact" id="contact-section">
            <form className="contact__form" ref={formRef} name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <input
                    className="contact__name"
                    type="text"
                    name="name"
                    placeholder="NAME"
                    required
                />
                <input
                    className="contact__email"
                    type="email"
                    name="email"
                    placeholder="EMAIL"
                    required
                />
                <textarea
                    className="contact__message"
                    name="message"
                    placeholder="MESSAGE"
                    required
                    >
                </textarea>
                <button className="contact__button" type="submit" disabled={submitted}>
                    {submitted ? "Submitted" : "Submit"}
                </button>
            </form>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </section>
    );
}
