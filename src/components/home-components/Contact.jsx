import React, { useRef } from 'react';
import Copyright from '../ui/Copyright';
import emailjs from 'emailjs-com';

const Contact = () => {

    const form = useRef()
    const contact = (e) => {
        e.preventDefault() 
        emailjs 
            .sendForm(
                'service_m1vgo5n',
                'template_og8pegb',
                form.current,
                'DeltiihXjEe1s6iW1'
            ).then(() => { 
                document.querySelector('.form__success--contact').classList.remove('message__hidden')
            }).catch(() => { 
                alert(
                    "The E-mail service is temporarily unavailable. Please contact me directly on majdrammal2001@gmail.com"
                )
            })
    }

    return (
        <div id="contact">
            <div className="contact__container">
                <h2 className="contact__title">Any Issues?</h2>
                <h1 className="contact__sub-title">Contact Us!</h1>
                <form ref={form} action="" className="contact__form" onSubmit={contact}>
                    <p className="form__success--contact message__hidden"><b>Success. We will get back to you soon.</b></p>
                    <div className="form__item">
                        <h5 className="form__label--contact">Full Name</h5>
                        <input className="form__input--contact" name="user_name" type="text" placeholder="John Doe" />
                    </div>
                    <div className="form__item">
                        <h5 className="form__label--contact">Email</h5>
                        <input className="form__input--contact" name="user_email" type="email" placeholder="johndoe@mail.com" />
                    </div>
                    <div className="form__item">
                        <h5 className="form__label--contact">Phone</h5>
                        <input className="form__input--contact" type="phone" placeholder="+961 00 000 000 " />
                    </div>
                    <div className="form__item">
                        <h5 className="form__label--contact">Message</h5>
                        <textarea className="form__input--contact" name="message" type="message" placeholder="I am having trouble doing... "></textarea>
                    </div>
                    <button className="contact__form--btn">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
