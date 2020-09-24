class RemoveSharesFromPurchases < ActiveRecord::Migration[6.0]
  def change
    remove_column :purchases, :shares, :integer
  end
end
