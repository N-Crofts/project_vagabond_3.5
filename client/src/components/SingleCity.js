import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
                <div>
                    <h1>{post.name}</h1>
                    <p>{post.body}</p>
                </div>
            )
        })




        return (
        <div>
            {postContent}
        </div>
        )
    }
}
