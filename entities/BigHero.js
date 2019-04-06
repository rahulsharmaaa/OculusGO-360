import React from 'react';
import { asset } from 'react-360';
import Entity from 'Entity';

export default class BigHero extends React.Component {
  render() {
    return (
      <Entity
        source={{
          obj: asset('BigHero/BigHero.obj'),
          mtl: asset('BigHero/BigHero.mtl')
        }}
        style={{
          transform: [{ rotateY: 150 }],
          transform: [{ rotateX: -280 }]
        }}
      />
    );
  }
}
