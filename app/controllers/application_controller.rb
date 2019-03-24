class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def render_react_app
    render component: 'App', prerender: false
  end
end
