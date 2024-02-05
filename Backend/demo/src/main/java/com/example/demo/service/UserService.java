package com.example.demo.service;

import java.util.List;

import com.example.demo.model.Category;
import com.example.demo.model.Product;
import com.example.demo.model.UserRegistration;

public interface UserService {
	
	public String adduser(UserRegistration user);
	public UserRegistration checkuserlogin(String email);
	
	public String addcategory(Category category);
	public String addproduct(Product product);
	
	public Category assignproductsforcategory(int categoryid, int productid);
	public List<Product> viewallproducts();
	public List<Category> viewallcategories();
	
	public Category viewcategoryproductsbyid(int id);
	public Product viewproductbyid(int id);
	
	
	
}
