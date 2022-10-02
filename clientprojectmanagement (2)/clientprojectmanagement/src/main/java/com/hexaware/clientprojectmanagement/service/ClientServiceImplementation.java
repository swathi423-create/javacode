package com.hexaware.clientprojectmanagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexaware.clientprojectmanagement.dao.ClientDao;
import com.hexaware.clientprojectmanagement.dao.ProjectDao;
import com.hexaware.clientprojectmanagement.model.Client;
import com.hexaware.clientprojectmanagement.model.Project;
@Service
public class ClientServiceImplementation implements ClientService{

	@Autowired
	private ProjectDao projectDao;
	@Autowired
	private ClientDao clientDao;
	
//	public ClientServiceImplementation(ProjectDao projectDao, ClientDao clientDao) {
//		super();
//		this.projectDao = projectDao;
//		this.clientDao = clientDao;
//	}

	@Override
	public Project createProject(Project project) {
		return projectDao.save(project);
	}
	
	@Override
	public List<Project> getProjects() {
		return projectDao.findAll();
	}
	
	@Override
	public Project updateProject(Project project) {
		return projectDao.save(project);
	}
	
	@Override
	public boolean deleteProject(Integer project_code){
	    projectDao.deleteById(project_code);
		return true;
	}

	@Override
	public Client getProfile(Integer id) {
		return clientDao.findById(id).get();
	}

	

	@Override
	public Client login(String userId, String password) {
		List<Client> clientList=clientDao.login(userId,password);
		if(clientList.size()>0)
			return clientList.get(0);
		return null;
	}

}


