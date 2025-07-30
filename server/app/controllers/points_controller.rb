require "uri"
require "json"
require "net/http"

class PointsController < ApplicationController
  def index
    points = get_points

    render json: { points: points }, status: :ok
  end

  private

  def get_points
    url = URI("https://api.smile.io/v1/customers/3012968197")

    https = Net::HTTP.new(url.host, url.port)
    https.use_ssl = true

    request = Net::HTTP::Get.new(url)
    request["Authorization"] = "Bearer #{ENV["API_KEY"]}"
    request["Content-Type"] = "application/json"

    response = https.request(request)
    body = JSON.parse(response.body)
    body["customer"]["points_balance"]
  end
end
