Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users, only: [:new, :create]

  resource :session, only: [:new, :create, :destroy]

  namespace :api do
    resources :sailors, only: [:index, :show, :update]
    get 'hired_sailors' => 'sailors#hired_sailors', :as => :hired_sailors
    get 'available_sailors' => 'sailors#available_sailors', :as => :available_sailors
    resources :crew_assignments, only: [:create, :index, :destroy]
    resources :voyages, only: [:index]
  end
end
