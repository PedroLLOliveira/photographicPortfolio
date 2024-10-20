json.extract! image, :id, :file_path, :title, :description, :uploaded_at, :user_id, :created_at, :updated_at
json.url image_url(image, format: :json)
