import { useState } from "react";

import "./Contact.scss";


export function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        setSubmitted(true);

        setTimeout(() => {
            setSubmitted(false);
        }, 5000);
    };

    return (
        <section className="contact" id="contact-section">
            <form className="contact__form" name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
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

            {submitted && (
                <div className="contact__modal">
                    <h1 className="contact__thank-header">Thank you for your message!</h1>
                    <p className="success__text">Please expect a response within 2 business days.</p>
                </div>
            )}
        </section>
    );
}


/*
export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section className="contact" id="contact-section">
            <form className="contact__form" name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
                <input
                    className="contact__name"
                    type="text"
                    name="name"
                    placeholder="NAME"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    className="contact__email"
                    type="email"
                    name="email"
                    placeholder="EMAIL"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    className="contact__message"
                    name="message"
                    placeholder="MESSAGE"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    >
                </textarea>
                <button className="contact__button">Submit</button>
                {submitted && <p className="contact__thanks">Thank you for the message, please expect a response within 2 days!</p>}
            </form>
        </section>
    );
}
*/