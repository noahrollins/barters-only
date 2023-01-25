class UsersWithItemsSerializer < ActiveModel::Serializer
    attributes :id, :name, :email, :trades, :rating

    has_many :items   
end