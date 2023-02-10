const databaseServices = require("../services/db.service");

exports.createEmployee = async (body) => {
    try {
        console.log('EmployeeREpository.createEmployee');
        const result = await databaseServices.employee.create(body);
        console.log("result : ",result);
        return result;
    }
    catch (error) {
        console.error("EmployeeREpository.createEmployee Error",error);
        throw error;
    }
};