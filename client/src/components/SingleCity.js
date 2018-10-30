import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledBackground = styled.div`
  /* background-image: url("https://diamondvision.com/wp-content/uploads/Atlanta-Skyline-Photography.jpg"); */
  /* filter: blur(2px); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* background-attachment: fixed; */
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
  /* min-height: 100vh; */
  height: 450px;
  /* max-width: 100%; */
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

const Banana = styled.div`
  padding-left: 5em;
  background-color: rgba(0,0,0, 0.4);
  color: white;
  width: 50em;


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
        posts: [],
        newPost: {
            title: '',
            body: ''
        }
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
        return response.data.reverse()
    }

    handleChange = (event) => {
        const newPost = {...this.state.newPost}
        newPost[event.target.name] = event.target.value
        this.setState({newPost})
    }

    handleUpdateChange = (event, i) => {
        const posts = [...this.state.posts]
        posts[i][event.target.name] = event.target.value
        this.setState({posts})
    }

    handleDelete = async (postId) => {
        const cityId = this.state.city.id
        const deleteResponse = await axios.delete(`/api/cities/${cityId}/posts/${postId}`)
        const filteredPosts = this.state.posts.filter(post => postId !== post.id)
        this.setState({ posts: filteredPosts })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const cityId = this.props.match.params.id
        const response = await axios.post(`/api/cities/${cityId}/posts`, this.state.newPost)
        const posts = [...this.state.posts]
        posts.push(response.data)
        this.setState({posts})
    }

    handleUpdate = async (i) => {
        const cityId = this.props.match.params.id
        const updatedPost = this.state.posts[i]
        await axios.put(`/api/cities/${cityId}/posts/${updatedPost.id}`, updatedPost)
    }

    render() {
        const city = this.state.city
        const postContent = this.state.posts.map((post, i) => {
            // const postNumber = i + 1
            return (
                // <Banana key={i}>

                           <Banana key={i}>
                    <Link to={`/cities/${city.id}/posts/${post.id}`} > {post.title}</Link>
                    <div id="body">{post.body}</div>

       
                      
                    
                    {/* <button onClick={()=>this.handleDelete(post.id)}>delete</button> */}
                </Banana>
            )
        })


        return (
            <Banana>
                <StyledBackground>
                    <img src={city.photo_url} />
                </StyledBackground>
            <StyledNav>
                <StyledLink to='/'>VAGABOND</StyledLink>
                <li>{city.name}</li>
                
               
            </StyledNav>
            
           
            <div>{postContent}</div>
            <form onSubmit={this.handleSubmit}>
                <input 
                    type='text'
                    name='title'
                    placeholder='Enter title of post'
                    value={this.state.newPost.title}
                    onChange={this.handleChange}
                />
                <input 
                    type='text'
                    name='body'
                    placeholder='Enter body of post'
                    value={this.state.newPost.body}
                    onChange={this.handleChange}
                />
                <input type='submit' value='add new post'/>
            </form>
            
            </Banana>
        )
    }
}