import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = "to-do"
  todoItem: string = "";
  todoItemsArray: any[] =[];
  todoObj: any = {
    todoItem: "",
    color: ""
  }

  constructor(){}
  

  ngOnInit(): void {
    const localData = localStorage.getItem("todoItems");
    if (localData != null) {
      this.todoItemsArray = JSON.parse(localData);
    }
    
  }

  onItemAdd(){
    this.todoItemsArray.push(this.todoObj);
    localStorage.setItem("todoItems", JSON.stringify(this.todoItemsArray))
    this.todoObj = {
      todoItem: "",
      color:""
    }
  }
}
