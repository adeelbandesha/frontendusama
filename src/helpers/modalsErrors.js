import { toast } from "react-toastify";


export const modalsError = (error) => {
  if (error.code == "ERR_NETWORK" && error.response?.status == 0) {
    return toast.error("Server is unavailable");
  }
  if (error.code == "ERR_NETWORK") {
    return toast.error("Something went wrong");
  }
  if (typeof error == "object" && error['reason']) return toast.error(error['reason'])
  if(error?.response?.data) return toast.error(error?.response?.data)
  if(error?.response?.status == 401){
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    localStorage.removeItem('adminToken')
    return toast.error("session expired, Login again")
  }
  if (error?.response) {
    if (error.response?.status == 422) {
      if (error.response?.data?.errors) {
        Object.keys(error.response?.data?.errors).map((item) => toast.error(error.response?.data?.errors[item]));
      }
    } else {
      return toast.error(error?.response?.data?.message)
    }
  }
};