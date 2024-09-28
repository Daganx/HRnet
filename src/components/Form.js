import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addEmployee } from "../store/employeeSlice"; // Action Redux
import states from "../data/states.json";
import departments from "../data/department.json";
import Modal from "modal-package-daganx";

export default function Form() {
  const dispatch = useDispatch();
  // États pour gérer les valeurs du formulaire
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [startDate, setStartDate] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [department, setDepartment] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const employeeData = {
      firstName,
      lastName,
      dateOfBirth,
      startDate,
      street,
      city,
      state,
      department,
    };

    // Dispatch pour ajouter l'employé
    dispatch(addEmployee(employeeData));

    // Réinitialise le formulaire
    setFirstName("");
    setLastName("");
    setDateOfBirth("");
    setStartDate("");
    setStreet("");
    setCity("");
    setState("");
    setDepartment("");
    openModal();
  };

  return (
    <>
      <h1 className="title">HRnet</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input
            type="date"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="state">State</label>
          <select
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          >
            <option value="">Select State</option>
            {states.map((state, index) => (
              <option key={index} value={state.abbreviation}>
                {state.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="department">Department</label>
          <select
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          >
            <option value="">Select Department</option>
            {departments.map((dept, index) => (
              <option key={index} value={dept.department}>
                {dept.department}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>

      <Link to="employee-list" className="employee-link">
        View Employee
      </Link>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Employee Added" />
    </>
  );
}
