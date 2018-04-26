import React, { Component } from "react";
import {
  Container,
  Header,
  Table,
  Label,
  Image,
  Modal
} from "semantic-ui-react";

import { 
  styles,
  profile,
  randomNumGenerator,
  sections 
} from "./source";

import "semantic-ui-css/semantic.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContactModal: false
    };
  }

  showModal = val => this.setState({ showContactModal: Boolean(val) });

  getCompleteProfile = (show, contactInformation) => {
    return (
      <Modal
        open={show}
        onClose={() => this.showModal(false)}
        basic
        closeIcon={true}
        closeOnDimmerClick={false}
        size="small"
      >
        <Header image={sections.ImageMap.contactMe} content="Connect with me" />
        <Modal.Content>
          <Table>
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
  };

  getHeader = name => (
    <Header className='ui raised segment' style={styles.borderedBox} as="h1">
      <Image
        src={sections.ImageMap.profile}
        onClick={() => this.showModal(true)}
      />
      <Header.Content>{name}</Header.Content>
      <Label
        circular
        color={"red"}
        empty
        onClick={() => this.showModal(true)}
      />
    </Header>
  );

  getSubsectionGenerator = description => (
    <ul>
      {description.map(item => <li key={randomNumGenerator()}>{item}</li>)}
    </ul>
  );

  sectionGenerator = section => {
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
                    sectionItem.description.length &&
                    this.getSubsectionGenerator(sectionItem.description)}
                </Table.Cell>
                <Table.Cell textAlign="center" verticalAlign="middle">
                  {sectionItem.logo && (
                    <Image
                      src={sectionItem.logo}
                      className="centered"
                      size={"tiny"}
                    />
                  )}
                  {sectionItem.location}
                  {sectionItem.timeline}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      );
    } else {
      return null;
    }
  };

  getSectionHeader = sectionName => (
    <Header as="h2">
      <Image size="mini" src={sections.ImageMap[sectionName]} />
      <Header.Content>{sectionName}</Header.Content>
    </Header>
  );

  getFlatList = (flatItems, sectionName) => {
    return (
      <section className='ui raised segment' style={styles.dottedBorderedBox} key={randomNumGenerator()}>
        {this.getSectionHeader(sectionName)}
        {flatItems.map((flatItem, i) => (
          <b key={randomNumGenerator()}>
            {i < flatItems.length - 1 ? flatItem + " | " : flatItem}
          </b>
        ))}
      </section>
    );
  };

  getSection = (sectionData, sectionName) => {
    return (
      <section className='ui raised segment' style={styles.dottedBorderedBox} key={randomNumGenerator()}>
        {this.getSectionHeader(sectionName)}
        {this.sectionGenerator(sectionData)}
      </section>
    );
  };

  getSections = (sectionMap, profile) => {
    const functionMap = {
      section: this.getSection,
      flatList: this.getFlatList
    };
    const getKeyName = val =>
      typeof val === "string" ? "flatList" : "section";
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
  };

  render() {
    const { name, contactInformation } = profile;
    return (
      <Container style={styles.body}>
        {this.getHeader(name)}
        {this.getSections(sections.sectionMap, profile)}
        {this.getCompleteProfile(
          this.state.showContactModal,
          contactInformation
        )}
      </Container>
    );
  }
}

export default App;
