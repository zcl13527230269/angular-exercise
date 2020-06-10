import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { Learn01Component } from './learn01/learn01.component';
import { LearnFormComponent } from './learn-form/learn-form.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { LoginComponent } from './entrance/login/login.component';
import { RecoverComponent } from './entrance/recover/recover.component';
import { RegisterComponent } from './entrance/register/register.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [ // 组装模块资源：组件，指令，服务
    AppComponent,
    Learn01Component,
    LearnFormComponent,
    HeroFormComponent,
    LoginComponent,
    RecoverComponent,
    RegisterComponent
  ],
  imports: [// 依赖模块
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]// 指定启动的根组件
})
export class AppModule { }
