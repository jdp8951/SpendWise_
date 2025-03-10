import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../LoginView.css";
import { updateCategory, displayCategoryById } from "../../Services/CategoryService";

const CategoryUpdate = () => {
  const [category, setCategory] = useState({
    categoryId: 0,
    categoryName: "",
    description: ""
  });

  let navigate = useNavigate();
  let { id } = useParams(); 

  useEffect(() => {
    if (id) {
      displayCategoryById(id)
        .then((response) => {
          setCategory(response.data); 
        })
        .catch((error) => console.error("Error fetching category:", error));
    }
  }, [id]);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setCategory((prev) => ({ ...prev, [name]: value }));
  };

  const categoryUpdate = (event) => {
    event.preventDefault();
    updateCategory(category)
      .then(() => {
        alert("Category Updated Successfully");
        navigate("/admin-category-list");
      })
      .catch((error) => console.error("Error updating category:", error));
  };

  return (
    <div>
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-12 offset-md-3 offset-md-3">
            <div className="card-body">
              <h2 className="text-center">
                <u>Update Category</u>
              </h2>
              <br />
              <form>
                <div className="form-group">
                  <label>Category Id: </label>
                  <input name="categoryId" className="form-control" value={category.categoryId} readOnly />
                </div>
                <div className="form-group">
                  <label>Category Name: </label>
                  <input
                    placeholder="Category Name"
                    name="categoryName"
                    className="form-control"
                    value={category.categoryName}
                    onChange={onChangeHandler}
                  />
                </div>
                <div className="form-group">
                  <label>Category Description: </label>
                  <input
                    placeholder="Category Description"
                    name="description"
                    className="form-control"
                    value={category.description}
                    onChange={onChangeHandler}
                  />
                </div>
                <button className="btn btn-success" onClick={categoryUpdate}>
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryUpdate;