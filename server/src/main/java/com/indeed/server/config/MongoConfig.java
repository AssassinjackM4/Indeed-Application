package com.indeed.server.config;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.data.mongodb.core.MongoTemplate;

@Configuration
public class MongoConfig {

    @Primary
    @Bean
    public MongoClient mongoClient() {
        return MongoClients.create(
                "mongodb+srv://user:mongoindeed@indeed-application.2cnjzm4.mongodb.net/?retryWrites=true&w=majority"
        );
    }

    @Primary
    @Bean
    public MongoTemplate mongoTemplate(MongoClient mongoClient) {
        return new MongoTemplate(mongoClient, "Indeed-Application");
    }
}
