namespace :rss_feed do
  desc 'fetch rss feed entries from registered feeds'
  task fetch_entries: :environment do
    Feed.find_each do |feed|
    end
  end
end
