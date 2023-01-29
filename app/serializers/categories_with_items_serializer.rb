class CategoriesWithItemsSerializer < ActiveModel::Serializer
    attributes :id, :name
    has_many :items
    has_many :users, through: :items
  end
  