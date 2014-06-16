class Slideshow < ActiveRecord::Base

	belongs_to :user
	has_many :slides

	validates_presence_of :title

	default_scope { order('id ASC') }
end