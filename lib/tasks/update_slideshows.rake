task :add_user => :environment do 
	# slideshows = Slideshow.all

	Slideshow.all.each do |ss|
		ss.update(user_id: 1)
	end
end