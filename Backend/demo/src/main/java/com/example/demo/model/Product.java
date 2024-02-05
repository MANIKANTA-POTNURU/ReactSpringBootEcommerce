package com.example.demo.model;

import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "product_table")
public class Product
{
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int productId;
    private String productname;
    private String description;
    private String produrl;
    
    @JsonIgnore
    @ManyToMany(mappedBy = "relatedproducts")
    private Set<Category> categoryset = new HashSet<>();

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public String getProductname() {
		return productname;
	}

	public void setProductname(String productname) {
		this.productname = productname;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getProdurl() {
		return produrl;
	}

	public void setProdurl(String produrl) {
		this.produrl = produrl;
	}

	public Set<Category> getCategoryset() {
		return categoryset;
	}

	public void setCategoryset(Set<Category> categoryset) {
		this.categoryset = categoryset;
	}
}