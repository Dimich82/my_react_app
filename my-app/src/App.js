import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import styled from 'styled-components';

class App extends Component {
  render() {
    return (
        <div>
            <SayFullName name="Dima" surname="V" link="vk.com" />
            <SayFullName name="Dima1" surname="V1" link="vk.com" />
            <SayFullName name="Dima2" surname="V2" link="vk.com" />
        </div>
    );
  }
}

function SayFullName(props)
{
    return (
        <div className="wrapper">
        <h1>Имя: {props.name}, фамилия: {props.surname}</h1>
        <a href = {props.link}>Ссылка</a>
        </div>
    )
}

export default App;
