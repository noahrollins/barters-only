class CategoriesController < ApplicationController

    def index
        render json: Category.all
    end

    def show
        render json: category, serializer: CategoriesWithItemsSerializer, status: 200
    end

    def create
        new_category = Category.create!(params[:name])
        if new_category.valid?
            render json: new_category, status: :created
        else 
            render json: {error: new_category.errors.full_messages}, status: 422
        end
    end

    private

    def category
        Category.find(params[:id])
    end
end
