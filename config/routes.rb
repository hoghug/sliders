Rails.application.routes.draw do
  resources :slideshows do
    resources :slides
  end

  root to: 'slideshows#index'
end
