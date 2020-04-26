import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
// import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
// import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const sections = [
	{
		title: "Experience",
		id: "experience",
		items: [
			{
				mainText: "Software Engineer",
				duration: "August. 2018 - Present",
				subText: "Hypertrack Technologies Private Limited",
			},
			{
				mainText: "Full Stack Javascript Developer",
				duration: "January. 2017 - June. 2018",
				subText: "Dataphi Analytics Private Limited",
			},
			{
				mainText: "Web developer Intern",
				duration: "July. 2016 - October. 2016",
				subText: "Print With Pi (Acquired by Printo India)",
			},
		],
	},
	{
		title: "Education",
		id: "education",
		items: [
			{
				mainText: "Udacity Nanodegree",
				duration: "Feb. 2020 - Present",
				subText: "Cloud developer",
			},
			{
				mainText: "P.A. College of Engineering",
				duration: "August. 2012 - January. 2020",
				subText: "Computer Science & Engineering",
			},
		],
	},
	{
		title: "Skills",
		id: "skills",
		items: [
			{
				mainText: "Languages and Frameworks",
				subText:
					"Javascript (ES6), React/React-Native, Redux/Redux-Saga, GraphQL/Apollo-GraphQL",
			},
			{
				mainText: "Other Interests",
				subText:
					"AWS Amplify/AppSync, Functional Programming (specially with JS), Clojure",
			},
		],
	},
];

function ListItemComponent({ mainText, subText, duration }) {
	return (
		<div className={styles.listContainer}>
			<b>{mainText}</b>
			<i>{duration}</i>
			<p>{subText}</p>
		</div>
	);
}

function ListSectionComponent({ items }) {
	return (
		<ul className={styles.listSection}>
			{items.map((item) => (
				<li key={item.mainText}>
					<ListItemComponent {...item} />
				</li>
			))}
		</ul>
	);
}

function Section(props) {
	const { id, title, items } = props;
	return (
		<section className={styles.sectionGroup}>
			<h3 className={styles.sectionHeader}>{title}</h3>
			<div className={styles.sectionContent}>
				<ListSectionComponent items={items} />
			</div>
		</section>
	);
}

function Home() {
	// const context = useDocusaurusContext();
	// const { siteConfig = {} } = context;
	return (
		<Layout>
			<main className={styles.mainContainer}>
				{sections.map((sectionItem) => (
					<Section key={sectionItem.id} {...sectionItem} />
				))}
			</main>
		</Layout>
	);
}

export default Home;
