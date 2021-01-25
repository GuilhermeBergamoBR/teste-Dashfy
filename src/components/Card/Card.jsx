import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from './styles/container.styled';
import {Button} from './styles/Button.styled'
import {Avatar} from './styles/Avatar.styled'
import {InfoContainer} from './styles/InfoContainer.styled'

const Card = ({ avatar, name, age, id, city, country, position }) => {
  const history = useHistory();

  return (
    <Button onClick={() => history.push(`/candidate/${id}`)}>
      <Container>
        <Avatar src={avatar} />
        <InfoContainer>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                color: '#007965',
                fontFamily: 'Roboto',
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              Nome
            </span>
            <span style={{ fontFamily: 'Roboto', fontSize: 16 }}>{name}</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                color: '#007965',
                fontFamily: 'Roboto',
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              Idade
            </span>
            <span style={{ fontFamily: 'Roboto', fontSize: 16 }}>
              {age} anos
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                color: '#007965',
                fontFamily: 'Roboto',
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              Cargo atual
            </span>
            <span style={{ fontFamily: 'Roboto', fontSize: 16 }}>
              {position}
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                color: '#007965',
                fontFamily: 'Roboto',
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              Cidade
            </span>
            <span style={{ fontFamily: 'Roboto', fontSize: 16 }}>{city}</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                color: '#007965',
                fontFamily: 'Roboto',
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              País
            </span>
            <span style={{ fontFamily: 'Roboto', fontSize: 16 }}>
              {country}
            </span>
          </div>
        </InfoContainer>
      </Container>
    </Button>
  );
};

export default Card;
