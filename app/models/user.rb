class User < ApplicationRecord
    has_many :items
    has_many :categories, through: :items

    validates :username, presence: true
    validates :email, presence: true
end
