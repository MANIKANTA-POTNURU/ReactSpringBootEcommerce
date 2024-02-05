package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Category;
import com.example.demo.model.Product;
import com.example.demo.model.UserRegistration;
import com.example.demo.service.UserService;

@CrossOrigin(origins = "http://localhost:1984")
@RestController
public class Usercontroller {

	
	@Autowired
	private UserService userservice;
	
	@GetMapping("/")
	public String demo()
	{
		return "Checking";
	}
	
	@PostMapping("adduser")
	public String adduser(@RequestBody UserRegistration user)
	{
		return userservice.adduser(user);
	}
	@PostMapping("addcategory")
	public String addcategory(@RequestBody Category category)
	{
		return userservice.addcategory(category);
	}
	@PostMapping("addproduct")
	public String addproduct(@RequestBody Product product)
	{
		return userservice.addproduct(product);
	}
	
	@GetMapping("/viewallproducts")
	public List<Product> viewallproducts()
	{
		return userservice.viewallproducts();
	}
	@GetMapping("/viewallcategories")
	public List<Category> viewallcategories()
	{
		return userservice.viewallcategories();
	}
	@GetMapping("checkuserlogin")
	   public UserRegistration checkemplogin(@RequestParam("email") String email)
	   {
		  
		UserRegistration user=userservice.checkuserlogin(email);
		  System.out.println(user);
		  return user;  
	   }
	
	@PutMapping("/{catid}/product/{prodid}")
    public Category assignProjectToEmployee(@PathVariable int catid,@PathVariable int prodid)
	{
        return userservice.assignproductsforcategory(catid, prodid);
    }
	@GetMapping("viewproductsbycategory")
	public Category viewproductsbycategory(@RequestParam("catid") int cid)
	{
		return userservice.viewcategoryproductsbyid(cid);
	}
	@GetMapping("viewproduct")
	public Product viewproductbyid(@RequestParam("prodid") int pid)
	{
		return userservice.viewproductbyid(pid);
	}
	
}
