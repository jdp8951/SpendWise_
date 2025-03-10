package com.infosys.expenseManagementApplication.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

import com.infosys.expenseManagementApplication.bean.Customer;

public interface CustomerRepository extends JpaRepository<Customer, String> {

    @Query("select max(customerId) from Customer")
    public String getMaxCustomerId();

    @Query("select a from Customer a where a.current='true'")
	public List<Customer> getCurrentCustomers();
}
