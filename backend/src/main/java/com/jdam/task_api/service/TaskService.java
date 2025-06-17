package com.jdam.task_api.service;

import com.jdam.task_api.model.Task;
import com.jdam.task_api.repo.ITaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TaskService implements ITaskService{
    //inyeccion de dependencias
    @Autowired
    private ITaskRepository taskRepository;

    //Devuelve una lista de todas las tareas
    @Override
    public List<Task> taskList() {
        return taskRepository.findAll();
    }

    //Buscar por id
    @Override
    public Task searchTaskById(Integer idTask) {
        Task task = taskRepository.findById(idTask).orElseThrow(()->new RuntimeException("Task not found"));
        return task;
    }

    //Buscar por titulo
    @Override
    public List<Task> searchTask(String title) {
        return taskRepository.findByTitleContainingIgnoreCase(title);
    }

    //Crear tarea
    @Override
    public Task createTask(Task task) {
        return taskRepository.save(task);
    }
    // Borrar tarea
    @Override
    public void deleteTask(Integer idTask) {
        taskRepository.deleteById(idTask);
    }

    //Editar tarea
    @Override
    public Task updateTask(Integer idTask, Task detailsTask) {
        Task taskModified = taskRepository.findById(idTask).orElseThrow(()->new RuntimeException("Task not found"));
        taskModified.setDone(detailsTask.getDone());
        taskModified.setDate(detailsTask.getDate());
        taskModified.setTitle(detailsTask.getTitle());
        return taskRepository.save(taskModified);
    }

    //Cambiar estado a hecho
    @Override
    public Task doneTask(Integer idTask, boolean done) {
        Task task = taskRepository.findById(idTask).orElseThrow(()->new RuntimeException("Task not found"));
        task.setDone(done);
        return taskRepository.save(task);
    }
}
