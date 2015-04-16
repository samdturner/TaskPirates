class StaticPagesController < ApplicationController
  before_action :require_signed_in!, only: [:root]
  before_action :redirect_if_signed_in, only: [:home]

  def root; end

  def home; end
end
