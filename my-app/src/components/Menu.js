import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import styled from 'styled-components';

const Repair = styled.div`
    color: #464646;
    font-size: 18px;
    font-weight: 300;
    line-height: 22px;
`

const WorkTime = styled.div`
    color: #2a2a2a;
    font-size: 12px;
    font-weight: 300;
    line-height: 22px;
    
    span
    {
        display: block;
        color: #464646;
        font-size: 21px;
        font-weight: 500;
    }
`

const Calls = styled.div`
    color: #2a2a2a;
    font-size: 12px;
    font-weight: 300;
    line-height: 22px;
    
    span
    {
        display: block;
        color: #464646;
        font-size: 21px;
        font-weight: 500;
    }
`

const CallButton = styled.button`
    wigth: 176px;
    height: 48px;
    background-color: #3fc7db;
    border-radius: 30px;
    color: #ffffff;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
`

class Address extends Component
{
    render()
    {
        return (<span>{this.props.addr}</span>)
    }
}

class TelNumber extends Component
{
    render()
    {
        return (<span>{this.props.telnum}</span>)
    }
}

class Menu extends Component
{
    render()
    {
        return (
           <Row>
               <Col lg={3}>
                   <Repair>Ремонт айфонов в сервисном центре и на выезде</Repair>
               </Col>
               <Col lg={3} lgOffset={1}>
                   <WorkTime>Пн-пт с 10 до 20, сб, вс с 11 до 18
                       <Address addr = "Ленинская, 301" />
                   </WorkTime>
               </Col>
               <Col lg={3}>
                   <Calls>Звонки принимаются 24 часа
                       <TelNumber telnum = "8 (846) 922 55 44" />
                   </Calls>
               </Col>
               <Col lg={2}>
                   <CallButton>Заказать звонок</CallButton>
               </Col>
           </Row>
        )
    }
}

export default Menu;