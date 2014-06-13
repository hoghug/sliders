class Slide < ActiveRecord::Base
	belongs_to :slideshow

	validates_presence_of :title, :description, :image

	mount_uploader :image, ImageUploader

	default_scope { order('id ASC') }

end
