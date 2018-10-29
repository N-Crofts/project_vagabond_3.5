City.destroy_all
Post.destroy_all

atlanta = City.create(
    name: "Atlanta",
    photo_url: "https://diamondvision.com/wp-content/uploads/Atlanta-Skyline-Photography.jpg"
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
