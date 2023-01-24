class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_one :user
  has_one :category
end
