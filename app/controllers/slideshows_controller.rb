class SlideshowsController < ApplicationController

	load_and_authorize_resource

	def index
		@slideshows = Slideshow.all
		@slideshow = Slideshow.new
	end

	def show
		@slideshow = Slideshow.find(params[:id])
		@slides = @slideshow.slides
		@slide = Slide.new

		# unauthorized if cannot? :manage @slideshow
	end

	def create

		@slideshow = current_user.slideshows.new(slideshow_params)
		if @slideshow.save
			redirect_to slideshow_path(@slideshow)
		else
			redirect_to :back
		end
	end

	def update
		@slideshow = Slideshow.find(params[:id])
		if @slideshow.update(slideshow_params)
			redirect_to slideshow_path(@slideshow)
		else
			redirect_to :back
		end
	end

private
	def slideshow_params
		params.require(:slideshow).permit(:title)
	end
end