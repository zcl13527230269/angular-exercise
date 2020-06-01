import { Component, OnInit } from '@angular/core';
import { R3TargetBinder } from '@angular/compiler';

const todos = [
  {
    id: 1,
    title: 'lily',
    done: false
  },
  {
    id: 2,
    title: 'mary',
    done: true
  },
];

@Component({
  selector: 'app-learn01',
  templateUrl: './learn01.component.html',
  styleUrls: ['./learn01.component.css']
})

export class Learn01Component implements OnInit {
  public todos: {
    id: number,
    title: string,
    done: boolean,
  }[] = JSON.parse(window.localStorage.getItem('todos') || '[]');

  public currentEditing: {
    id: number,
    title: string,
    done: boolean,
  } = null;

  public visibility = 'all';

  // 实现导航切换数据过滤功能
  // 1、提供一个属性，该属性回根据当前点击的链接返回过滤之后的数据
  // filterTodos
  // 2、提供一个属性，用来存储当前点击的链接标识
  // visibility 字符串 all active completed
  // 3、为链接添加点击事件，当点击导航链接时改变

  constructor() { }

  ngOnInit(): void {
    this.hashchangeHandler(); // 页面刷新时保持过滤状态
    window.onhashchange = this.hashchangeHandler.bind(this); // 绑定this，否则指向是widow
  }

  // 当Angular组件数据发生改变的时候，ngDoCheck钩子函数会被触发
  // 我们要做的是在这个钩子函数中去持久化存储我们的todos数据
  ngDoCheck(): void {
    window.localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  get filterTodos() {
    if (this.visibility === 'all') {
      return this.todos;
    } else if (this.visibility === 'active') {
      return this.todos.filter(t => !t.done);
    } else if (this.visibility === 'completed') {
      return this.todos.filter(t => t.done);
    }
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
    this.todos.forEach(t => t.done = val);
  }

  removeTodo(index: number) {
    // console.log(index);
    this.todos.splice(index, 1);
  }

  saveEdit(event, todo) {
    // 保存
    // console.log('click enter');
    // console.log('todo===', todo);
    // console.log('event===', event );
    todo.title = event.target.value;
    // 去除编辑样式
    this.currentEditing = null;
  }

  handleEditKeyup(event) {
    const { keyCode, target } = event;
    if (keyCode === 27) {
      target.value = this.currentEditing.title;
      this.currentEditing = null;
    }
  }

  hashchangeHandler() {
    // 当用户点击了锚点的时候，我们需要获取当前的锚点标识
    // 然后动态的将根组件中的visibility设置为当前点击的锚点标识
    const hash = window.location.hash.substr(1);
    console.log(hash);
    switch (hash) {
      case '/':
        this.visibility = 'all';
        break;
      case '/active':
        this.visibility = 'active';
        break;
      case '/completed':
        this.visibility = 'completed';
        break;
    }
  }
}
