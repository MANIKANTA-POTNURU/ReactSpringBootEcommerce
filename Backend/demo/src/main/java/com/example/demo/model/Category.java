package com.example.demo.model;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Data
@Table(name="category_table")
public class Category 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="category_id")
	private int id;
	@Column(name="category_type",length=50)
	private String categorytype;
	private String categoryimageurl;
	
	@ManyToMany
    @JoinTable(name = "category_product",
            joinColumns = @JoinColumn(name = "category_id"),
            inverseJoinColumns = @JoinColumn(name = "product_id")
    )
    private Set<Product> relatedproducts = new HashSet<>();

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCategorytype() {
		return categorytype;
	}

	public void setCategorytype(String categorytype) {
		this.categorytype = categorytype;
	}

	public String getCategoryimageurl() {
		return categoryimageurl;
	}

	public void setCategoryimageurl(String categoryimageurl) {
		this.categoryimageurl = categoryimageurl;
	}

	public Set<Product> getRelatedproducts() {
		return relatedproducts;
	}

	public void setRelatedproducts(Set<Product> relatedproducts) {
		this.relatedproducts = relatedproducts;
	}

	
}
