class ItemsController < ApplicationController

    def index
        render json: Item.all
    end

    def show
        render json: item, serializer: ItemSerializer ,status: 200
    end

    def create
        new_item = Item.create!(item_params)
        if new_item.valid?
            render json: new_item, status: :created
        else 
            render json: {error: new_item.errors.full_messages}, status: 422
        end
    end

    def destroy
        item.destroy
        head :no_content
    end

    private

    def item
        Item.find(params[:id])
    end

    def item_params
        params.permit(:name, :image_url, :category_id, :user_id)
    end

end
