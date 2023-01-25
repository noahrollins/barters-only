Rails.application.routes.draw do
  
  resources :items, only: [:create, :index, :show, :destroy]
  resources :categories, only: [:create, :index, :show]
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
