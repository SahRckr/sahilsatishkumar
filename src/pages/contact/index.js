import React from "react";

import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";

import styles from "./contact.module.css";

const contacts = [
	{
		type: "Phone",
		text: "+91-944-951-3893",
		href: "tel:+919449513893",
	},
	{
		type: "SMS",
		text: "+91-944-951-3893",
		href: "sms:+919449513893",
	},
	{
		type: "E-mail",
		text: "sahilsatishkumar [at] gmail [dot] com",
		href: "mailto:sahilsatishkumar@gmail.com",
	},

	{
		href: "https://github.com/SahRckr",
		text: "click me",
		type: "GitHub",
	},

	{
		href: "https://fb.me/sahrckr",
		text: "click me",
		type: "Facebook",
	},

	{
		href: "http://telegram.me/sahrckr",
		text: "click me",
		type: "Telegram",
	},

	{
		href: "https://www.linkedin.com/in/sahrckr",
		text: "click me",
		type: "LinkedIn",
	},

	{
		href: "https://twitter.com/sahrckr",
		text: "click me",
		type: "Twitter",
	},

	{
		href: "https://api.whatsapp.com/send?phone=919449513893",
		text: "click me",
		type: "WhatsApp",
	},
];

const Contact = () => (
	<Layout>
		<Head></Head>
		<div className={styles.contactContainer}>
			<h2>📣 Connect with me:</h2>
			<div>
				<table>
					<thead />
					<tbody>
						{contacts.map((contact) => (
							<tr key={contact.type}>
								<td>{contact.type}</td>
								<td>
									<a
										href={contact.href}
										target="_blank"
										rel="noopener noreferrer"
									>
										{contact.text}
									</a>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	</Layout>
);

export default Contact;
