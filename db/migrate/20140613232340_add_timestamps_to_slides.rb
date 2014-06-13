class AddTimestampsToSlides < ActiveRecord::Migration
  def change

  	add_timestamps :slides
  end
end
