namespace :rss_feed do
  desc 'fetch rss feed entries from registered feeds'
  task fetch_entries: :environment do
    Feed.find_each do |target_feed|
      fetched_xml = HTTParty.get(target_feed.url).body
      parsed_feed = Feedjira.parse(fetched_xml, parser: Feedjira::Parser::RSS)
      parsed_feed.entries.each do |entry|
        pp entry
      end
    end
  end
end
