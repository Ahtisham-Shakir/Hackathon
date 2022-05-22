import React, {createContext, useContext} from "react";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

const AppContext = createContext();

const AppProvider = ({children})=>{
    const showAlert = (type,msg)=>{
        if(type === 'success'){
            toast.success(msg, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
        if(type === 'error'){
            toast.error(msg, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
    }

     // Function to for validation
  const validate = (objToValidate) => {
    const { password,confirm, number } = objToValidate;
    let flag = true;

    // If any of field is empty then alert will be shown
    if (true) {
      for (const key in objToValidate) {
        if (objToValidate[key] === '') {
          showAlert('error', 'Please fill all the fields');
          flag = false;
          return false;
        }
    }

        if(password !== confirm){
            showAlert('error', 'Password and Confirm Password is not same');
            flag = false
            return false
        }

        if(number.length !== 11){
            showAlert('error','Number should be 11 digits')
        }
      
    }

    // If all above conditions are true then function return true
    if (flag) {
        return true;
      }
}


return(
    <AppContext.Provider value={{showAlert,validate}}>{children}</AppContext.Provider>
)
}

// Global hook
const useGlobalContext = ()=>{
    return useContext(AppContext);
}

export {useGlobalContext, AppProvider}