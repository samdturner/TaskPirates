Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users, only: [:new, :create]

  resource :session, only: [:new, :create, :destroy]

  namespace :api do
    resources :sailors, only: [:index, :show, :update]
    resources :crew_assignments, only: [:create, :index]
  end
end
