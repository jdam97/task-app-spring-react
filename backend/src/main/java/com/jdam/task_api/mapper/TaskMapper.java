package com.jdam.task_api.mapper;

import com.jdam.task_api.dto.task.TaskReq;
import com.jdam.task_api.dto.task.TaskRes;
import com.jdam.task_api.model.Task;


public class TaskMapper {
    //convierte de DTO a entidad para guardarla en la db
    public static Task toEntity(TaskReq req){
        Task task = new Task();
        task.setTitle(req.getTitle());
        task.setDate(req.getDate());
        task.setDescription(req.getDescription());
        return task;
    }



    //para la respuesta tomamos la entidad y la pasamos a dto
    public static TaskRes toDto(Task entity){
        TaskRes dto = new TaskRes();
        dto.setId(entity.getId());
        dto.setTitle(entity.getTitle());
        dto.setDescription(entity.getDescription());
        dto.setDone(entity.getDone());
        dto.setDate(entity.getDate());
        return dto;
    }
}
