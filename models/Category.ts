import { DataTypes, Model } from 'sequelize'
import sequelize from '../lib/db'

class Category extends Model {
  public id!: number
  public name!: string
}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Category',
  }
)

export default Category