class PointsController < ApplicationController
  def index
    points = LoyaltyProgram.new.get_points(3012968197)

    render json: { points: points }, status: :ok
  end

  def create
    
  end
end
