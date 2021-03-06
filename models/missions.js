module.exports = function (sequelize, DataTypes) {

    const missions = sequelize.define("missions", {
        mission_title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        mission_point_value: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        mission_description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        mission_video_url: {
            type: DataTypes.STRING
        }
    });

    return missions
};
