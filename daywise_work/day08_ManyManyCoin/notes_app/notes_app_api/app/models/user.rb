class User < ApplicationRecord
    has_many :ledgers
    has_many :purchases, through: :ledgers
end
