Rails.application.routes.draw do
  root to: 'static_pages#root'
  get '/home', to: 'static_pages#home'

  resources :users, only: [:new, :create]

  resource :session, only: [:new, :create, :destroy]

  namespace :api do
    resources :sailors, only: [:index, :show]
    resources :voyages, only: [:index, :create, :destroy, :update,
                              :show]
    get 'voyages/:id/matching_sailors' => 'voyages#matching_sailors'
  end
end
