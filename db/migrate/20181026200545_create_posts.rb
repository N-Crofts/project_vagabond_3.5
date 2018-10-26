class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :date
      t.string :body
      t.string :photo_url
      t.references :city, foreign_key: true

      t.timestamps
    end
  end
end
