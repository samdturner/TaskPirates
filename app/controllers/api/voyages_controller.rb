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

  def show
    @voyage = Voyage.find(params[:id])
    render json: @voyage
  end

  def destroy
    voyage = Voyage.find(params[:id])
    voyage.destroy
    render json: voyage
  end

  def update
    @voyage = current_user.voyages.find_by(id: params[:id])

    if @voyage.update_attributes(voyage_params)
      render json: @voyage
    else
      render json: @voyage.errors.full_messages, status: :unprocessable_entity
    end
  end

  private
  def voyage_params
    params.require(:voyage).permit(:sailor_id, :task_requirement,
                                  :task_description, :start_date, :end_date)
  end
end
