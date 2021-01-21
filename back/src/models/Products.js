// import { Sequelize } from 'sequelize'
import Sequelize from 'sequelize';

const Products = (sequelize) => {
    const Products = sequelize.define('products', {
        // productId : {
        //     type : Sequelize.INTEGER,
        //     primaryKey: true,
        //     autoincrement: true
        // },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        brand: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        categories: {
            type: Sequelize.STRING,
            allowNull: false
        },
        price: {
            type: Sequelize.DECIMAL(20, 2), 
            allowNull: false
        },
        stock: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                isInt: true
            }
        },
        imageRoute: {
            type: Sequelize.STRING
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: new Date()
        },
        updatedAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: new Date()
        }
    })
}

export default Products