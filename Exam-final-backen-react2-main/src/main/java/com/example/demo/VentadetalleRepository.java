package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel =  "ventadetalles", path = "ventadetalles")
public interface VentadetalleRepository  extends CrudRepository<Ventadetalle, Long> {
    
}
