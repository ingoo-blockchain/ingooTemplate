module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User',{
        email:{
            type:DataTypes.STRING(400),
            allowNull: true,
            unique:true,
        },
        nickname:{
            type:DataTypes.STRING(30),
            allowNull: false,
        },
        password:{
            type:DataTypes.STRING(100),
            allowNull:true
        },
        provider:{
            type:DataTypes.STRING(10),
            allowNull: false,
            defaultValue:'local'
        },
    },{
        timestamps: true,
        tableName: 'User',
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
    })

    return User
}