package com.infosys.expenseManagementApplication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.infosys.expenseManagementApplication.bean.Category;
import com.infosys.expenseManagementApplication.dao.CategoryDao;

@RestController
@RequestMapping("/exp-mng/")
@CrossOrigin(origins = "http://localhost:5656")
public class CategoryController {

    @Autowired
    private CategoryDao categoryDao;

    @GetMapping("/category")
    public List<Category> displayAllCategories() {
        return categoryDao.getAllCategories();
    }

    @PostMapping("/category")
    public void saveCategory(@RequestBody Category category) {
        categoryDao.save(category);
    }

    @PutMapping("/category")
    public void updateCategory(@RequestBody Category category) {
        categoryDao.save(category);
    }

    @GetMapping("/category/{id}")
    public Category displayCategoryById(@PathVariable Long id) {
        return categoryDao.getCategoryById(id);
    }

    @DeleteMapping("/category/{id}")
    public void deleteCategoryById(@PathVariable Long id) {
        categoryDao.deleteCategoryById(id);
    }

    @GetMapping("/category-id")
    public Long generateCategoryId() {
        return categoryDao.generateCategoryId();
    }

}

