package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.model.UserRegistration;

@Repository
public interface UserRegistrationRepo extends JpaRepository<UserRegistration, Integer> 
{
	@Query("SELECT u FROM UserRegistration u WHERE u.uemail = :email")
	Optional<UserRegistration> findByEmail(@Param("email") String email);
	
}
