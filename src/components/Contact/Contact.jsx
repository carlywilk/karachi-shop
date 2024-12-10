
import "./Contact.scss";

export function Contact() {
    return (
        <section className="contact" id="contact-section">
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
