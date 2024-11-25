package edu.ucsb.cs156.rec.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

/**
 * This is a JPA entity that represents a RecommendationRequest, i.e. an entry
 * that comes from the UCSB API for academic calendar dates.
 */

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity(name = "recommendationrequest")
public class RecommendationRequest {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;

  @ManyToOne(fetch = FetchType.EAGER, optional = false)
  @JoinColumn(name = "user_id", nullable = false)
  private User professor;

  private String professorEmail;

  private String requesterName;
  private String recommendationTypes; //dropdown, may want to make this id from recommendationtypes (come back to)
  private String details;
  private String status;


  private LocalDate submissionDate;
  private LocalDate completionDate;

}