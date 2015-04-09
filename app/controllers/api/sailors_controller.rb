class Api::SailorsController < ApplicationController
  def index
    @sailors = Sailor.all
    render json: @sailors
  end

  def show
    sailor = Sailor.find(params[:id])
    render :json => sailor
  end
end
