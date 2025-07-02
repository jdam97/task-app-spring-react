package com.jdam.task_api.controller;
import com.jdam.task_api.dto.task.TaskReq;
import com.jdam.task_api.dto.task.TaskRes;
import com.jdam.task_api.model.Task;
import com.jdam.task_api.response.ApiResponse;
import com.jdam.task_api.service.ITaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@RequestMapping("/api")
@CrossOrigin(value="http://localhost:3000")
@RestController
public class TaskController {
    //Inyeccion del service
    @Autowired
    private ITaskService taskService;

    //Listar tareas(all,pending or completed)
    @GetMapping("/tasks")
    public ResponseEntity<ApiResponse<List<TaskRes>>> getAllTasks(@RequestParam(required = false) Boolean done){
        List<TaskRes> tasks = taskService.getTask(done);
        ApiResponse<List<TaskRes>> response = new ApiResponse<>(
                LocalDateTime.now(),
                HttpStatus.OK.value(),
                "Lista de tareas obtenida",
                tasks);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    //Buscar tarea x id
    @GetMapping("/tasks/{id}")
    public ResponseEntity<ApiResponse<TaskRes>> getTaskById(@PathVariable Integer id){
        TaskRes task = taskService.searchTaskById(id);
        ApiResponse<TaskRes> response = new ApiResponse<>(
                LocalDateTime.now(),
                HttpStatus.OK.value(),
                "Tarea encontrada",
                task);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    //Buscar x titulo
    @GetMapping("/tasks/search")
    public ResponseEntity<ApiResponse<List<TaskRes>>> getTaskByTitle(@RequestParam String title){
        List<TaskRes> tasks = taskService.searchTaskByTitle(title);
        ApiResponse<List <TaskRes>> response = new ApiResponse<>(
                LocalDateTime.now(),
                HttpStatus.OK.value(),
                "Tareas compatibles",
                tasks);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }
    //Crear tarea
    @PostMapping("/task")
    public ResponseEntity<ApiResponse<TaskRes>>createTask(@RequestBody TaskReq taskRequest){
        TaskRes taskRes = taskService.createTask(taskRequest);
        ApiResponse<TaskRes> response = new ApiResponse<>(
                LocalDateTime.now(),
                HttpStatus.CREATED.value(),
                "Tarea creada!",
                taskRes);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
    //Eliminar tarea
    @DeleteMapping("/task/{id}")
    public ResponseEntity<ApiResponse<TaskRes>> deleteTask(@PathVariable Integer id){
    TaskRes taskDeleted = taskService.deleteTask(id);
    ApiResponse<TaskRes> response =  new ApiResponse(
            LocalDateTime.now(),
            HttpStatus.OK.value(),
            "Tarea eliminada",
            taskDeleted);
    return ResponseEntity.status(HttpStatus.OK).body(response);
    }
    //Contador tareas
    @GetMapping("/tasks/count")
    public ResponseEntity<ApiResponse<Map<String,Long>>> countTasks(){
        Map<String,Long> stats = taskService.CountTasks();
        ApiResponse<Map<String,Long>> response = new ApiResponse<>(
                LocalDateTime.now(),
                HttpStatus.OK.value(),
                "Estados de tareas traido con exito",
                stats);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    //Editar tarea
    @PutMapping("/task/{id}")
    public ResponseEntity<ApiResponse<TaskRes>> editTask(@PathVariable Integer id, @RequestBody TaskReq taskReq){
        TaskRes taskEdited = taskService.updateTask(id,taskReq);
        ApiResponse<TaskRes> response = new ApiResponse(
                LocalDateTime.now(),
                HttpStatus.OK.value(),
                "Tarea editada",
                taskEdited);
        return ResponseEntity.status(HttpStatus.OK).body(response);

    }

    //Cambiar estado
    @PutMapping("/task/done/{id}")
    public ResponseEntity<ApiResponse<TaskRes>>editDone(@PathVariable Integer id, @RequestParam Boolean done){
        TaskRes task = taskService.doneTask(id,done);
        ApiResponse<TaskRes> response = new ApiResponse(
                LocalDateTime.now(),
                HttpStatus.OK.value(),
                "Se ha cambiado el estado a "+done,
                task);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }


}
