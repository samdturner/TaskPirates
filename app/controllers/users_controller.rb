class UsersController < ApplicationController
  before_action :redirect_if_signed_in, only: [:new]

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      render :new
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  private
    def user_params
      params.require(:user).permit(:email, :password)
    end
end
