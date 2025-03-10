import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from '../LoginComponent/logo.jpg'; // Import the logo image

const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column p-3"
      style={{
        width: "250px",
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        minHeight: "100vh",
        borderRight: "2px solid rgba(255, 255, 255, 0.3)",
      }}
    >
      <h4 className="text-white text-center mb-4">
        <div style={styles.logoContainer}>
          <img src={logo} alt="SpendWise Logo" style={styles.logo} />
          <h1 style={styles.logoText}>SpendWise</h1>
        </div>
      </h4>
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink to="/CustomerMenu" className="nav-link text-white active bg-primary rounded">
            Expenses
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/category" className="nav-link text-white">
            Category
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/reports" className="nav-link text-white">
            Reports
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

const CategoryForm = ({ fetchCategories }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !description) {
      alert("Both fields are required!");
      return;
    }

    alert("Category Added Successfully!");

    try {
      await axios.post("http://localhost:8080/api/categories", { name, description });
      fetchCategories();
      setName("");
      setDescription("");
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  return (
    <div
      className="card p-4 mt-3"
      style={{
        background: "rgba(0, 0, 50, 0.5)",
        backdropFilter: "blur(15px)",
        borderRadius: "10px",
        boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
      }}
    >
      <h2 className="text-lg font-semibold mb-4 text-white">Add Category</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name*"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control bg-transparent text-white border-light mb-3"
          style={{ color: "#fff" }}
        />
        <textarea
          placeholder="Description*"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-control bg-transparent text-white border-light mb-3"
          style={{ color: "#fff" }}
        />
        <button
          type="submit"
          className="btn w-100 rounded-pill"
          style={{
            background: "linear-gradient(to right, #00c6ff, #0072ff)",
            color: "#fff",
            fontWeight: "bold",
            boxShadow: "0 0 15px #00c6ff",
          }}
        >
          Create
        </button>
      </form>
    </div>
  );
};

const CategoryTable = ({ categories, handleDelete }) => {
  const sampleCategories = [
    { id: 1, name: "Food", description: "Expenses on food" },
    { id: 2, name: "Transport", description: "Expenses on transport" },
    { id: 3, name: "Shopping", description: "Expenses on shopping" },
  ];

  const displayCategories = categories.length > 0 ? categories : sampleCategories;

  return (
    <div
      className="card p-4 mt-3"
      style={{
        background: "rgba(0, 0, 50, 0.5)",
        backdropFilter: "blur(15px)",
        borderRadius: "10px",
        boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
      }}
    >
      <table className="table table-hover text-white">
        <thead>
          <tr style={{ backgroundColor: "#007bff" }}>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {displayCategories.map((category) => (
            <tr key={category.id}>
              <td>{category.name}</td>
              <td>{category.description}</td>
              <td>
                <button className="btn btn-sm btn-primary me-2"><FaEdit /></button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(category.id)}><FaTrash /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/categories");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/categories/${id}`);
      fetchCategories();
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  return (
    <div
      className="d-flex"
      style={{
        backgroundImage: "url('/Background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        color: "#fff",
      }}
    >
      <Sidebar />
      <div className="container-fluid p-4">
        <h2 className="text-center" style={{ textShadow: "0 0 10px #00ffff" }}>
          <b>🏦 Expense Management System</b>
        </h2>
        <CategoryForm fetchCategories={fetchCategories} />
        <CategoryTable categories={categories} handleDelete={handleDelete} />
      </div>
    </div>
  );
};

const styles = {
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    borderBottom: '1px solid #e0e0e0',
    backgroundColor: '#f5f5f5',
  },
  logo: {
    height: '40px',
    width: '40px',
  },
  logoText: {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginLeft: '10px',
    color: '#333',
  }
};

export default CategoryPage;