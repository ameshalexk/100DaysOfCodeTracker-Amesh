class CreatePurchases < ActiveRecord::Migration[6.0]
  def change
    create_table :purchases do |t|
      t.string :coin
      t.integer :price
      t.integer :shares

      t.timestamps
    end
  end
end
