import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './AboutStyles';


const About = () => {
 return (
    <Section id="about">
      <SectionDivider divider />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
      Hello!
					<br/> <br/>
					I'm Sandeep Namjoshi , a passionate person and a Web developer based in Ujjain , India. I am a Mechanical Engineering graduate and later switched to the awesome world of web development.
						<br/>
						<br/>
					Always ready to dive in something new ,
					    <br/>	
					Constantly learning and evolving.
					<br/><br/>
      </SectionText>
      <SectionTitle>Skills</SectionTitle>
      <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            <br />
           JavaScript, ES6
            <br />
            HTML5
            <br />
            CSS3
            <br />
            React.js
            <br/>
            Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            <br />
            Node.js
            <br/>
            Express.js
            <br/>
            Jest
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Others</ListTitle>
          <ListParagraph>
            <br />
            Material UI
            <br/>
            Tailwind CSS
            <br/>
            Git, Github
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    </Section>
  );
};

export default About;