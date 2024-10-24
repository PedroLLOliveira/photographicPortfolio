Rails.application.routes.draw do
  resources :album_images
  resources :albums
  resources :images
  resources :users
  resources :contacts
  resources :about
  resources :auth
  # Defines the root path route ("/")
  post 'login', to: 'auth#login'
  root "home#index"
  
end
