class UpdateSlideshows < ActiveRecord::Migration
  def change
  	add_belongs_to :slideshows, :user
  end
end
