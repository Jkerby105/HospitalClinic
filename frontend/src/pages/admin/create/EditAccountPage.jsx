import React, { useEffect, useState } from "react";
import {
  FormWrapper,
  FormTitle,
  InputGroup,
  Label,
  Input,
  Select,
  SubmitButton,
} from "../../../styles/admin/createAccountsStyle";
import { validateAdminFunction } from "../../../services/service";
import toast from "react-hot-toast";
import { useNavigate, useSearchParams, useParams } from "react-router";
import { AdminStore } from "../../../store/AdminStore";
import { AuthStore } from "../../../store/AuthStore";

export const EditAccountPage = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const { createAccount } = AuthStore();
  const {getOneAdmin} = AdminStore();

  const editRole = searchParams.get("role") || null;
//   const editId = searchParams.get("id");
const editId = useParams();
const id = editId.id || null;
console.log(editRole + " -------------------");
console.log(id + " -------------------");

  const [formData, setFormData] = useState({});
//   const [isLoading, setIsLoading] = useState(true);

  // 🔄 Load data on mount
  useEffect(() => {
    const fetchData = async () => {
    //   if (!editId.id) return;

      try {
        console.log("sending request to get data for ID:", id);
        const data = await getOneAdmin(id); // 👈 Fetch based on ID and role
        console.log("Fetched data:", data);
        console.log(data + " -------------------");
        if (!data) throw new Error("No data found");
        setFormData(data);
      } catch (err) {
        toast.error("Failed to fetch data.");
        navigate("/admin");
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateAdminFunction(formData, editRole);
    if (!isValid) {
      toast.error("Form is invalid, please check the fields.");
      return;
    }

    try {
      await createAccount(formData, editRole, true); // ✅ Use edit flag
      toast.success("Updated successfully!");
      navigate("/admin");
    } catch (error) {
      toast.error("Update failed.");
    }
  };

  const renderFields = () => {
    const input = (name, label, type = "text") => (
      <InputGroup>
        <Label>{label}</Label>
        <Input
          name={name}
          type={type}
          value={formData[name] || ""}
          onChange={handleChange}
        />
      </InputGroup>
    );

    switch (editRole) {
      case "admin":
      case "driver":
      case "doctor":
        return (
          <>
            {input("firstName", "First Name *")}
            {input("lastName", "Last Name *")}
            {input("phoneNumber", "Phone Number *")}
            {input("email", "Email *", "email")}
            {input("username", "Username *")}
            {input("password", "Password *", "password")}
            {editRole === "doctor" && (
              <>
                {input("credentials", "Credentials *")}
                {input("specialization", "Specialization *")}
              </>
            )}
            {editRole === "driver" && (
              <>
                <InputGroup>
                  <Label>Driver Image *</Label>
                  <Input
                    name="driverImage"
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                  />
                </InputGroup>
                <InputGroup>
                  <Label>License Image *</Label>
                  <Input
                    name="licenseImage"
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                  />
                </InputGroup>
              </>
            )}
          </>
        );
      case "vehicle":
        return (
          <>
            {input("make", "Make *")}
            {input("model", "Model *")}
            {input("licensePlate", "License Plate *")}
            <InputGroup>
              <Label>Vehicle Image *</Label>
              <Input
                name="vehicleImage"
                type="file"
                accept="image/*"
                onChange={handleChange}
              />
            </InputGroup>
          </>
        );
      default:
        return null;
    }
  };

//   if (isLoading) return <p>Loading...</p>;

  return (
    // <div>test</div>
    <FormWrapper onSubmit={handleSubmit}>
      <FormTitle>Edit {editRole.charAt(0).toUpperCase() + editRole.slice(1)}</FormTitle>
      {renderFields()}
      <SubmitButton type="submit">Update</SubmitButton>
    </FormWrapper>
  );
};

