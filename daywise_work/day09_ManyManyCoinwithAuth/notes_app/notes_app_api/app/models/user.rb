class User < ApplicationRecord
    has_many :ledgers
    has_many :purchases, through: :ledgers
    has_secure_password  
end
