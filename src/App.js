import React, { Component } from "react"
import { Icon, Container, Header, Table, Label, Image, Modal } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css"
import {styles, profile, randomNumGenerator} from './source'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      showContactModal : false
    }
  }

  showModal = (val) => this.setState({showContactModal: Boolean(val)})

  getCompleteProfile = (show, contactInformation) => {
    return(
      <Modal 
      open={show} 
      onClose={()=>this.showModal(false)}
      basic
      closeIcon={true}
      closeOnDimmerClick={false}
      size='small'>
        <Header icon='comments' content='Connect with me' />
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>You pressed the "Little red button"!</i></p>
        <Modal.Content>
          <Table>
            <Table.Header/>
            <Table.Body>
              {contactInformation.map(contact=>(
                <Table.Row key={randomNumGenerator()}>
                  <Table.Cell>{contact.type}</Table.Cell>
                  <Table.Cell>{contact.detail}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Modal.Content>
      </Modal>
    )
  }

  getHeader = (name, contactInformation) => (
    <Header style={styles.borderedBox} as="h1">
      Sahil Satishkumar
      <Label circular color={'red'} empty onClick={()=>this.showModal(true)}/>
      {this.getCompleteProfile(this.state.showContactModal, contactInformation)}
    </Header>
  )

  getSubsectionGenerator = (description) => (
    <ul>
      {description.map(item => <li key={randomNumGenerator()}>{item}</li> )}
    </ul>
  )
  
  sectionGenerator = (section) => {
    if(section && section.length) {
      return(
        <Table basic={'very'}>
          <Table.Header/>
          <Table.Body>
            {section.map(sectionItem=>(
              <Table.Row key={randomNumGenerator()}>
                <Table.Cell width={12}>
                  {sectionItem.title}
                  {sectionItem.subTitle}
                  {Array.isArray(sectionItem.description) && sectionItem.description.length && this.getSubsectionGenerator(sectionItem.description)}
                </Table.Cell>
                <Table.Cell textAlign='center' verticalAlign='middle'>
                  {sectionItem.logo && <Image src={sectionItem.logo} className='centered' size={'tiny'}/>}
                  {sectionItem.location}
                  {sectionItem.timeline}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      )
    } else {
      return null
    }
  }
  getWorkExperience = (works) => {
    return (
      <section style={styles.dottedBorderedBox}>
        <h3>
          <Icon name='suitcase'/> Work Experience
        </h3>
        {this.sectionGenerator(works)}
      </section>
    )
  }

  getEducation = (education) => {
    return (
      <section style={styles.dottedBorderedBox}>
          <h3>
            <Icon name='book'/>Education
          </h3>
          {this.sectionGenerator(education)}
        </section>
    )
  }

  getProjects = (projects) => {
    return (
      <section style={styles.dottedBorderedBox}>
          <h3>
            <Icon name='ship'/>Projects
          </h3>
          {this.sectionGenerator(projects)}
        </section>
    )
  }

  getAssociations = (associations) => {
    return (
      <section style={styles.dottedBorderedBox}>
          <h3>
            <Icon name='group'/>Associations
          </h3><br/>
          {associations.map((association, i) => <b key={randomNumGenerator()}>{i < associations.length - 1 ? association + ' | ' : association }</b>)}
        </section>
    )
  }

  getSkills = (skills) => {
    return (
      <section style={styles.dottedBorderedBox}>
          <h3>
            <Icon name='code'/> Technical Skills
          </h3>
          {this.sectionGenerator(skills)}
        </section>
    )
  }

  getHobbies = (hobbies) => {
    return (
      <section style={styles.dottedBorderedBox}>
          <h3>
            <Icon name='game'/>Hobbies
          </h3><br/>
          {hobbies.map((hobby, i) => <b key={randomNumGenerator()}>{i < hobbies.length - 1 ? hobby + ' | ' : hobby }</b>)}
        </section>
    )
  }

  render() {
    const {name, contactInformation, works, education, projects, associations, skills, hobbies} = profile
    return (
      <Container style={styles.body}>
        {this.getHeader(name, contactInformation)}
        {this.getWorkExperience(works)}
        {this.getEducation(education)}
        {this.getProjects(projects)}
        {this.getAssociations(associations)}
        {this.getSkills(skills)}
        {this.getHobbies(hobbies)}
      </Container>
    )
  }
}

export default App
