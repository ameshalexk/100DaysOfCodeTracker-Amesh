# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Purchase.create([

    {"coin":"ripple","price":0.26},
    {"coin":"litecoin","price":45},
    {"coin":"ethereum","price":289}

    
  ])


User.create([

    {"email":"1@1.com","password":"1"},
    {"email":"2@2.com","password":"2"},
    {"email":"3@3.com","password":"3"}
    
  ])
  
  puts "Seeded database"