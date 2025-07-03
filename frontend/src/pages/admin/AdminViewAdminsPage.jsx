import React, { useState } from "react";
import styled from "styled-components";
import { FormTitle, SubmitButton } from "../../styles/patient/patientFormStyle";

const AdminTable = styled.table`
  width: 100%;
  margin: 2rem auto;
  border-collapse: collapse;
  font-family: "Montserrat", sans-serif;
  max-width: 900px;
  background-color: #f5f5f5;
  box-shadow: 0 0 10px rgba(0, 31, 63, 0.2);
`;

const TableHeader = styled.th`
  background-color: #001f3f;
  color: white;
  padding: 1rem;
  text-align: left;
`;

const TableData = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #ccc;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const TableWrapper = styled.div`
  max-height: 480px; /* Adjust based on your row height, ~80px × 6 rows */
  overflow-y: auto;
  margin: 0 auto;
  max-width: 900px;

  /* Optional: make the header sticky */
  thead th {
    position: sticky;
    top: 0;
    background-color: #001f3f;
    z-index: 1;
  }
`;

const ActionButton = styled.button`
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  color: white;

  ${({ type }) =>
    type === "edit"
      ? `background-color: #0074D9;`
      : `background-color: #FF851B;`}

  &:hover {
    opacity: 0.9;
  }
`;

export const AdminViewAdminsPage = () => {
  // Dummy data
  const [admins, setAdmins] = useState([
    {
      id: 1,
      firstName: "Alice",
      lastName: "Smith",
      phoneNumber: "123-456-7890",
      email: "alice@example.com",
      isActive: true,
    },
    {
      id: 2,
      firstName: "Bob",
      lastName: "Johnson",
      phoneNumber: "987-654-3210",
      email: "bob@example.com",
      isActive: true,
    },
  ]);

  // Commented out the data fetching effect
  /*
  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await fetch('/api/admins');
        const data = await response.json();
        setAdmins(data);
      } catch (error) {
        console.error('Error fetching admin list:', error);
      }
    };

    fetchAdmins();
  }, []);
  */

  const handleDeactivate = (adminId) => {
    console.log("Deactivate admin with ID:", adminId);
    setAdmins((prev) =>
      prev.map((admin) =>
        admin.id === adminId ? { ...admin, isActive: false } : admin
      )
    );
  };

  const handleEdit = (adminId) => {
    console.log("Edit admin with ID:", adminId);
  };

  return (
    <div>
      <FormTitle>Admin List</FormTitle>

      <TableWrapper>
        <AdminTable>
          <thead>
            <tr>
              <TableHeader>First Name</TableHeader>
              <TableHeader>Last Name</TableHeader>
              <TableHeader>Phone Number</TableHeader>
              <TableHeader>Email</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader>Actions</TableHeader>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin) => (
              <tr key={admin.id}>
                <TableData>{admin.firstName}</TableData>
                <TableData>{admin.lastName}</TableData>
                <TableData>{admin.phoneNumber}</TableData>
                <TableData>{admin.email}</TableData>
                <TableData>
                  {admin.isActive ? "Active" : "Deactivated"}
                </TableData>
                <TableData>
                  <ButtonGroup>
                    <ActionButton
                      type="edit"
                      onClick={() => handleEdit(admin.id)}
                    >
                      Edit
                    </ActionButton>
                    {admin.isActive && (
                      <ActionButton
                        type="deactivate"
                        onClick={() => handleDeactivate(admin.id)}
                      >
                        Deactivate
                      </ActionButton>
                    )}
                    <ActionButton
                      type="edit"
                      onClick={() => handleEdit(admin.id)}
                    >
                      Info
                    </ActionButton>
                  </ButtonGroup>
                </TableData>
              </tr>
            ))}
          </tbody>
        </AdminTable>
      </TableWrapper>

      <div style={{ maxWidth: "900px", margin: "2rem auto" }}>
        <SubmitButton onClick={() => console.log("Redirect to create admin")}>
          Add New Admin
        </SubmitButton>
      </div>
    </div>
  );
};
