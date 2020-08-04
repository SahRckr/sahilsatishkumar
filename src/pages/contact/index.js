import React from "react";

import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";

import styles from "./contact.module.css";

const contacts = [
	{
		type: "E-mail",
		text: "sahilsatishkumar [at] gmail [dot] com",
		href: "mailto:sahilsatishkumar@gmail.com",
	},

	{
		href: "https://www.linkedin.com/in/sahrckr",
		text: "linkedin.com/in/sahrckr",
		type: "LinkedIn",
	},

	{
		href: "https://twitter.com/sahrckr",
		text: "@sahrckr",
		type: "Twitter",
	},

	{
		href: "https://github.com/SahRckr",
		text: "@sahrckr",
		type: "GitHub",
	},
];

function fixElements() {
	const embedClass = document.querySelector(".calendly-badge-content");
	const targetClass = document.querySelector("#calendly-widget");
	targetClass.onclick = embedClass.onclick;
	// embedClass.classList.add(styles.hideButton);
}

window.initBadge = function () {
	window.Calendly.initBadgeWidget({
		url: "https://calendly.com/sahrckr/15min",
		text: "Schedule time with me",
		color: "#00a2ff",
		textColor: "#ffffff",
		branding: true,
	});

	window.setTimeout(fixElements, 1000);
};

const Contact = () => {
	return (
		<Layout>
			<Head>
				<link
					href="https://assets.calendly.com/assets/external/widget.css"
					rel="stylesheet"
				/>
				<script
					src="https://assets.calendly.com/assets/external/widget.js"
					type="text/javascript"
					onload="window.initBadge()"
				></script>
			</Head>
			<div className={styles.contactContainer}>
				<h2>📣 Connect with me:</h2>
				<div>
					<table>
						<thead>
							<tr>
								{contacts.map((contact) => (
									<th key={contact.type}>{contact.type}</th>
								))}
							</tr>
						</thead>
						<tbody>
							<tr>
								{contacts.map((contact) => (
									<td key={contact.type}>
										<a
											href={contact.href}
											target="_blank"
											rel="noopener noreferrer"
										>
											{contact.text}
										</a>
									</td>
								))}
							</tr>
						</tbody>
					</table>
				</div>
				<p tabIndex="0" id="calendly-widget" className={styles.calendlyWidget}>
					Schedule time with me
				</p>
			</div>
		</Layout>
	);
};

export default Contact;
