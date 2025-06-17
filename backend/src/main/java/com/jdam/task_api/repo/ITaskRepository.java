package com.jdam.task_api.repo;

import com.jdam.task_api.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ITaskRepository extends JpaRepository<Task,Integer> {
    public List<Task> findByTitleContainingIgnoreCase(String title);
}
