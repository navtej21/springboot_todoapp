package com.example.backend.service;

import com.example.backend.model.Todo;
import com.example.backend.repository.backendrepo;
import com.example.backend.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class service implements TodoService {

    @Autowired
    private backendrepo backend;
    long id;
    @Override
    public Todo savetodo(Todo todo){
       return  backend.save(todo);
    }

    public Todo fetchsingletodo(Long id){
        Todo showtodo;
       Optional<Todo> todo=backend.findById(id);

     if(todo.isPresent()){
         return todo.get();
     }
     else{
         return null;
     }
    }

    @Override
    public List<Todo> fetchalltodos(){
        return backend.findAll();
    }


    @Override
    public void Deletetodo(Long id) {
        this.id=id;

        backend.deleteById(id);

    }

    @Override
    public Todo updatetodo(Todo newtodo,Long id){

        Optional<Todo> todo=backend.findById(id);

        if(todo.isPresent())
        {
            Todo oldtodo=todo.get();
            oldtodo.setDate(newtodo.getDate());
            oldtodo.setTask(newtodo.getTask());
            oldtodo.setDone(newtodo.isDone());
            return backend.save(oldtodo);
        }
        else{
            return null;
        }
    }




}