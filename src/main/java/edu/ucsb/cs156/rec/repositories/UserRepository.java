package edu.ucsb.cs156.rec.repositories;

import edu.ucsb.cs156.rec.entities.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * The UserRepository is a repository for User entities.
 */
@Repository
public interface UserRepository extends CrudRepository<User, Long> {
  /**
   * This method returns a User entity with a given email.
   * @param email email address of the user
   * @return Optional of User (empty if not found)
   */
  Optional<User> findByEmail(String email);
  Iterable<User> findByProfessor(boolean professor);

}