namespace :rss_feed do
  desc 'fetch rss feed entries from registered feeds'
  task fetch_entries: :environment do
    before_entry_count = Entry.count
    Feed.find_each do |local_feed|
      fetched_xml = HTTParty.get(local_feed.url).body
      parsed_feed = Feedjira.parse(fetched_xml, parser: Feedjira::Parser::RSS)
      parsed_feed.entries.each do |parsed_entry|
        local_entry = local_feed.entries.where(url: parsed_entry.url).first_or_initialize
        local_entry.update(
          url: parsed_entry.url.lstrip,
          title: parsed_entry.title.lstrip,
          summary: parsed_entry.summary.lstrip.gsub(/<img(.+?)\/>/, ''),
          image_url: get_image_url_from_entry(parsed_entry),
          published_at: parsed_entry.published
        )
        pp local_entry.title
      end
    end
    puts "Registered #{Entry.count - before_entry_count} new entries"
  end

  def get_image_url_from_entry(entry)
    if entry.image
      entry.image
    elsif !Nokogiri::HTML.parse(entry.summary).css('img').empty?
      Nokogiri::HTML.parse(entry.summary).css('img').attribute('src').value
    else
      ''
    end
  end
end
