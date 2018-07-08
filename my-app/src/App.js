import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';

import styled from 'styled-components';

import Header from './components/Header';
import Menu from './components/Menu';
import Main from './components/Main';

const url = process.env.PUBLIC_URL + '/img/fon.jpg';

const HeaderWrapper = styled.header`
    width: 100%;
    height: 49px;
    background-color: #242424;
    opacity: 0.8;
`

const MenuWrapper = styled.div`
    height: 89px;
    padding-top: 21px;
`

const MainWrapper = styled.main`
    height: 600px;
    padding-top: 130px;
    background: url(${url}) no-repeat;
    background-size: cover;
`

class App extends Component
{
  render()
  {
    return (
        <div className="App">
            <HeaderWrapper>
                <Grid>
                    <Header />
                </Grid>
            </HeaderWrapper>
            <MenuWrapper>
                <Grid>
                    <Menu />
                </Grid>
            </MenuWrapper>
            <MainWrapper>
                <Grid>
                    <Main />
                </Grid>
            </MainWrapper>
        </div>
    );
  }
}

/*
<div>
    <SayFullName name="Dima" surname="V" link="vk.com" />
    <SayFullName name="Dima1" surname="V1" link="vk.com" />
    <SayFullName name="Dima2" surname="V2" link="vk.com" />
</div>
 */

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
