class Api::V1::HomeController < Api::V1::ApplicationController
  def index
    @entries = Entry.includes(:feed).limit(30).order(published_at: :desc)
    render json: {
      result: :success,
      entries: @entries.map(&:format_json)
    }
  rescue StandardError => e
    render json: { result: :failure }
  end
end
