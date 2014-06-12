class SlideshowsController < ApplicationController
	def index
		@slideshows = Slideshow.all
		@slideshow = Slideshow.new

	end

	def create

	end

	def update

	end
end