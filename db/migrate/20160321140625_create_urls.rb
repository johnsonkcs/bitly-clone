class CreateUrls < ActiveRecord::Migration
	def change
		create_table :urls do |t|
			t.string :longurl
			t.string :shorturl
			t.integer :click_count, default: 0
			t.timestamp
	end
end
end
