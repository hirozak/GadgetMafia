class Entry < ApplicationRecord
  belongs_to :feed

  after_initialize :set_slug

  validates :url, presence: true
  validates :title, presence: true
  validates :summary, presence: true
  validates :image_url, presence: true
  validates :published_at, presence: true
  validates :slug, presence: true, uniqueness: true

  def to_param
    slug
  end

  def set_slug
    self.slug = slug.presence || generate_slug
  end

  def generate_slug
    slug = SecureRandom.urlsafe_base64(12)
    self.class.where(slug: slug).blank? ? slug : generate_slug
  end

  def format_json
    {
      id: id,
      url: url,
      title: title,
      summary: summary,
      imageUrl: image_url,
      publishedAgo: ActionController::Base.helpers.time_ago_in_words(published_at),
      feed: feed.format_json,
      slug: slug
    }
  end
end
