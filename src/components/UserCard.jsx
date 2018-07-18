import React from 'react';
import {
  Card, Icon, Image, Label,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const style = {
  margin: 10,
};
const UserCard = ({
  id, image, name, skills, contact, message,
}) => (
  <div key={id}>
    <Card style={style} key={id}>
      <Card.Content key={id}>
        <Image floated="right" size="tiny" src={image} />
        <Card.Header>
          {name}
        </Card.Header>
        <Card.Meta>
          <Label.Group color="blue">
            {console.log(skills, 'skills')}
            {skills.map(skill => (
              <Label as="a">
                {skill}
              </Label>
            ))}
          </Label.Group>
        </Card.Meta>
        <Card.Description>
          {message}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href={contact}>
          <Icon name="user" />
          {contact}
        </a>
      </Card.Content>
    </Card>
  </div>
);

UserCard.defaultProps = {
  image: 'hello',
};
UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string,
  message: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default UserCard;
