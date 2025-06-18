package com.jdam.task_api.service;

import com.jdam.task_api.dto.task.TaskReq;
import com.jdam.task_api.dto.task.TaskRes;
import com.jdam.task_api.mapper.TaskMapper;
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
    //DTO
    @Override
    public List<TaskRes> taskList() {
        List<Task> taskList= taskRepository.findAll();
        List<TaskRes> allTask = taskList.stream().map(TaskMapper::toDto).toList();
        return allTask;
    }

    //Buscar por id
    //DTO
    @Override
    public TaskRes searchTaskById(Integer idTask) {
        Task task = taskRepository.findById(idTask).orElseThrow(()->new RuntimeException("Task not found"));
        TaskRes alltask = TaskMapper.toDto(task);
        return alltask;
    }

    //Buscar por titulo
    //DTO
    @Override
    public List<TaskRes> searchTask(String title) {
         List<Task> task = taskRepository.findByTitleContainingIgnoreCase(title);
        List<TaskRes> taskResList  = task.stream().map(TaskMapper::toDto).toList();
        return taskResList ;
    }

    //Crear tarea
    //DTO
    @Override
    public TaskRes createTask(TaskReq dto) {
        Task task = TaskMapper.toEntity(dto);
        task.setDone(false);//por defecto false
        Task saved = taskRepository.save(task);
        return TaskMapper.toDto(saved);
    }

    // Borrar tarea
    @Override
    public void deleteTask(Integer idTask) {
        taskRepository.deleteById(idTask);
    }

    //Editar tarea
    //DTO
    @Override
    public TaskRes updateTask(Integer idTask, TaskReq req) {
       Task task = taskRepository.findById(idTask).orElseThrow(()->new RuntimeException("Task not found"));
       task.setTitle(req.getTitle());
       task.setDescription(req.getDescription());
       task.setDate(req.getDate());
       Task updateTask = taskRepository.save(task);
       return TaskMapper.toDto(updateTask);
    }

    //Cambiar estado a hecho
    //DTO
    @Override
    public TaskRes doneTask(Integer idTask, boolean done) {
        Task task = taskRepository.findById(idTask).orElseThrow(()->new RuntimeException("Task not found"));
        task.setDone(done);
        TaskRes taskRes = TaskMapper.toDto(taskRepository.save(task));
        return taskRes;
    }
}
