package com.example.demo.service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Category;
import com.example.demo.model.Product;
import com.example.demo.model.UserRegistration;
import com.example.demo.repository.CategoryRepo;
import com.example.demo.repository.ProductRepo;
import com.example.demo.repository.UserRegistrationRepo;

@Service
public class UserserviceImpl implements UserService {
	@Autowired
	private UserRegistrationRepo registrationRepo;
	
	@Autowired
	private CategoryRepo categoryRepo;
	
	@Autowired
	private ProductRepo productRepo;
	

public String adduser(UserRegistration user)
{
	registrationRepo.save(user);
	return "User Registered successfully";
}

@Override
public UserRegistration checkuserlogin(String email) {
	Optional<UserRegistration> u=registrationRepo.findByEmail(email);
	if(u.isPresent())
	{
		UserRegistration user=u.get();
		return user;
	}
	else
	{
		return null;
	}
}

@Override
public String addcategory(Category category) {
	categoryRepo.save(category);
	return "Category Added Successfully";
}

@Override
public String addproduct(Product product) {
	productRepo.save(product);
	return "Product Added Successfully";
}

public Category assignproductsforcategory(int categoryid, int productid) 
{
    Set<Product> productsSet = null;
    Category category = categoryRepo.findById(categoryid).get();
    Product product = productRepo.findById(productid).get();
    productsSet =  category.getRelatedproducts();
    productsSet.add(product);
    category.setRelatedproducts(productsSet);
    return categoryRepo.save(category);
}

@Override
public List<Product> viewallproducts() {
	List<Product> productlist = (List<Product>) productRepo.findAll();
    return productlist;
}

@Override
public List<Category> viewallcategories() {
	List<Category> categorylist = (List<Category>) categoryRepo.findAll();
    return categorylist;
}

@Override
public Category viewcategoryproductsbyid(int id) {
	return categoryRepo.findById(id).get();
}

@Override
public Product viewproductbyid(int id) {
	return productRepo.findById(id).get();
}
	
}
