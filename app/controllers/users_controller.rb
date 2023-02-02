class UsersController < ApplicationController

    def index
        render json: User.all
    end

    def show
        render json: user, include: ['items.category'], serializer: UsersWithItemsSerializer , status: 200
    end

    def logged_in
        session_user = User.find_by(id: session[:user_id])
        if session_user
            render json: session_user, include: ['items'], serializer: UsersWithItemsSerializer
        else
          render json: { errors: 'unauthorized entry'}, status: :unauthorized
        end
      end


    def create
        new_user = User.create!(user_params)
        if new_user.valid?
            session[:user_id] = user.id
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
        User.includes(:items).find(params[:id])
    end

    def user_params
        params.permit(:name, :email, :password, :password_confirmation, :trades, :rating)
    end

end
