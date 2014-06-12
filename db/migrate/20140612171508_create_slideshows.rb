class CreateSlideshows < ActiveRecord::Migration
  def change
    create_table :slideshows do |t|
    	t.string :title
    end

    create_table :slides do |t|
    	t.belongs_to :slideshow
    	t.string :title
    	t.string :description
    	t.string :image
    end
  end
end
