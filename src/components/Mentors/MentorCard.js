import React from "react";
import { Card, Icon, Image, Label, Button } from "semantic-ui-react";
const style = {
  margin: 10
};
const MentorCard = props => {
  console.log(props.name, "props in the mentor card");
  return (
    <div>
      <Card style={style} key={props.id}>
        <Card.Content>
          <Image floated="right" size="tiny" src={props.image} />
          <Card.Header>{props.name}</Card.Header>
          <Card.Meta>
            <Label.Group color="blue">
              {console.log(props.skills, "skills")}
              {props.skills.map(skill => <Label as="a">{skill}</Label>)}
            </Label.Group>
          </Card.Meta>
          <Card.Description>{props.message}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            {props.contact}
          </a>
        </Card.Content>
      </Card>
    </div>
  );
  // alternate layout{
  /* <Card.Group>
  <Card style={style} color="blue">
    <Image src={props.image} size="s" />
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>
        <span className="date">Mentor</span>
      </Card.Meta>
      <Card.Description>{props.message}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Label.Group color="blue">
        {props.skills.map(skill => <Label as="a">{skill}</Label>)}
      </Label.Group>
      {/* <Label.Group color="blue">
        <Label as="a">{props.skills}</Label>
     </Label.Group>
  </Card.Content>
</Card>
</Card.Group>

{/* Layout 2 */
};
export default MentorCard;
