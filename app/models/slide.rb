class Slide < ActiveRecord::Base
	belongs_to :slideshow

	validates_presence_of :title, :description

	mount_uploader :image, ImageUploader
end