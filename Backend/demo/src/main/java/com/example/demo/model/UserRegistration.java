package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="user_table")
public class UserRegistration {
 
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="user_id")
	private int id;
	@Column(name="user_username",length=50)
	private String username;
	@Column(name="user_password",length=50)
	private String upassword;
	@Column(name="user_fname",length=50)
	private String fname;
	@Column(name="user_email",length=50,unique = true)
	private String uemail;
	@Column(name="user_phone",length=50)
	private String uphone;
	@Column(name="user_country",length=50)
	private String ucountry;
	@Column(name="user_address",length=200)
	private String uaddress;
	@Column(name="user_gender")
	private boolean gender;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getUemail() {
		return uemail;
	}
	public void setUemail(String uemail) {
		this.uemail = uemail;
	}
	public String getUphone() {
		return uphone;
	}
	public void setUphone(String uphone) {
		this.uphone = uphone;
	}
	public String getUcountry() {
		return ucountry;
	}
	public void setUcountry(String ucountry) {
		this.ucountry = ucountry;
	}
	public String getUaddress() {
		return uaddress;
	}
	public void setUaddress(String uaddress) {
		this.uaddress = uaddress;
	}
	public boolean isGender() {
		return gender;
	}
	public void setGender(boolean gender) {
		this.gender = gender;
	}
	public String getUpassword() {
		return upassword;
	}
	public void setUpassword(String upassword) {
		this.upassword = upassword;
	}
	@Override
	public String toString() {
		return "Register [id=" + id + ", username=" + username + ", upassword=" + upassword + ", fname=" + fname
				+ ", uemail=" + uemail + ", uphone=" + uphone + ", ucountry=" + ucountry + ", uaddress=" + uaddress
				+ ", gender=" + gender + "]";
	}
}