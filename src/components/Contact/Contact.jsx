
import "./Contact.scss";

export function Contact() {
    return (
        <section className="contact" id="contact-section">
            <p className="contact__prompt contact__prompt--spaced-upper">For questions, inquiries, or to get in touch, use the form below.</p>
            {/* <p className="contact__prompt contact__prompt--spaced-lower">Reach out for more details:</p> */}
            <form className="contact__form" name="contact" action="/success" method="POST" data-netlify="true">
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
