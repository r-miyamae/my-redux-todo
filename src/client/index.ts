import Axios from "axios";

export const getEmployees = () => {
  return Axios.get("http://dummy.restapiexample.com/api/v1/employees");
};
