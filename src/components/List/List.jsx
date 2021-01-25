import React, { useState, useEffect } from 'react';
import api from '../../services/people';
import Card from '../Card/Card';
import Main from '../Main';
import {Container} from './styles/container.styled'

const List = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    api.index().then(res => setPeople(res.data));
  }, []);

  return (
    <Main>
      <Container>
        {people.map(person => (
          <Card
            avatar={person.avatar}
            name={person.name}
            id={person.id}
            position={person.current_position}
            city={person.city}
            age={person.age}
            country={person.coutry}
          />
        ))}
      </Container>
    </Main>
  );
};

export default List;
