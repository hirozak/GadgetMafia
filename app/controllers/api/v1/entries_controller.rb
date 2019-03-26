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

  def show
    @entry = Entry.find_by(slug: params[:id])
    @entries = @entry.feed.entries.where('id != ?', @entry.id).page(params[:page]).per(15).order(published_at: :desc)
    render json: {
      result: :success,
      entry: @entry.format_json,
      entries: @entries.map(&:format_json)
    }
  rescue StandardError => e
    render json: { result: :failure }
  end
end
