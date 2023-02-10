module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define({
        id:{
            primaryKey: true,
            type: Sequelize.STRING,
            defaultValue: Sequelize.UUIDV4,
        },
        name : {
            type: Sequelize.STRING,
        },
        designation: {
            type: Sequelize.STRING,
        },
    });
};
