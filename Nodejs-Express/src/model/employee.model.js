module.exports = (sequelize, Sequelize) => {
    const Employee = Sequelize.define({
        id:{
            primaryKey: true,
            type: Sequelize.STRING,
            defaultValue: Sequelize.UUIDV4,
        },
    });
};
