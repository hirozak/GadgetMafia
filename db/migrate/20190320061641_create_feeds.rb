class CreateFeeds < ActiveRecord::Migration[5.2]
  def change
    create_table :feeds do |t|
      t.string :name, null: false
      t.text :url, null: false
      t.text :base_url, null: false

      t.timestamps
    end
  end
end
