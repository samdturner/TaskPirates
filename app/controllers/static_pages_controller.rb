class StaticPagesController < ApplicationController
  before_action :require_signed_in!, only: [:root]

  def root; end

  def home; end
end
