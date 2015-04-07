Rails.application.routes.draw do
  resources :users, only: [:new, :create]

  resource :session, only: [:new, :create, :destroy]

  namespace :api do
    resources :sailors, only: [:index, :show, :update]
  end
end
