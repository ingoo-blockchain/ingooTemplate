module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment',{
        content:{
            type:DataTypes.STRING(255),
            allowNull: false,
        },
    },{
        timestamps: true,
        tableName: 'Comment',
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
    })

    return Comment
}