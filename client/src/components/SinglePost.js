import React, { Component } from 'react'
import axios from 'axios'


export default class SinglePost extends Component {

    state = {
        post: {},
        updatedPost:{}
    }
    async componentDidMount() {
        const postId = this.props.match.params.id

        const post = await this.fetchPost(postId)
        this.setState({ post: post})
    }

    fetchPost = async (id) => {
        const cityId = this.props.match.params.cityId
        const response = await axios.get(`/api/cities/${cityId}/posts/${id}`)
        return response.data
    }

    handleChange = (event) => {
      const post = {...this.state.post}
      post[event.target.name] = event.target.value
      this.setState({post})
    }
    handleUpdate = async (event) => {
      event.preventDefault()
      const cityId = this.props.match.params.cityId
      const postId = this.props.match.params.id
      const response = await axios.put(`/api/cities/${cityId}/posts/${postId}`, this.state.post)
      const post = this.state.post
      // post.push(response.data)
      this.setState({post})
    }



  render() {
    
          
          
      
    return (
      <div>
        <form onSubmit={this.handleUpdate}>
        TITLE:
        <input 
          type='text'
          name='title'
          value={this.state.post.title}
          onChange={this.handleChange}
        />
        <br/>
        BODY:
        <textarea 
          name='body'
          value={this.state.post.body}
          onChange={this.handleChange}
        />
        <input type='submit' value='Edit Post'/>
        </form>
      </div>
    )
  }
}
