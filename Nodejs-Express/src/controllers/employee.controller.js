const EmployeeRepository = require("../repositories/employee.repository");

exports.createEmployee = async (req, res) => {
  const body = req.body;
  console.log("EmployeeController.createEmployee");
  try {
    const result = await EmployeeRepository.createEmployee(body)
    res.status(201).send(result);
  } catch (error) {
    console.error("EmployeeControleer.createEmployee Error", error);
    res
      .status(500)
      .status({ errorMessage: "INTERNAL_SERVER_ERROR", error: error });
  }
};

// exports.getEmployeeByID = async (req, res) => {
//   console.log("EmployeServceice.getEmplyeeByID");
//   const id = req.params.id;
//   try {
//     const result = await EmployeeRepository.getEmployeeByID(id);
//     res.send(200).send(result);
//   } catch (error) {
//     console.log("EmployeeService.getEmployeeId Error", error);
//     res.status(500).send(error);
//   }
// };
