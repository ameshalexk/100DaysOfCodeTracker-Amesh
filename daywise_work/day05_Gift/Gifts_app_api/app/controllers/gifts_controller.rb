class GiftsController < ApplicationController

    def index
        render json: { status: 200, gifts: Gift.all }
    end

    def show
        render json: Gift.find(params[:id])
    end
    def show2
        render json: Gift.find([rand(1..4)])
    end

    def create
        gift = Gift.new(gift_params)
        if gift.save
            render json: { status: 201, gift: gift }
        else
            render json: { status:422, gift: gift }
        end
    end
  
    def update
        gift = Gift.find(params[:id])
        gift.update(gift_params)
        render json: { status: 200, gift: gift } 
    end
  
    def destroy
        gift = Gift.destroy(params[:id])
        render json: { status: 204 }
    end
  
    private
  
    def gift_params
        params.require(:gift).permit(:description, :value, :event, :gift_giver)
    end

end