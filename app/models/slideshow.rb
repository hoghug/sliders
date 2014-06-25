class Slideshow < ActiveRecord::Base

	belongs_to :user
	has_many :slides, :dependent => :destroy

	validates_presence_of :title
	accepts_nested_attributes_for :slides, allow_destroy: true

	default_scope { order('id ASC') }
end