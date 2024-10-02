import { DataTypes, Model } from 'sequelize'
import sequelize from '../lib/db'
import bcrypt from 'bcryptjs'

class Admin extends Model {
	public id!: number
	public username!: string
	public password!: string

	public async comparePassword(candidatePassword: string): Promise<boolean> {
		return bcrypt.compare(candidatePassword, this.password)
	}
}

Admin.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: 'Admin',
		hooks: {
			beforeCreate: async (admin: Admin) => {
				const salt = await bcrypt.genSalt(10)
				admin.password = await bcrypt.hash(admin.password, salt)
			},
		},
	},
)

export default Admin
