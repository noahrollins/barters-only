class User < ApplicationRecord
    has_secure_password
    has_many :items, dependent: :destroy
    has_many :categories, through: :items

    validates :name, presence: true
    validates :email, presence: true
end
