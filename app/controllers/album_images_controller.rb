class AlbumImagesController < ApplicationController
  before_action :set_album_image, only: %i[ show edit update destroy ]

  # GET /album_images or /album_images.json
  def index
    @album_images = AlbumImage.all
  end

  # GET /album_images/1 or /album_images/1.json
  def show
  end

  # GET /album_images/new
  def new
    @album_image = AlbumImage.new
  end

  # GET /album_images/1/edit
  def edit
  end

  # POST /album_images or /album_images.json
  def create
    @album_image = AlbumImage.new(album_image_params)

    respond_to do |format|
      if @album_image.save
        format.html { redirect_to @album_image, notice: "Album image was successfully created." }
        format.json { render :show, status: :created, location: @album_image }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @album_image.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /album_images/1 or /album_images/1.json
  def update
    respond_to do |format|
      if @album_image.update(album_image_params)
        format.html { redirect_to @album_image, notice: "Album image was successfully updated." }
        format.json { render :show, status: :ok, location: @album_image }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @album_image.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /album_images/1 or /album_images/1.json
  def destroy
    @album_image.destroy!

    respond_to do |format|
      format.html { redirect_to album_images_path, status: :see_other, notice: "Album image was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_album_image
      @album_image = AlbumImage.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def album_image_params
      params.require(:album_image).permit(:album_id, :image_id)
    end
end
