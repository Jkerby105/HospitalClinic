import validator from "validator";
import toast from "react-hot-toast";

export const validateFunction = (data) => {
  const errors = {};

  if (validator.isEmpty(data.firstName))
    errors.firstName = "First name is required";

  if (validator.isEmpty(data.lastName))
    errors.lastName = "Last name is required";

  if (!validator.isEmail(data.email)) errors.email = "Email is invalid";

  if (!validator.isMobilePhone(data.phoneNumber, "en-US"))
    errors.phoneNumber = "Invalid phone number";

  if (!validator.isLength(data.password, { min: 6 }))
    errors.password = "Password must be at least 6 characters";

  if (!validator.isPostalCode(data.zipCode, "US"))
    errors.zipCode = "Invalid ZIP code";

  if (!validator.isInt(data.age, { min: 0 })) errors.age = "Invalid age";

  if (Object.keys(errors).length > 0) {
    // 🔁 Loop through each error and show a toast
    Object.values(errors).forEach((errMsg) => {
      toast.error(errMsg);
    });

    return false
  }

    toast.success("No Errors, Form Data is valid");
    return true;

};

export const validateAdminFunction = (data, entityType) => {
  const errors = {};

  // Common fields for all entity types
  if(entityType === "admin"){
      if (validator.isEmpty(data.firstName || ""))
        errors.firstName = "First name is required";
    
      if (validator.isEmpty(data.lastName || ""))
        errors.lastName = "Last name is required";
    
      if (data.email && !validator.isEmail(data.email))
        errors.email = "Email is invalid";
    
      if (data.phoneNumber && !validator.isMobilePhone(data.phoneNumber, "en-US"))
        errors.phoneNumber = "Invalid phone number";
    
      if (validator.isEmpty(data.username || ""))
        errors.username = "Username is required";
    
      if (!validator.isLength(data.password || "", { min: 6 }))
        errors.password = "Password must be at least 6 characters";
  }

  // Entity-specific validation
  if (entityType === "doctor") {
    if (validator.isEmpty(data.credentials || ""))
      errors.credentials = "Credentials are required";
    if (validator.isEmpty(data.specialization || ""))
      errors.specialization = "Specialization is required";
  }

  if (entityType === "driver") {
    if (!data.driverImage)
      errors.driverImage = "Driver image is required";
    if (!data.licenseImage)
      errors.licenseImage = "License image is required";
  }

  console.log(entityType);
  if (entityType === "vehicle") {
    if (validator.isEmpty(data.make || ""))
      errors.make = "Make is required";
    if (validator.isEmpty(data.model || ""))
      errors.model = "Model is required";
    if (validator.isEmpty(data.licensePlate || ""))
      errors.licensePlate = "License plate is required";
    if (!data.vehicleImage)
      errors.vehicleImage = "Vehicle image is required";
  }
  console.log(Object.keys(errors));

  if (Object.keys(errors).length > 0) {
    Object.values(errors).forEach((errMsg) => toast.error(errMsg));
    return false;
  }

  toast.success("No Errors, Form Data is valid");
  return true;
};
