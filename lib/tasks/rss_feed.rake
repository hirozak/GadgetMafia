namespace :rss_feed do
  desc 'fetch rss feed entries from registered feeds'
  task fetch_entries: :environment do
    before_entry_count = Entry.count
    before_entry_count = delete_old_entries if before_entry_count > 9500
    Feed.find_each do |local_feed|
      fetched_xml = HTTParty.get(local_feed.url).body
      parsed_feed = Feedjira.parse(fetched_xml, parser: Feedjira::Parser::RSS)
      parsed_feed.entries.each do |parsed_entry|
        local_entry = local_feed.entries.where(url: parsed_entry.url).first_or_initialize
        local_entry.update(
          url: parsed_entry.url.lstrip,
          title: parsed_entry.title.lstrip,
          summary: parsed_entry.summary.lstrip.gsub(%r{<(.+?)/>}, ''),
          image_url: get_image_url_from_entry(parsed_entry),
          published_at: parsed_entry.published
        )
        pp local_entry.title
      end
    end
    puts "Registered #{Entry.count - before_entry_count} new entries"

  rescue => e
    pp e.message
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

  def delete_old_entries
    old_entries = entries = Entry.limit(3000).order(:created_at)
    old_entries.delete_all
    Entry.count
  end
end
