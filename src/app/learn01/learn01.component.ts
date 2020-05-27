import { Component, OnInit } from '@angular/core';

const todos = [
  {
    id: 1,
    title: 'lily',
    done: false
  },
];

@Component({
  selector: 'app-learn01',
  templateUrl: './learn01.component.html',
  styleUrls: ['./learn01.component.css']
})

export class Learn01Component implements OnInit {
  todos: {
    id: number,
    title: string,
    done: boolean,
  }[] = todos;

  constructor() { }

  ngOnInit(): void {

  }

  addTodo(e): void {
    // console.log(e.target.value);
    const titleText = e.target.value;
    if (!titleText.length) {
      return;
    }
    const last = this.todos[this.todos.length - 1];
    this.todos.push({
      // 把数据添加到渲染列表中
      id: last ? last.id + 1 : 1,
      title: titleText,
      done: false,
    });
    // 添加完成后清除文本框
    e.target.value = '';
    console.log(this.todos);
  }

  get toggleAll() {
    // todos状态发生改变get值也跟着改变  get访问器
    return this.todos.every(t => t.done);
  }

  set toggleAll(val) {// set赋值器 get set是存储了方法的属性,可以在标签上直接引用
    this.todos.forEach(t => t.done = val) ;
  }

  removeTodo(index: number) {
    // console.log(index);
    this.todos.splice(index, 1);
  }

}
