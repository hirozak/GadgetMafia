class EntriesController < ApplicationController
  def index
    render_react_app
  end

  def show
    @entry = Entry.find_by(slug: params[:id])
    render component: 'App', props: {
      entry: @entry.format_json
    }, prerender: false
  end
end
