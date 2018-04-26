class CreateCelebs < ActiveRecord::Migration[5.2]
  def change
    create_table :celebs do |t|

      t.timestamps
    end
  end
end
