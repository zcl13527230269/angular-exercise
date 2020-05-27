import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Learn01Component } from './learn01/learn01.component';

@NgModule({
  declarations: [ // 组装模块资源：组件，指令，服务
    AppComponent,
    Learn01Component
  ],
  imports: [// 依赖模块
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]// 指定启动的根组件
})
export class AppModule { }
