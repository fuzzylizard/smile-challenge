class PointsController < ApplicationController
  def index
    render json: {points: 27500}, status: :ok
  end
end
