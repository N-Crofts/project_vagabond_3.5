import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledBackground = styled.div`
  background-image: url("http://klxpress.com.my/images/rail.jpg");
  filter: blur(3px);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  max-width: 100%;
`

const StyledMenu = styled.div`
  background-color: rgba(0,0,0, 0.6);
  border: 1.5px solid #f1f1f1;
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 2;
  top: 50%;
  left: 50%;
  width: 80%;
  padding: 20px;
  padding-bottom: 30px;
  text-align: center;
  font-size: 4vw;
  color: white;
  font-weight: bold;

`


const StyledLink = styled(Link)`
text-decoration: none;
color: #f1f1f1;
cursor: pointer;
font-size: 3vw;
`

export default class LandingPage extends Component {
  render() {
    return (
      <div>
      <StyledBackground>
        </StyledBackground>
        <StyledMenu>
        <h1>VAGABOND</h1>
        <StyledLink to='/cities'>Enter Cities</StyledLink>
        </StyledMenu>
        </div>
    )
  }
}
