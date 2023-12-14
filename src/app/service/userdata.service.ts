import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  apiurl = "http://localhost:3030/posts"

  constructor(private http: HttpClient) { }

  getuserdata() {
    return this.http.get(this.apiurl);
  }

  postuserdata(user: any) {
    return this.http.post(this.apiurl, user)
  }

  deleteuserdata(user: any) {
    const deleteurl = `${this.apiurl}/${user}`;
    return this.http.delete(deleteurl);
  }

  edituserdata(user: any) {
    const editurl = `${this.apiurl}/${user.id}`;
    return this.http.put(editurl,user)
  }
}
