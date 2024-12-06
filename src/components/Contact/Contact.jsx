// import { useState } from "react";

import "./Contact.scss";


export function Contact() {
    return (
        <section className="contact">
            <form className="contact__form" name="contact" method="POST" data-netlify="true">
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

        console.log("Form submitted:", formData); // testing to see if form works

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