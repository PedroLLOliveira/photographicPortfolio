class CreateAlbumImages < ActiveRecord::Migration[7.1]
  def change
    create_table :album_images do |t|
      t.references :album, null: false, foreign_key: true
      t.references :image, null: false, foreign_key: true

      t.timestamps
    end
  end
end
