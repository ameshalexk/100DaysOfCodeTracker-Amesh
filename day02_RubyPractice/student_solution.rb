# puts "Hello World"

# adjective = "Big Bad"

# puts "Hello #{adjective}World"

# temp_variable = "Hello World"

# puts temp_variable.upcase

nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]

# puts nums.uniq

# puts nums.push(5), "Ans 1"
# puts nums.pop(5), "Ans 2"
# puts nums.shift(5), "Ans 3"
# puts nums.unshift(5), "Ans 4"
# puts nums.length, "Ans 5"

# puts nums.include?(8)
# puts nums.find_all {|i| i> 10 }
# puts nums.all? {|i| i>0 }
# puts nums.any? {|i| i % 8 == 0 }
# puts nums.count {|i| i > 4 }
# nums.each_with_index {|i, idx| puts i*idx }
# puts nums.find {|i| i % 7 ==0  and i % 5 ==0 and i>0}
# puts nums.find_index {|i| i % 7 ==0  and i % 5 ==0 and i>0}
# puts nums.first(3)
# puts nums.last(3)
# puts nums.group_by{|i| i %3 }
# puts nums.minmax{|a,b| a<=>b}
# puts nums.reject{|i| i % 3 == 0 }
# puts nums.select{|i|  (i % 5 == 0) }

colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

# puts colors[rand 6]
# puts colors.reverse
# puts colors.map(&:upcase)

# def find_area (height, width)
#     puts height * width
# end

# find_area(5,10)

# nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0]

# def multiply_each_by_five (arr)
#     puts arr.map{|i| i * 5 }
# end

# multiply_each_by_five(nums)


book = {
  title: 'The Great Gatsby',
  author: 'F Scott Fitzgerald',
  year: 1925,
  price: 10
}

lamp = {
  type: 'reading',
  brand: 'Ikea',
  price: 25
}

table = {
  type: 'bed side',
  brand: 'Crate & Barrel',
  color: 'birch',
  price: 50
}

# def print_price (ahash)
#     puts ahash[:price]
# end

# print_price(table)


# def print_item_sums (ahash, bhash)
#     puts ahash[:price] + bhash[:price]
# end

# print_item_sums(table, lamp)

# (0..10).reduce

# puts (1...1000).select{|i|  (i % 3 == 0 or i % 5 ==0) }.reduce(:+)


# def check_prime?(num)
#     (2...num).each do |i|
#       return false if num % i == 0
#     end
  
#     true
#   end
  


# puts check_prime?(6)

def is_prime?(num)
    (2...num).each do |i|
       if num % i == 0
         return false
       end
    end
  
    true
  end
  
  def get_primes(max)
    primes = []
  
    (2...max).each do |j|
      primes << j if is_prime?(j)
    end
  
    primes
  end

  puts is_prime?(7)
  puts get_primes(100)