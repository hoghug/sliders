class SlidesController < ApplicationController

	def create
		@slideshow = Slideshow.find(params[:slideshow_id])
		@slide = @slideshow.slides.new(slide_params)
		if @slide.save
			redirect_to slideshows_path
		else
			binding.pry
			redirect_to :back
		end
	end

	def update

	end

private
	def slide_params
		params.require(:slide).permit(:title, :description, :image)
	end

end