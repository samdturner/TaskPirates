class Api::VoyagesController < ApplicationController
  def index
    @voyages = current_user.voyages
    render json: @voyages, include: :sailor
  end

  def create
    @voyage = current_user.voyages.new(voyage_params)

    if @voyage.save
      render json: @voyage
    else
      render json: @voyage.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    voyage = Voyage.find(params[:id])
    voyage.destroy
    render json: voyage
  end

  private
  def voyage_params
    params.require(:voyage).permit(:sailor_id)
  end
end
