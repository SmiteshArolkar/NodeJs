const databaseServices = require("../services/db.service");

exports.createEmployee = async (body) => {
    console.log('EmployeeRepository.createEmployee');

    try {
        console.log(body)
        const result = await databaseServices.employee.create(body);
        console.log("result : ",result);
        return result;
    }
    catch (error) {
        console.error("EmployeeREpository.createEmployee Error",error);
        throw error;
    }
};