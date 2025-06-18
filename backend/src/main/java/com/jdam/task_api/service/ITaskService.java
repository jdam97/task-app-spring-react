package com.jdam.task_api.service;
import com.jdam.task_api.dto.task.TaskReq;
import com.jdam.task_api.dto.task.TaskRes;
import com.jdam.task_api.model.Task;
import java.util.List;

public interface ITaskService {
    public List<TaskRes> taskList();
    public TaskRes searchTaskById(Integer idTask);
    public List<TaskRes> searchTask(String title);
    public TaskRes createTask(TaskReq dto);
    public void deleteTask(Integer idTask);
    public TaskRes updateTask(Integer idTask,TaskReq req);
    public TaskRes doneTask(Integer idTask, boolean done);
}
