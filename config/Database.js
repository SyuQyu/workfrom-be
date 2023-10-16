import { Sequelize } from "sequelize"

const db = new Sequelize('if0_35237382_workfrom', 'if0_35237382', '', {
    host: 'sql313.infinityfree.com',
    dialect: 'mysql',
})

export default db;