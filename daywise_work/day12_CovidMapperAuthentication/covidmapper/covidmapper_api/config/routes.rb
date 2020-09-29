Rails.application.routes.draw do    
  root 'welcome#index'                                            
  resources :users do                                                            
    collection do                                                                
      post '/login', to: 'users#login' 
      post '/users', to: 'users#create'                                               
    end                                                                          
  end                                                                                
end