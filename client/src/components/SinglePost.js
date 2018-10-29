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
        return response.data.reverse()
    }


  render() {
    //   const city = this.state.city
    //   const postInfo = this.state.posts
         
          
          
      
    return (
      <div>
        Hello from single SinglePost
      </div>
    )
  }
}
