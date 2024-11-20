package edu.ucsb.cs156.rec.repositories;

import edu.ucsb.cs156.rec.entities.RecommendationRequest;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * The UCSBDateRepository is a repository for UCSBDate entities.
 */

@Repository
public interface RecommendationRequestRepository extends CrudRepository<RecommendationRequest, Long> {
  
}