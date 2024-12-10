import { useRef } from "react";

import "./Contact.scss";

export function Contact() {
    const formRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (formRef.current) {
            formRef.current.reset();
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
        </section>
    );
}
