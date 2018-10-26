# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

City.destroy_all
Post.destroy_all

atlanta = City.create(
    name: "Atlanta",
    photo_url: "https://fillmurray.com/200/200"
)

post_one = atlanta.posts.create(
    title: "Post One",
    date: "10/28/18",
    body: "Lorem ipsum crunk till you you die. Lorem ipsum crunk till you you die. Lorem ipsum crunk till you you die. Lorem ipsum crunk till you you die.",
    photo_url: "https://fillmurray.com/200/200"
)

post_two = atlanta.posts.create(
    title: "Post Two",
    date: "10/28/18",
    body: "Lorem ipsum crunk till you you die. Lorem ipsum crunk till you you die. Lorem ipsum crunk till you you die. Lorem ipsum crunk till you you die.",
    photo_url: "https://fillmurray.com/200/200"
)

post_three = atlanta.posts.create(
    title: "Post Three",
    date: "10/28/18",
    body: "Lorem ipsum crunk till you you die. Lorem ipsum crunk till you you die. Lorem ipsum crunk till you you die. Lorem ipsum crunk till you you die.",
    photo_url: "https://fillmurray.com/200/200"
)
