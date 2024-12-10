import { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import "./Contact.scss";

export function Contact() {
    const formRef = useRef(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        toast.success("Thank you for your message! Please expect a response within 2 days.", {
            icon: false,
            style: {
                backgroundColor: "black",
                color: "white",
                width: "550px",
            }
        });

        if (formRef.current) {
            formRef.current.reset();
        }

        const formData = new FormData(formRef.current);

        try {
            const response = await fetch("/", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                toast.success("Form successfully submitted!");
            } else {
                throw new Error("Form submission failed!");
            }
        } catch (error) {
            toast.error("There was an issue submitting the form.");
            console.error("Form submission error:", error);
        }
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
                <button className="contact__button" type="submit">Submit</button>
            </form>
            <ToastContainer
                position="top-left"
                autoClose={6000}
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
