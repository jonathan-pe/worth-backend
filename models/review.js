'use strict';

module.exports = function (sequelize, DataTypes) {
    let Review = sequelize.define('review', {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            unique: false,
            field: 'name',
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            unique: false,
            field: 'category',
            allowNull: false,
        },
        price: {
            type: DataTypes.DOUBLE,
            unique: false,
            field: 'price',
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            unique: false,
            field: 'description',
            allowNull: true,
        },
        worth: {
            type: DataTypes.BOOLEAN,
            unique: false,
            field: 'worth',
            allowNull: false
        }
    }, {
        underscoredAll: true
    });

    return Review;
};
