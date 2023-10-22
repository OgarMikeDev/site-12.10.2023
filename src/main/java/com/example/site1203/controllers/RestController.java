package com.example.site1203.controllers;

import com.example.site1203.model.Client;
import com.example.site1203.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;

@org.springframework.web.bind.annotation.RestController
public class RestController {
    Client currentClient;

    @Autowired
    private ClientRepository clientRepository;


    @PostMapping("/addClient/")
    public void addStudent(Client client) {
        System.out.println("Information about client :" + client + ".");
        if (client.getPassword().length() > 0) {
            currentClient = client;
            clientRepository.save(currentClient);
        }
    }
}
