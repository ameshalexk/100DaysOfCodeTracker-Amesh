class CreateGifts < ActiveRecord::Migration[6.0]
  def change
    create_table :gifts do |t|
      t.string :description
      t.decimal :value
      t.string :event
      t.string :gift_giver
    end
  end
end
