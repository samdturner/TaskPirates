class Api::SailorsController < ApplicationController
  def index
    @sailors = Sailor.all
    render json: @sailors
  end

  def hired_sailors
    render json: current_voyage.hired_sailors
  end

  def available_sailors
    render json: current_voyage.available_sailors
  end

  def show
    sailor = Sailor.find(params[:id])
    render :json => sailor
  end
end
