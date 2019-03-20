class Feed < ApplicationRecord
  has_many :entries, dependent: :destroy

  validates :name, presence: true
  validates :url, presence: true
  validates :base_url, presence: true

  def format_json
    {
      id: id,
      name: name,
      url: base_url
    }
  end
end
