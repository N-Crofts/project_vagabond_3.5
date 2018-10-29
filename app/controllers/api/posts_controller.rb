class Api::PostsController < ApplicationController
    def index
      @city = City.find(params[:city_id])
      @posts = @city.posts
      render json: @posts
    end
  
    def show
      @post = Post.find(params[:id])
      @city = @post.artist
      render json: @post
    end
  
    def create
      @city = City.find(params[:city_id])
      @post = @city.posts.create(post_params)
      render json: @post
    end
  
    def update
      @post = Post.find(params[:id])
      @post.update(post_params)
      render json: @post
    end
  
    def destroy
      @post = Post.destroy(params[:id])
     
      render json: 200
    end
  
    private
  
    def post_params
      params.require(:post).permit(:title, :date, :body, :preview_url)
    end
  
  end