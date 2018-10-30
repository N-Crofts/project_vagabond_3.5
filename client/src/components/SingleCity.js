import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



const StyledButton = styled.button`
    display: inline-block;
    padding: 15px 20px;
    text-decoration: none;
    font-size: 2.5vw;
    font-weight: bold;
    border-right: 1px solid #bbb;
    
    cursor: pointer;

`
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
  width: 100%;
  max-width: 100%;
`
const StyledPost = styled.div`
  background-color: rgba(0,0,0, 0.4);
  display: flex;
  justify-content: space-evenly;
  /* position: absolute; */
  transform: translate(-50%, -50%);
  z-index: 2;
  top: 50%;
  left: 50%;
  width: 80%;
  padding: 20px;
  flex-wrap: wrap;
  text-align: center;
  font-size: 1.4vw;
  color: white;
`

const Banana = styled.div`
  padding-left: 5em;
  background-color: rgba(0,0,0, 0.4);
  color: black;
  width: 50em;
  font-size: 1.5vw;


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

    handleChange = (event, i) => {
        const posts = [...this.state.posts]
        posts[i][event.target.name]=event.target.value
        this.setState({posts})
    }

    handleNew = async () => {
        // Fetching ID of city through props
        const cityId = this.props.match.params.id
        const newPost = await axios.post(`/api/cities/${cityId}/posts`)
        await this.fetchOneCity()
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
        const newPost = { ...this.state.newPost }
        newPost[event.target.name] = event.target.value
        this.setState({ newPost })
    }

    handleUpdateChange = (event, i) => {
        const posts = [...this.state.posts]
        posts[i][event.target.name] = event.target.value
        this.setState({ posts })
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
        this.setState({ posts })
    }

    handleUpdate = async (i) => {
        const cityId = this.props.match.params.id
        const updatedPost = this.state.posts[i]
        await axios.put(`/api/cities/${cityId}/posts/${updatedPost.id}`, updatedPost)
    }

    render() {
        const city = this.state.city
        const postContent = this.state.posts.map((post, i) => {

            return (

                <StyledPost key={i}>
                    <Link id="postLink" to={`/cities/${city.id}/posts/${post.id}`} > {post.title}</Link>
                    <div id="body">{post.body}</div>
                </StyledPost>
        

                </div>

            )
        })


        return (
            <div>
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
                        required
                    />
                    <input 
                        type='text'
                        name='body'
                        placeholder='Enter body of post (max 2000 char)'
                        maxLength="2000"
                        value={this.state.newPost.body}
                        onChange={this.handleChange}
                        required
                    />
                    <input type='submit' value='add new post' />
                </form>

                <StyledLink to='/'>VAGABOND</StyledLink>
                <StyledButton to=''>Add New Post</StyledButton>
                <li>{city.name}</li>
               
            </StyledNav>
                <StyledPost>
                    {postContent}
                    <br/>
                </StyledPost>

            
           

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