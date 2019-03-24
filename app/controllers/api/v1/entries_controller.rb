class Api::V1::EntriesController < Api::V1::ApplicationController
  def index
    @entries = Entry.includes(:feed).page(params[:page]).per(30).order(published_at: :desc)
    render json: {
      result: :success,
      entries: @entries.map(&:format_json)
    }
  rescue StandardError => e
    render json: { result: :failure }
  end
end
