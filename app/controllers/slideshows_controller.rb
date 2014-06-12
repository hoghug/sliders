class SlideshowsController < ApplicationController
	def index
		@slideshows = Slideshow.all
		@slideshow = Slideshow.new
	end

	def show
		@slideshow = Slideshow.find(params[:id])
		@slides = @slideshow.slides
		@slide = Slide.new
	end

	def create
		@slideshow = Slideshow.new(slideshow_params)
		if @slideshow.save
			redirect_to slideshows_path
		else
			redirect_to :back
		end
	end

	def update

	end

private
	def slideshow_params
		params.require(:slideshow).permit(:title)
	end
end