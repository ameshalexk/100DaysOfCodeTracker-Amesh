class LocationsController < ApplicationController
  # GET /locations
  def index
    @locations = Location.all
    render json: @locations
  end

  # GET /locations/1
  def show
    @location = Location.find(params[:id])
    render json: @location.to_json(include: :temperatures)
  end
end
