class ChangeDescToText < ActiveRecord::Migration
  def change
  	change_column :slides, :description, :text
  end
end
