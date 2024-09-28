import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component"; // Utilisation de react-data-table-component

export default function EmployeeTable() {
  const employees = useSelector((state) => state.employees); // Récupération des employés depuis Redux
  const [search, setSearch] = useState(""); // État pour la valeur de recherche

  // Configuration des colonnes pour react-data-table
  const columns = [
    {
      name: "First Name",
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (row) => row.lastName,
      sortable: true,
    },
    {
      name: "Date of Birth",
      selector: (row) => new Date(row.dateOfBirth).toLocaleDateString(),
      sortable: true,
    },
    {
      name: "Start Date",
      selector: (row) => new Date(row.startDate).toLocaleDateString(),
      sortable: true,
    },
    {
      name: "Street",
      selector: (row) => row.street,
      sortable: true,
    },
    {
      name: "City",
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: "State",
      selector: (row) => row.state,
      sortable: true,
    },
    {
      name: "Department",
      selector: (row) => row.department,
      sortable: true,
    },
  ];

  // Filtrer les employés en fonction de la recherche
  const filteredEmployees = employees.filter((employee) => {
    return (
      employee.firstName.toLowerCase().includes(search.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(search.toLowerCase()) ||
      employee.department.toLowerCase().includes(search.toLowerCase()) ||
      employee.state.toLowerCase().includes(search.toLowerCase()) ||
      employee.city.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="employee-table">
      <h2>Employee List</h2>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px", width: "100%" }}
      />
      <DataTable
        columns={columns}
        data={filteredEmployees} // Données filtrées
        pagination // Pagination activée
        highlightOnHover // Surlignage au survol
        striped // Lignes alternées
      />
      <Link to="/" className="back-button">
        Back
      </Link>
    </div>
  );
}
