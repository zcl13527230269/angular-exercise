import { Component } from '@angular/core';

// @Component组件装饰器
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-exercise';
  count = 0;
  increment = function() {
    // 在组件方法中，可以直接通过this访问组件成员
    this.count++;
  };
}
