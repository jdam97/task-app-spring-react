package com.jdam.task_api.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import java.time.LocalDateTime;

//La T es un tipo genérico en Java. Sirve para que tu clase ApiResponse sea reutilizable
// y pueda contener cualquier tipo de dato como respuesta (String, List<TaskRes>, UserDTO, etc.).
@Data
@AllArgsConstructor
public class ApiResponse<T> {
    private LocalDateTime timestamp;
    private int status;
    private String message;
    private T data;
}
