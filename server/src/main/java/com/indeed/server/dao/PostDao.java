package com.indeed.server.dao;

import com.indeed.server.model.PostModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostDao extends MongoRepository<PostModel, String> {

}


