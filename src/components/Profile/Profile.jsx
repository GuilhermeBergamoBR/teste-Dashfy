import React, { useState, useEffect } from 'react';
import people from '../../services/people';

const Profile = ({ id }) => {
  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [city, setCity] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');

  useEffect(() => {
    people.showAvatar({ id }).then(res => setAvatar(res.url));
    people.show({ id }).then(res => {
      setName(res.data.name);
      setPosition(res.data.current_position);
      setAge(res.data.age);
      setCity(res.data.city);
      setCountry(res.data.coutry);
    });
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        paddingTop: 60,
        width: '44%',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center'}}>
        <img style={{ borderRadius: '100%' }} src={avatar} />
        <p style={{fontStyle:'italic', fontSize:16, fontFamily:'Roboto'}}>{position}</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <p style={{ fontFamily: 'Roboto' }}>
          <span
            style={{
              color: '#007965',
              fontSize: 16,
              fontWeight: 600,
              fontFamily: 'Roboto',
            }}
          >
            Nome:
          </span>{' '}
          {name}
        </p>
        <p style={{ fontFamily: 'Roboto' }}>
          <span
            style={{
              color: '#007965',
              fontSize: 16,
              fontWeight: 600,
              fontFamily: 'Roboto',
            }}
          >
            Idade:
          </span>{' '}
          {age} anos{' '}
        </p>
        <p style={{ fontFamily: 'Roboto' }}>
          <span
            style={{
              color: '#007965',
              fontSize: 16,
              fontWeight: 600,
              fontFamily: 'Roboto',
            }}
          >
            Cidade:
          </span>{' '}
          {city}
        </p>
        <p style={{ fontFamily: 'Roboto' }}>
          <span
            style={{
              color: '#007965',
              fontSize: 16,
              fontWeight: 600,
              fontFamily: 'Roboto',
            }}
          >
            País:
          </span>{' '}
          {country}
        </p>
      </div>
    </div>
  );
};

export default Profile;
