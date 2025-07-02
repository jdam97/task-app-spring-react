package com.jdam.task_api.service;

import com.jdam.task_api.dto.task.TaskReq;
import com.jdam.task_api.dto.task.TaskRes;
import com.jdam.task_api.exception.TaskNotFoundException;
import com.jdam.task_api.mapper.TaskMapper;
import com.jdam.task_api.model.Task;
import com.jdam.task_api.repo.ITaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Map;

@Service
public class TaskService implements ITaskService{
    //inyeccion de dependencias
    @Autowired
    private ITaskRepository taskRepository;

    //Envia las tareas filtradas
    //DTO
    @Override
    public List<TaskRes> getTask(Boolean done) {
        if(done==null){
            return getAllTasks();
        }else {
            return getTaskByDone(done);
        }
    }
    //Devuelve una lista de todas las tareas
    @Override
    public List<TaskRes> getAllTasks() {
        List<Task> taskList= taskRepository.findAll();
        List<TaskRes> allTask = taskList.stream().map(TaskMapper::toDto).toList();
        return allTask;
    }
    //Devuelve una lista de todas las tareas filtradas
    @Override
    public List<TaskRes> getTaskByDone(Boolean done) {
        List<Task> taskList = taskRepository.findByDone(done);
        List<TaskRes> allFindTasks = taskList.stream().map(TaskMapper::toDto).toList();
        return allFindTasks;
    }
    //Buscar por id
    //DTO
    @Override
    public TaskRes searchTaskById(Integer idTask) {
        Task task = taskRepository.findById(idTask)
                .orElseThrow(()-> new TaskNotFoundException("Tarea con ID "+idTask+" No encontrada"));
        TaskRes taskFinded = TaskMapper.toDto(task);
        return taskFinded;
    }

    //Buscar por titulo
    //DTO
    @Override
    public List<TaskRes> searchTaskByTitle(String title) {
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
    public TaskRes deleteTask(Integer idTask) {
        Task task = taskRepository.findById(idTask).
                orElseThrow(()-> new TaskNotFoundException("Tarea con ID "+idTask+" No encontrada"));
        taskRepository.delete(task);
        return TaskMapper.toDto(task);
    }

    //Editar tarea
    //DTO
    @Override
    public TaskRes updateTask(Integer idTask, TaskReq req) {
       Task task = taskRepository.findById(idTask)
               .orElseThrow(()->new TaskNotFoundException("Tarea con ID "+idTask+" No encontrada"));
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
        Task task = taskRepository.findById(idTask).orElseThrow(()->new TaskNotFoundException("Tarea con ID "+idTask+" No encontrada"));
        task.setDone(done);
        TaskRes taskRes = TaskMapper.toDto(taskRepository.save(task));
        return taskRes;
    }

    //Counts
    @Override
    public Map<String, Long> CountTasks() {
        long countTotalTasks = taskRepository.count();
        long countPendingTasks = taskRepository.countByDone(false);
        long countCompletedTasks = taskRepository.countByDone(true);

        Map<String,Long> stats = Map.of(
                "total", countTotalTasks,
                "pending", countPendingTasks,
                "completed",countCompletedTasks
        );
        return stats;
    }
}
