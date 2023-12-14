import { Component } from '@angular/core';
import { UserdataService } from './service/userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'httpcrud';

  user: any;
  selectuser: any = {};
  edituser: any = false;

  constructor(private userdata: UserdataService) { }

  getdata() {
    this.userdata.getuserdata().subscribe((result) => {
      this.user = result;
      console.log("get result", this.user);
    },
      (error) => {
        console.log("Get data error", error);

      })
  }

  postdata(formdata: any) {
    this.userdata.postuserdata(formdata).subscribe((result) => {
      console.log("post result", result);
    })
    formdata.reset()
  }

  removedata(items: any) {
    this.userdata.deleteuserdata(items.id).subscribe((result) => {
      this.user = this.user.filter((useritem: any) => useritem.id !== items.id)
      console.log(this.user);
    })
  }

  editdata(items: any): void {
    console.log(items);
    this.selectuser = { ...items };
    this.edituser = true;
  }
  savedata(formdata: any): void {
    const editedData = {
      id: this.selectuser.id,
      name: formdata.name,
      email: formdata.email,
      password: formdata.password,
      cpassword: formdata.cpassword
    };

    this.userdata.edituserdata(editedData).subscribe((result) => {
      console.log(result);
      console.log(editedData);
      this.edituser = false;
    });
  }




}
