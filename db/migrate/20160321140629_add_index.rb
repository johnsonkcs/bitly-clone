class AddIndex < ActiveRecord::Migration
	def change
		add_index :urls, :shorturl
	end
end
