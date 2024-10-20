require "application_system_test_case"

class AlbumImagesTest < ApplicationSystemTestCase
  setup do
    @album_image = album_images(:one)
  end

  test "visiting the index" do
    visit album_images_url
    assert_selector "h1", text: "Album images"
  end

  test "should create album image" do
    visit album_images_url
    click_on "New album image"

    fill_in "Album", with: @album_image.album_id
    fill_in "Image", with: @album_image.image_id
    click_on "Create Album image"

    assert_text "Album image was successfully created"
    click_on "Back"
  end

  test "should update Album image" do
    visit album_image_url(@album_image)
    click_on "Edit this album image", match: :first

    fill_in "Album", with: @album_image.album_id
    fill_in "Image", with: @album_image.image_id
    click_on "Update Album image"

    assert_text "Album image was successfully updated"
    click_on "Back"
  end

  test "should destroy Album image" do
    visit album_image_url(@album_image)
    click_on "Destroy this album image", match: :first

    assert_text "Album image was successfully destroyed"
  end
end
