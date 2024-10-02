import { DataTypes, Model } from 'sequelize'
import sequelize from '../lib/db'

class Feedback extends Model {
  public id!: number
  public userId!: number
  public content!: string
  public isApproved!: boolean
}

Feedback.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    isApproved: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: 'Feedback',
  }
)

export default Feedback