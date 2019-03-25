Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'entries#index'

  resources :entries, only: %i[show]

  namespace :api do
    namespace :v1 do
      resources :entries, only: %i[index show]
    end
  end
end
