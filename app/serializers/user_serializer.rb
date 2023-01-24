class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :trades, :rating
end
