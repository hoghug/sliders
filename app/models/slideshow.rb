class Slideshow < ActiveRecord::Base
	has_many :slides

	validates_presence_of :title

	default_scope { order('id ASC') }
end