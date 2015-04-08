class Api::VoyagesController < ApplicationController
  def index
    render json: current_voyage,
                 include: [:available_sailors, :hired_sailors]
  end
end
