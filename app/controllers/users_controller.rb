class UsersController < ApplicationController

    def index
        render json: User.all
    end

    def show
        render json: user, serializer: UsersWithItemsSerializer , status: 200
    end

    def create
        new_user = User.create!(user_params)
        if new_user.valid?
            render json: new_user, status: :created
        else 
            render json: {error: new_user.errors.full_messages}, status: 422
        end
    end

    def update
        if user
            user.update(user_params)
            render json: user
        else
            render json: { error: "User not found" }, status: :not_found
        end
    end

    def destroy
        user.destroy
        head :no_content
    end

    private

    def user
        User.find(params[:id])
    end

    def user_params
        params.permit(:name, :email, :trades, :rating)
    end

end
