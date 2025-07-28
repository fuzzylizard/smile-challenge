# frozen_string_literal: true

class RewardsController < ApplicationController
  def index
    rewards = [
      {
        id: 1,
        name: "Hug",
        cost: 1200
      },
      {
        id: 2,
        name: "Free Time",
        cost: 2300
      },
      {
        id: 3,
        name: "Weekend Away",
        cost: 57000
      }
    ]

    render json: rewards, status: :ok
  end
end
