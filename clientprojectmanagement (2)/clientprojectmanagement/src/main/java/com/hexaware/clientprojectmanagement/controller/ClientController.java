package com.hexaware.clientprojectmanagement.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hexaware.clientprojectmanagement.model.Client;
import com.hexaware.clientprojectmanagement.model.Project;
import com.hexaware.clientprojectmanagement.service.ClientService;

@RestController
@CrossOrigin
public class ClientController {
	
		@Autowired
		private ClientService clientService;
		
		@PostMapping(path="/add-project",consumes="application/json")
		public Project createProject(@RequestBody Project project) {
			return clientService.createProject(project);
		}
		
		@GetMapping("/get-projects")
		public List<Project> getProjects () {
			return clientService.getProjects();
		}
		
		@PutMapping("/update-project")
		public Project updateProject(@RequestBody Project project) {
			return clientService.updateProject(project);
		}
		
		@DeleteMapping("/delete-project/{project_code}")
		public boolean deleteProject(@PathVariable("project_code")Integer project_code) {
			clientService.deleteProject(project_code);
			return true;
		}
		
		
		
		@PostMapping("/login")
		public Client login(@RequestParam("userid")String userId,@RequestParam("password")String password,HttpServletRequest request) {
			return clientService.login(userId, password);	
		}
	}



