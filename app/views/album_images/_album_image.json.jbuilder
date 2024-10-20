json.extract! album_image, :id, :album_id, :image_id, :created_at, :updated_at
json.url album_image_url(album_image, format: :json)
