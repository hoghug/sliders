class SlideshowsController < ApplicationController

	load_and_authorize_resource

	def index
		@slideshows = Slideshow.includes(:user)
		@slideshow = Slideshow.new
		@slideshow.slides.build
	end

	def show
		@slideshow = Slideshow.find(params[:id])
		@slides = @slideshow.slides
		@slide = Slide.new

		respond_to do |format|
			format.html 
			format.json  { render json: @slideshow }
		end

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

			 respond_to do |format|
		      format.html { redirect_to slideshow_path(@slideshow) }
		      format.json { render :json => @slideshow.to_json(:include => :user) }
		      format.js
		    end
		else
			redirect_to :back
		end
	end

private
	def slideshow_params
		params.require(:slideshow).permit(:title, slides_attributes: [:id, :title, :description, :image])
	end
end