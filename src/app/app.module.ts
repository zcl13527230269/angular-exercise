import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';

import { AppComponent } from './app.component';
import { Learn01Component } from './learn01/learn01.component';
import { LearnFormComponent } from './learn-form/learn-form.component';
import { HeroFormComponent } from './hero-form/hero-form.component';

@NgModule({
  declarations: [ // 组装模块资源：组件，指令，服务
    AppComponent,
    Learn01Component,
    LearnFormComponent,
    HeroFormComponent
  ],
  imports: [// 依赖模块
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]// 指定启动的根组件
})
export class AppModule { }
