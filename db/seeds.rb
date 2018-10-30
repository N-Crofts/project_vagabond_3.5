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
    photo_url: "https://www.billboard.com/files/media/atlanta-skyline-billboard-1548.jpg"
)
london = City.create(
    name: "London",
    # photo_url: "https://i1.wp.com/www.montcalmroyallondoncity.co.uk/blog/wp-content/uploads/2017/09/shutterstock_313597526.jpg?fit=1000%2C658&ssl=1"
    photo_url: "http://www.bellunesinelmondo.it/wp-content/uploads/2017/02/london-2.jpg"
)

san_francisco = City.create(
    name: "San Francisco",
    photo_url: "http://paperlief.com/images/golden-gate-bridge-side-view-at-night-wallpaper-1.jpg"
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

post_four = london.posts.create(
    title: "Big Ben",
    date: "10/23/18",
    body: "Wow, what a big clock. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat neque malesuada ligula mattis hendrerit. Sed sagittis eros in facilisis molestie. Curabitur interdum ac libero vel elementum. Morbi ullamcorper neque sit amet purus malesuada gravida. Quisque eget congue erat, vel pretium lorem. Praesent venenatis in nunc vitae iaculis. Nam vehicula id sapien in convallis. Praesent congue mauris elit, at consequat purus gravida sed. Integer sed dignissim urna. Nam sagittis lacinia rutrum.
    Curabitur scelerisque lobortis dictum. Donec tincidunt nisi diam, id scelerisque est aliquam sed. Suspendisse non odio eu dolor aliquet consectetur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam urna augue, malesuada ut laoreet quis, malesuada non enim. Pellentesque lacinia semper enim, in semper lacus mattis vel. Donec eu augue nisi. Duis eget luctus tortor, ac dictum metus. Maecenas auctor sed tellus vitae tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla a elementum diam, in tincidunt lorem. Nam mollis felis in justo elementum auctor. Etiam libero odio, laoreet eget venenatis vitae, viverra vitae diam.",
    photo_url: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f54f30b687ee2f82ca189e83c7b5c313&auto=format&fit=crop&w=1001&q=80"
)

post_five = san_francisco.posts.create(
    title: "Cable Cars",
    date: "2/2/18",
    body: "DING DING - it's a trolley.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat neque malesuada ligula mattis hendrerit. Sed sagittis eros in facilisis molestie. Curabitur interdum ac libero vel elementum. Morbi ullamcorper neque sit amet purus malesuada gravida. Quisque eget congue erat, vel pretium lorem. Praesent venenatis in nunc vitae iaculis. Nam vehicula id sapien in convallis. Praesent congue mauris elit, at consequat purus gravida sed. Integer sed dignissim urna. Nam sagittis lacinia rutrum.
    Curabitur scelerisque lobortis dictum. Donec tincidunt nisi diam, id scelerisque est aliquam sed. Suspendisse non odio eu dolor aliquet consectetur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam urna augue, malesuada ut laoreet quis, malesuada non enim. Pellentesque lacinia semper enim, in semper lacus mattis vel. Donec eu augue nisi. Duis eget luctus tortor, ac dictum metus. Maecenas auctor sed tellus vitae tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla a elementum diam, in tincidunt lorem. Nam mollis felis in justo elementum auctor. Etiam libero odio, laoreet eget venenatis vitae, viverra vitae diam.",
    photo_url: "https://i.imgur.com/AbcKxND.jpg"
)