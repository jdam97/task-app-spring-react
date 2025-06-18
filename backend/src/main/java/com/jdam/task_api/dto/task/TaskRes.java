package com.jdam.task_api.dto.task;

import lombok.Data;

import java.util.Date;

@Data
public class TaskRes {
    private Integer id;
    private String title;
    private String description;
    private Date date;
    private Boolean done;
}
