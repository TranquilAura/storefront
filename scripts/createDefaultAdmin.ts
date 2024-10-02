const { Sequelize, DataTypes } = require('sequelize')
const bcrypt = require('bcryptjs')
const path = require('path')

const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: path.join(process.cwd(), 'database.sqlite'),
})

const Admin = sequelize.define(
	'Admin',
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
		hooks: {
			beforeCreate: async (admin: any) => {
				const salt = await bcrypt.genSalt(10)
				admin.password = await bcrypt.hash(admin.password, salt)
			},
		},
	},
)

async function createDefaultAdmin() {
	try {
		await sequelize.sync()
		const adminExists = await Admin.findOne({ where: { username: 'admin' } })

		if (!adminExists) {
			await Admin.create({
				username: 'admin',
				password: 'admin123', // This will be hashed by the beforeCreate hook
			})
			console.log('Default admin user created successfully')
		} else {
			console.log('Default admin user already exists')
		}
	} catch (error) {
		console.error('Error creating default admin:', error)
	} finally {
		await sequelize.close()
	}
}

createDefaultAdmin()
