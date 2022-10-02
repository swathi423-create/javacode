package com.hexaware.clientprojectmanagement.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hexaware.clientprojectmanagement.model.Project;


@Repository
public interface ProjectDao extends JpaRepository<Project,Integer>{

}

	


