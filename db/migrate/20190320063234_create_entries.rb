class CreateEntries < ActiveRecord::Migration[5.2]
  def change
    create_table :entries do |t|
      t.text :url, null: false, default: ''
      t.string :title, null: false, default: ''
      t.text :summary, null: false, default: ''
      t.text :image_url, null: false, default: ''
      t.datetime :published_at, null: false, default: Time.zone.now
      t.references :feed, foreign_key: true, null: false
      t.string :slug, null: false, default: ''

      t.timestamps
    end
  end
end
