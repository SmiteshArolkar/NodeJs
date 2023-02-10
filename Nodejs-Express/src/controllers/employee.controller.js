const EmployeeRepository = require("../repositories/employee.repository");

exports.createEmployee = async (req, res) => {
  const body = req.body;
  console.log("EmployeeController.createEmployee");
  try {
    const result = await databaseServices.employee.create(body);
    res.status(201).send(result);
  } catch (error) {
    
    console.error("EmployeeControleer.createEmployee Error", error);
    res
      .status(500)
      .status({ errorMessage: "INTERNAL_SERVER_ERROR", error: error });
  }
};
