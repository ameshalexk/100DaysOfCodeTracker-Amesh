Rails.application.routes.draw do                                                
  resources :users do                                                            
    collection do                                                                
      post '/login', to: 'users#login' 
      post '/users', to: 'users#create'                                               
    end                                                                          
  end                                                                                
end