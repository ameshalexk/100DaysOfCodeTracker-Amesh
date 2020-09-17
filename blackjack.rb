class Human
    attr_accessor :bankroll, :name, :hand
    def initialize name, bankroll = 100
        @name = name
        @hand = []
        @bankroll = bankroll
      end

end

class House
    attr_accessor :bankroll, :name, :hand
    def initialize name = "housedealer", bankroll = 10000
        @name = name
        @hand = []
        @bankroll = bankroll
      end

end



class Cards
    attr_accessor :value
    attr_reader :deck_arr
    def initialize 
        @value = value
        @deck_arr = []
    end
    def shuffle 
        for i in 1..54 
            deck_arr.push(rand(2..11))
        end
        
    end

end


#  house = House.new

class Game
    attr_accessor :inputname
    def initialize 
        @deck_arr = []
    end
    def inputname 
         
        input = gets.chomp
        return input
    end
    def startgame                 
    end
end

puts "Welcome to Blackjack, please enter name : "
    rungame = Game.new
    human = Human.new rungame.inputname
    house = House.new 

    
loop do
    card = Cards.new
    card.shuffle 
    
    human.hand = card.deck_arr[0] +  card.deck_arr[1]
    
    house.hand = card.deck_arr[-1] +  card.deck_arr[-2]

if (human.bankroll > 0)
    puts "Please enter BET amount : "

    bet = gets.chomp.to_i
    p "#{human.name}'s Hand : #{card.deck_arr[0]} and #{card.deck_arr[1]}"
    p "Computer's Hand : #{card.deck_arr[-1]} and #{card.deck_arr[-2]}"

if (human.hand <= 21 and human.hand> house.hand )
    human.bankroll += bet
    house.bankroll -= bet
    p "Player wins"
    p "House balance : USD #{house.bankroll}"
p "#{human.name}'s balance : USD #{human.bankroll}"

elsif (human.hand < house.hand) 
    human.bankroll -= bet
    house.bankroll += bet
    p "Computer wins"
    p "House balance : USD #{house.bankroll}"
p "#{human.name}'s balance : USD #{human.bankroll}"

else 
    p "Its a tie"


end


puts " deal again (d), or quit (q)"
again = gets.chomp.downcase

    if again == "d"
        next
    elsif again == "q"
        break
    else
      p "Invalid entry"
      break
    end



else
    p "game over"
    break
end


end
