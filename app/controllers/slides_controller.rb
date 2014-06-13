class SlidesController < ApplicationController

	def create
		@slideshow = Slideshow.find(params[:slideshow_id])
		@slide = @slideshow.slides.new(slide_params)
		if @slide.save
			redirect_to slideshow_path(@slideshow)
		else
			redirect_to :back
		end
	end

	def update
		@slideshow = Slideshow.find(params[:slideshow_id])
		@slide = Slide.find(params[:id])
		if @slide.update(slide_params)
			redirect_to slideshow_path(@slideshow)
		else
			redirect_to :back
		end
	end

private
	def slide_params
		params.require(:slide).permit(:title, :description, :image)
	end

end