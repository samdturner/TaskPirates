module Api
  class CrewAssignmentsController < ApplicationController
    def create
      @crew_assignment = current_voyage.crew_assignments.new(crew_assignment_params)

      if @crew_assignment.save
        render json: @crew_assignment
      else
        render json: @crew_assignment.errors.full_messages, status: :unprocessable_entity
      end
    end

    def index
      @crew_assignments = current_voyage.crew_assignments
      render json: @crew_assignments
    end

    def destroy
      crew_assignment = CrewAssignment.find_by(sailor_id: params[:sailor_id])
      crew_assignment.destroy
    end

    private
    def crew_assignment_params
      params.require(:crew_assignment).permit(:sailor_id)
    end
  end
end
