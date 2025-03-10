import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LoginPage from "./Components/LoginComponent/LoginPage";
import RegisterUser from "./Components/LoginComponent/RegisterUser";
import AdminMenu from "./Components/LoginComponent/AdminMenu";
import CustomerMenu from "./Components/LoginComponent/CustomerMenu";
import CategoryPage from "./Components/LoginComponent/CategoryPage";
import ReportPage from "./Components/LoginComponent/ReportPage";
import CategoryAddition from "./Components/CategoryComponent/CategoryAddition";
import AdminCategoryList from "./Components/CategoryComponent/AdminCategoryList";
import CustomerCategoryList from "./Components/CategoryComponent/CustomerCategoryList";
import CategoryUpdate from "./Components/CategoryComponent/CategoryUpdate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path='/Register' element={<RegisterUser />} />
          <Route path='/AdminMenu' element={<AdminMenu />} />
          <Route path='/CustomerMenu' element={<CustomerMenu />} />
          <Route path='/category-add' element={<CategoryAddition />} />
          <Route path='/admin-category-list' element={<AdminCategoryList />} />
          <Route path="/update-category/:id" element={<CategoryUpdate />} />
          <Route path='/customer-category-list' element={<CustomerCategoryList />} />


          <Route path='/category' element={<CategoryPage />} />
          <Route path='/reports' element={<ReportPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;