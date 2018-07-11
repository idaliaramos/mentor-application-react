import React from "react";
import { Card, Icon, Image, Label } from "semantic-ui-react";
const skills = ["javascript", "ux", "software", "coloring", "eating"];
const MentorCard = () => (
  <Card>
    <Image src="/images/avatar/large/matthew.png" />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className="date">Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Label.Group color="blue">
        {skills.map(skill => <Label as="a">{skill}</Label>)}
      </Label.Group>
    </Card.Content>
  </Card>
);

export default MentorCard;
