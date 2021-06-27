import React, { useState } from 'react'

const ContactMe = (props) => {
	const generateRandom = () => {
		return Math.floor(Math.random() * 10);
	}

	const [{ num1, num2 }, setCaptchaNumbers] = useState({
		num1: generateRandom()
		, num2: generateRandom()
	});

	const captchaText = num1 + " + " + num2 + " = ";

	const validate = (e) => {
		const value = document.getElementById("input-captcha").value;
		document.getElementById("input-captcha").classList.remove("captcha-invalid");
		if (value !== `${num1 + num2}`) {
			e.preventDefault();
			setCaptchaNumbers({ num1: generateRandom(), num2: generateRandom() })
			document.getElementById("input-captcha").value = "";
			document.getElementById("input-captcha").classList.add("captcha-invalid");
			document.getElementById("input-captcha").setCustomValidity("Wrong Captcha!! Try again!");
			document.getElementById("input-captcha").reportValidity();
		} else {
			document.getElementById("input-captcha").setCustomValidity("");
		}
	}
	return (
		<section className={"contact" + (props.bgBlack ? " contact--bgBlack" : "")}>
			{props.heading !== "" && <h2 className="heading-primary">{props.heading}</h2>}
			{ props.paragraphs.map((para, i) =>
				<p key={"para" + i} className="contact__text">{para}</p>)}
			{ props.showImage ? <img src="/assets/contact_me.png" alt="contact-me" className="contact__image" /> : ""}
			<article className={"contact__form-container" + (props.showImage ? "" : " contact__form-container--fullwidth")}>
				<form
					action="https://formspree.io/f/xvodrlrj"
					method="POST"
					className="contact__form">
					<input type="text" name="name" id="input-name" className="contact__control contact__name" placeholder="Név" required />
					<input type="email" name="email" id="input-email" className="contact__control contact__email" placeholder="Email cím" required />
					<input type="text" name="subject" id="input-subject" className="contact__control contact__subject" placeholder="Tárgy" required />
					<textarea name="message" id="message" className="contact__control contact__message" rows="8" placeholder="Üzenet" required></textarea>
					<div className="contact__submit-area">
						<label htmlFor="input-captcha">{captchaText}</label>
						<input type="number" size="2" id="input-captcha" className="contact__control contact__captcha" placeholder="" required />
						<button type="submit" onClick={validate} className=" btn-secondary contact__button">Küldés</button>
					</div>
				</form>
			</article>
		</section>
	);
};

export default ContactMe;