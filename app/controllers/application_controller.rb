class ApplicationController < ActionController::API
  def home
    render "welcome/home"
  end
end
