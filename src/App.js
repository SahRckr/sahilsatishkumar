import React, { useState } from "react";
import {
	Container,
	Header,
	Table,
	Label,
	Image,
	Modal
} from "semantic-ui-react";
import ReactGA from "react-ga";

import { styles, profile, randomNumGenerator, sections } from "./source";

import "semantic-ui-css/semantic.css";

function getHeader(name, showModal) {
	return (
		<Header className="ui raised segment" style={styles.borderedBox} as="h1">
			<Image src={sections.ImageMap.profile} onClick={() => showModal(true)} />
			<Header.Content>{name}</Header.Content>
			<Label
				as="a"
				color={"black"}
				attached={"bottom right"}
				content={"CONTACT"}
				onClick={() => showModal(true)}
			/>
		</Header>
	);
}

function getSectionHeader(sectionName) {
	return (
		<Header as="h2">
			<Image size="mini" src={sections.ImageMap[sectionName]} />
			<Header.Content>{sectionName}</Header.Content>
		</Header>
	);
}

function getFlatList(flatItems, sectionName) {
	return (
		<section
			className="ui raised segment"
			style={styles.dottedBorderedBox}
			key={randomNumGenerator()}
		>
			{getSectionHeader(sectionName)}
			{flatItems.map((flatItem, i) => (
				<b key={randomNumGenerator()}>
					{i < flatItems.length - 1 ? flatItem + " | " : flatItem}
				</b>
			))}
		</section>
	);
}

function getSubsectionGenerator(description) {
	return (
		<ul>
			{description.map(item => (
				<li key={randomNumGenerator()}>{item}</li>
			))}
		</ul>
	);
}

function sectionGenerator(section) {
	if (section && section.length) {
		return (
			<Table basic={"very"}>
				<Table.Header />
				<Table.Body>
					{section.map(sectionItem => (
						<Table.Row key={randomNumGenerator()}>
							<Table.Cell width={12}>
								{sectionItem.title}
								{sectionItem.subTitle}
								{Array.isArray(sectionItem.description) &&
								sectionItem.description.length
									? getSubsectionGenerator(sectionItem.description)
									: null}
							</Table.Cell>
							<Table.Cell textAlign="center" verticalAlign="middle">
								{sectionItem.logo && (
									<Image
										src={sectionItem.logo}
										className="centered"
										size={"tiny"}
									/>
								)}
								<div className="custom_center">{sectionItem.location}</div>
								<br />
								<div className="custom_center">{sectionItem.timeline}</div>
							</Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
			</Table>
		);
	} else {
		return null;
	}
}

function getSection(sectionData, sectionName) {
	return (
		<section
			className="ui raised segment"
			style={styles.dottedBorderedBox}
			key={randomNumGenerator()}
		>
			{getSectionHeader(sectionName)}
			{sectionGenerator(sectionData)}
		</section>
	);
}

function getSections(sectionMap, profile) {
	const functionMap = {
		section: getSection,
		flatList: getFlatList
	};
	const getKeyName = val => (typeof val === "string" ? "flatList" : "section");
	return (
		<div>
			{Object.keys(sectionMap).map(section =>
				functionMap[getKeyName(profile[section][0])](
					profile[section],
					sectionMap[section]
				)
			)}
		</div>
	);
}

function getCompleteProfile(show, contactInformation, showModal) {
	return (
		<Modal
			open={show}
			onClose={() => showModal(false)}
			basic
			closeIcon={true}
			closeOnDimmerClick={false}
			size="small"
		>
			<Header image={sections.ImageMap.contactMe} content="Connect with me" />
			<Modal.Content>
				<Table stackable>
					<Table.Header />
					<Table.Body>
						{contactInformation.map(contact => (
							<Table.Row key={randomNumGenerator()}>
								<Table.Cell>{contact.type}</Table.Cell>
								<Table.Cell>{contact.detail}</Table.Cell>
							</Table.Row>
						))}
					</Table.Body>
				</Table>
			</Modal.Content>
		</Modal>
	);
}

function App() {
	const [showContactModal, handleShowModal] = useState(false);
	const { name, contactInformation } = profile;
	const showModal = val => {
		if (val) {
			ReactGA.event({
				category: "eventTrack",
				action: "Opened Contact Modal"
			});
		}
		handleShowModal(val);
	};
	return (
		<Container style={styles.body}>
			{getHeader(name, showModal)}
			{getSections(sections.sectionMap, profile)}
			{getCompleteProfile(showContactModal, contactInformation, showModal)}
		</Container>
	);
}

export default App;
