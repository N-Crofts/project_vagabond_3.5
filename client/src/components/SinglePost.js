import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import swal from 'sweetalert'

const StyledPostContainer = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: flex-start;
padding-top: 27px;
`

const StyledPost = styled.div`
background-color: rgba(0,97,127,0.6);
margin: 30px;
padding: 10px;
box-shadow: 7px 7px 7px #2a4863;
div {
  font-size: 14px;
}
&:hover {
  #post-title > span {
    display: inline;
  }
}
#post-title {
  color: #363636;
  font-size: 20px;
  font-weight: 700;
  padding-left: 15px;
  margin: 0 0 10px 0;
  border-bottom: none;
  span {
    float: right;
    display: none;
  }
}
#post-description {
  display: flex;
  flex-wrap: wrap;
  height: 200px;
  padding: 15px;
  text-wrap: normal;
  color: #363636;
}
textarea {
  font-size: 18px;
  border: none;
  width: 92vw;
  border-bottom: 1px solid #444444;
  background-color: lightcyan;
}
`
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
      this.setState({post})
    }
    handleDelete = async (postId) => {
      swal({
        title: "Delete this post?",
        text: "Are you sure you want to delete this post?",
        icon: "warning",
        buttons: true,
        dangerMode: true
      })
        .then((willDelete) => {
          if(willDelete) {
            swal("Post Deleted!", {
              icon: "success"
            })
            .then(async ()=> {
              const cityId = this.state.post.city_id
              const deleteResponse = await axios.delete(`/api/cities/${cityId}/posts/${postId}`)
              this.goBack()
            })
          } else {
            swal("Post not deleted")
          }
        })
    }

    goBack = () => {
      const cityId = this.props.match.params.cityId
      window.location.replace(`/cities/${cityId}`)
    }

  render() {
    return (
        <StyledPostContainer>
      <StyledPost>
        <form onSubmit={this.handleUpdate}>
        
        <input id="post-title"
          type='text'
          name='title'
          value={this.state.post.title}
          onChange={this.handleChange}
        />
        
        
        <textarea id="post-description"
          name='body'
          value={this.state.post.body}
          onChange={this.handleChange}
        />
        <input type='submit' value='Edit Post' onClick={()=>{this.goBack()}}/>
        <button onClick={()=>this.handleDelete(this.state.post.id)}>delete</button>
        <button onClick={()=>this.goBack()}>Go Back</button>

        </form>
      </StyledPost>
      </StyledPostContainer>
    )
  }
}