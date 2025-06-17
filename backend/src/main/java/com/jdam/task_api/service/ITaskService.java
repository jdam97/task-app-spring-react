package com.jdam.task_api.service;
import com.jdam.task_api.model.Task;
import java.util.List;

public interface ITaskService {
    public List<Task> taskList();
    public Task searchTaskById(Integer idTask);
    public List<Task> searchTask(String title);
    public Task createTask(Task task);
    public void deleteTask(Integer idTask);
    public Task updateTask(Integer idTask,Task detailTask);

    Task doneTask(Integer idTask, boolean done);
}
