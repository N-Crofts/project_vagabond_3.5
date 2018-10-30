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
    photo_url: "https://diamondvision.com/wp-content/uploads/Atlanta-Skyline-Photography.jpg"
)

post_one = atlanta.posts.create(
    title: "Piedmont Park",
    date: "10/28/18",
    body: "This is the largest park in the city and homes to festivals nearly every weekend during the warmer months.  Make sure to check out events such as Music Midtown, the Dogwood Festival, and the Atlanta Jazz Festival",
    photo_url: "https://i.imgur.com/nRqWT5A.jpg"
)

post_two = atlanta.posts.create(
    title: "Fox Theatre",
    date: "12/18/18",
    body: "The Fox was a great venue for a Holiday Gucci Mane show.  Hope he comes back next year!",
    photo_url: "https://i.imgur.com/yfgBBh9.jpg"
)

post_three = atlanta.posts.create( 
    title: "Starlight Six Drive In",
    date: "11/28/17",
    body: "Best deal in the city!  I got to watch 3 movies for 8 bucks, and I got to stay in my car.  Popcorn was super cheap too!  I see why this place has been open since 1949.",
    photo_url: "https://i.imgur.com/3hyzDcb.jpg"
)
