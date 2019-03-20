class HomeController < ApplicationController
  def index
    @entries = Entry.includes(:feed).limit(30).order(published_at: :desc)
  end
end
