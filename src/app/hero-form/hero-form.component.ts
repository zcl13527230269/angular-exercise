import { Component, OnInit } from '@angular/core';

import { Hero } from '../Class/hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log('succeed');
  }

  newHero() {
    this.model = new Hero(42, '', '');
  }

  get diagnostic() { return JSON.stringify(this.model); }

  constructor() { }

  ngOnInit(): void {
  }

}
// Angular表单模板
// 绑定到 NgForm.ngSubmit 事件属性来处理表单提交
// 模板引用变量 #heroForm #name
// [(ngModel)]语法用来实现双向数据绑定
// name 有效性验证 对表单元素的变更进行追踪
// NgForm 控制按钮的禁用状态
// 定制 CSS 类来给用户提供无效控件的视觉反馈
