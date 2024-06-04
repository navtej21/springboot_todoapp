package com.example.backend.controller;

import com.example.backend.model.Todo;
import com.example.backend.service.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
public class Controller {

    @Autowired
    private service databaseService;
    @GetMapping("/todos")
    public List<Todo> getAllTodos() {
        return databaseService.fetchalltodos();
    }

    @GetMapping("/todos/{id}")
    public Todo getsingletodo(@PathVariable("id") Long id){
       Todo todo=databaseService.fetchsingletodo(id);
       if(todo!=null){
           return todo;
       }
       else{
           return null;
       }
    }

    @PostMapping("/todos")
    public ResponseEntity<Todo> postTodo(@RequestBody Todo todo) {
        Todo savedTodo = databaseService.savetodo(todo);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedTodo);
    }

    @PutMapping("/todos/{id}")
    public ResponseEntity<Todo> putTodo(@RequestBody Todo newTodo, @PathVariable("id") Long id) {
        Todo updatedTodo = databaseService.updatetodo(newTodo,id);
        if (updatedTodo != null) {
            return new ResponseEntity<>(updatedTodo,HttpStatus.OK);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable("id") Long id) {
        databaseService.Deletetodo(id);
        return ResponseEntity.noContent().build();
    }
}
