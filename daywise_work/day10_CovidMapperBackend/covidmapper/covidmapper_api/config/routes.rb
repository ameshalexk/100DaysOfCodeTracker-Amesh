Rails.application.routes.draw do                                                
  resources :users do                                                            
    collection do                                                                
      post '/login', to: 'users#login'                                            
    end                                                                          
  end                                                                                
end