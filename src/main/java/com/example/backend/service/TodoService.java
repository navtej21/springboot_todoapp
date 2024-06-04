package com.example.backend.service;

import com.example.backend.model.Todo;
import java.util.List;

public interface TodoService {

    //save operation
    Todo savetodo(Todo todo);

    Todo fetchsingletodo(Long id);

    //Read operation

    List<Todo> fetchalltodos();

    //Update operation

    Todo updatetodo(Todo todo,Long id);

    //Delete operation

    void Deletetodo(Long id);
}

