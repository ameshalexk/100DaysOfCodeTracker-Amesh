# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Character.create([

	{ name: "Neo", description: "The One" },
	{ name: "Trinity", description: "Love" },
	{ name: "Morpheus", description: "Free Your Mind" },
	{ name: "Agent Smith", description: "The Glitch" },

])


Vehicle.create([

	{ name: "Spaceship", style: "Nebuchadnezzar" }
	

])