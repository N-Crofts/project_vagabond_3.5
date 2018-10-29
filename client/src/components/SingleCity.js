import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledBackground = styled.div`
  /* background-image: url("https://diamondvision.com/wp-content/uploads/Atlanta-Skyline-Photography.jpg"); */
  filter: blur(2px);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  max-width: 100%;
`
const StyledPost = styled.div`
  background-color: rgba(0,0,0, 0.4);
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 2;
  top: 50%;
  left: 50%;
  width: 50%;
  padding: 20px;
  flex-wrap: wrap;
  text-align: center;
  font-size: 4vw;
  color: white;
`

const StyledNav = styled.nav`
position: absolute;
width: 100%;
list-style-type: none;
margin: 0;
padding: 0;
overflow: hidden;
top: 0;
background: rgba(0,0,0, .4);
li {
    display: inline-block;
    padding: 15px 20px;
    text-decoration: none;
    font-size: 2.5vw;
    font-weight: bold;
    border-right: 1px solid #bbb;
    color: white;  
}
`
const StyledLink = styled(Link)`
    display: inline-block;
    padding: 15px 20px;
    text-decoration: none;
    font-size: 2.5vw;
    font-weight: bold;
    border-right: 1px solid #bbb;
    color: white;
    cursor: pointer;
`


export default class SingleCity extends Component {
    state = {
        city: {},
        posts: []
    }

    async componentDidMount() {
        const cityId = this.props.match.params.id
        const city = await this.fetchOneCity(cityId)
        const posts = await this.fetchPosts(cityId)

        this.setState({ city, posts })
    }

    fetchOneCity = async (id) => {
        const response = await axios.get(`/api/cities/${id}`)
        return response.data
    }

    fetchPosts = async (id) => {
        const response = await axios.get(`/api/cities/${id}/posts`)
        return response.data
    }

    render() {
        const city = this.state.city
        const postContent = this.state.posts.map((post, i) => {
            return (
                <StyledPost key={i}>
                    <h1>{post.name}</h1>
                    <p>{post.body}</p>
                </StyledPost>
            )
        })


        return (
            <div>
                <StyledBackground>
                    <img src={city.photo_url} />
                </StyledBackground>
            <StyledNav>
                <StyledLink to='/'>VAGABOND</StyledLink>
                <StyledLink to=''>Add New Post</StyledLink>
                <li>{city.name}</li>
                
               
            </StyledNav>
            
           
            {postContent}
            
            </div>
        )
    }
}
