package com.jdam.task_api.service;
import com.jdam.task_api.dto.task.TaskReq;
import com.jdam.task_api.dto.task.TaskRes;
import com.jdam.task_api.model.Task;
import java.util.List;
import java.util.Map;

public interface ITaskService {
    public List<TaskRes> getTask(Boolean done);
    public List<TaskRes> getTaskByDone(Boolean done);
    public List<TaskRes> getAllTasks();
    public TaskRes searchTaskById(Integer idTask);
    public List<TaskRes> searchTaskByTitle(String title);
    public TaskRes createTask(TaskReq dto);
    public TaskRes deleteTask(Integer idTask);
    public TaskRes updateTask(Integer idTask,TaskReq req);
    public TaskRes doneTask(Integer idTask, boolean done);
    public Map<String,Long> CountTasks();
}
