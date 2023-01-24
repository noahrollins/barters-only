require 'faker'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Seeding Users..."
5.times do |n|
    name = Faker::Name.first_name
    email = Faker::Internet.safe_email(name: "#{name}")
    trades = rand(1..100)
    rating = rand(1.0..5.0)
    User.create!(name: name, email: email, trades: trades, rating: rating)
end

puts "Seeding Categories..."
Category.create!([
    {
        name: "Household"
    },
    {
        name: "Tools/Outdoor Items"
    },
    {
        name: "Clothing"
    },
    {
        name: "Games/Toys"
    },
    {
        name: "Electronics"
    },
    {
        name: "Vehicles/Parts"
    },
])


puts "Seeding Items"
Item.create!([
    {
        name: "Chef's Knives",
        image_url: "https://images.craigslist.org/00G0G_iJPTFRDXgiaz_0CI0t2_600x450.jpg",
        category_id: 1,
        user_id: rand(1..5)
      
    },
    {
        name: "All-Iron Flat Bed Cart Dolly",
        image_url: "https://images.craigslist.org/00808_3GTY3JYFZ4D_0CI0t2_600x450.jpg",
        category_id: 2,
        user_id: rand(1..5)
    },
    {
        name: "20 in OEM wheels & tires for Chevy 1500",
        image_url: "https://images.craigslist.org/00Y0Y_bsCUToSyZ3Uz_0t20CI_600x450.jpg",
        category_id: 6,
        user_id: rand(1..5)
    },
    {
        name: "White Marble Cigarette Holder",
        image_url: "https://images.craigslist.org/00b0b_fWA0B1OHJ0bz_0pG0rg_600x450.jpg",
        category_id: 1,
        user_id: rand(1..5)
    },
    {
        name: "1974 AM General FJ8A Postal Van",
        image_url: "https://images.craigslist.org/00d0d_f8bYBUq6aGQz_0CI0pO_600x450.jpg",
        category_id: 6,
        user_id: rand(1..5)
    },
    {
        name: "RUBBERMAID Outdoor Patio Storage Bench",
        image_url: "https://images.craigslist.org/00B0B_9DhGRhQ05pMz_0CI0t2_600x450.jpg",
        category_id: 2,
        user_id: rand(1..5)
    },
    {
        name: "Mack Tools EXPERT Beer Mugs",
        image_url: "https://images.craigslist.org/00505_hxh6THlGHSRz_0CI0lM_600x450.jpg",
        category_id: 1,
        user_id: rand(1..5)
    },
    {
        name: "GT APEX Electric Scooter",
        image_url: "https://images.craigslist.org/00X0X_4VlcBrWcEIZz_0CI0t2_600x450.jpg",
        category_id: 4,
        user_id: rand(1..5)
    },
    {
        name: "2 Port & Co. Hoodies XL",
        image_url: "https://images.craigslist.org/00303_iy01bVW0TZqz_0sZ0CI_600x450.jpg",
        category_id: 3,
        user_id: rand(1..5)
    },
    {
        name: "Nintendo Wii U",
        image_url: "https://images.craigslist.org/00x0x_4uS2hK6io4f_0t20CI_600x450.jpg",
        category_id: 5,
        user_id: rand(1..5)
    },
    {
        name: "John Deere RDO spreader",
        image_url: "https://images.craigslist.org/01313_kC06WRrPbV0_0CI0t2_600x450.jpg",
        category_id: 2,
        user_id: rand(1..5)
    },
    {
        name: "Tonka Mighty Dump Truck 354",
        image_url: "https://images.craigslist.org/00i0i_1yi4MA5AboN_0CI0hq_600x450.jpg",
        category_id: 4,
        user_id: rand(1..5)
    },
    {
        name: "black antique chair",
        image_url: "https://images.craigslist.org/01616_bCXlFLUmrF3_600x450.jpg",
        category_id: 1,
        user_id: rand(1..5)
    },
    {
        name: "Dewalt 4000 watt portable generator",
        image_url: "https://images.craigslist.org/01515_57EDeFo1UAWz_0CI0hq_600x450.jpg",
        category_id: 2,
        user_id: rand(1..5)
    },
    {
        name: "Multifunction Laser color copier",
        image_url: "https://images.craigslist.org/00z0z_ijyuFysitaJz_0CI0t2_600x450.jpg",
        category_id: 5,
        user_id: rand(1..5)
    },
    {
        name: "Cowboy Hat",
        image_url: "https://images.craigslist.org/00o0o_6Gil7sdKbiKz_0lM0t2_600x450.jpg",
        category_id: 3,
        user_id: rand(1..5)
    },
    {
        name: "Bud Light pool table light",
        image_url: "https://images.craigslist.org/00z0z_bvbqjCKciMHz_0CI0t2_600x450.jpg",
        category_id: 1,
        user_id: rand(1..5)
    },
    {
        name: "1999 Foretravel Motorhome 40 Footer",
        image_url: "https://images.craigslist.org/00y0y_6YIdp6H7zKOz_0CI0mw_600x450.jpg",
        category_id: 6,
        user_id: rand(1..5)
    },
    {
        name: "1966 Chevy Impala",
        image_url: "https://images.craigslist.org/00A0A_eBJEBoIwv6w_0gg0cc_600x450.jpg",
        category_id: 6,
        user_id: rand(1..5)
    },
    {
        name: "Santa Cruz Skateboard",
        image_url: "https://images.craigslist.org/00g0g_lmnJdMX3Es5_0t20CI_600x450.jpg",
        category_id: 4,
        user_id: rand(1..5)
    },
])


