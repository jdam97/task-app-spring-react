package com.jdam.task_api.dto.task;

import lombok.Data;

import java.util.Date;

@Data
public class TaskReq {
    private String title;
    private Date date;
    private String description;
}
