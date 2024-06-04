package com.example.backend.model;

import jakarta.persistence.*;

import java.util.Date;


@Entity(name ="todo")
public class Todo {
    @Id
            @GeneratedValue(strategy = GenerationType.IDENTITY)
       long id;
        String task;
        Date date;
        boolean done;

        @Override
        public String toString() {
            return "service{" +
                    "id=" + id +
                    ", task='" + task + '\'' +
                    ", date=" + date +
                    ", done=" + done +
                    '}';
        }

        public Todo(){

        }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Todo(String task, Date date, boolean done, Long id) {
            this.task = task;
            this.date = date;
            this.done = done;
            this.id=id;
        }

        public String getTask() {
            return task;
        }

        public void setTask(String task) {
            this.task = task;
        }

        public Date getDate() {
            return date;
        }

        public void setDate(Date date) {
            this.date = date;
        }

        public boolean isDone() {
            return done;
        }

        public void setDone(boolean done) {
            this.done = done;
        }
    }

