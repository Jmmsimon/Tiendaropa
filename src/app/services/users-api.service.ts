import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";


export interface User {
  email: string;
  name: string;
}

export interface UserResponse{
  id: number;
  username: string;

}

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  constructor(private httpClient: HttpClient) { }

  async login(email: string, password: string): Promise<User | undefined> {

    const user = await firstValueFrom(this.httpClient.post<UserResponse | string>('http://localhost:8080/users/login', {
      username : email,
      password: password,
    }));

    if (user === ''){
      return undefined;
    }
    else{
      return{email: "...", name: (user as UserResponse).username
      }
    }
  }

}
