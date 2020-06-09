import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-learn-form',
  templateUrl: './learn-form.component.html',
  styleUrls: ['./learn-form.component.css']
})
export class LearnFormComponent implements OnInit {
  nameFormControl = new FormControl('');
  favoriteColor = '';

  name = new FormControl(''); // 设置初始值,可以直接对表单控件的状态进行监听、修改和校验

  profileForm = new FormGroup({ //  FormGroup 拥有和 FormControl 相同的属性（比如 value、untouched）和方法（比如 setValue()）
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  // 用 group 方法来创建 profileForm 控件
  // FormBuilder 服务有三个方法：control()、group() 和 array()
  newProfileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
  }

  UpdateName(){
    this.name.setValue('Lucy'); // 只使用单个控件，但是当调用 FormGroup 或 FormArray 的 setValue() 方法时，传入的值就必须匹配控件组或控件数组的结构
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  updateProfile(){
    this.profileForm.patchValue({// patchValue() 方法可以用对象中所定义的任何属性为表单模型进行替换
      firstName: 'Lucy',
      address: {
        street: '1 street',
      }
    });
  }

}
