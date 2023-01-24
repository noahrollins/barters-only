class Item < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :category, optional: true

  validates :name, presence: true
end
