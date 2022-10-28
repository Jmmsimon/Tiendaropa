import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";
import {TasksResponse, UserResponse} from "../vistas/todo-card/interfaces";
import {environment} from "../../environments/environment";

export interface User {
  email: string;
  name: string;
}
@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  constructor(private httpClient: HttpClient) { }

  async login(email: string, password: string): Promise<User | undefined> {

    const users = await firstValueFrom(this.httpClient.get<UserResponse>('https://api.airtable.com/v0/app4CZm8Dks0uKQRP/usuarios?maxRecords=3&view=Grid%20view',
      {
        headers: {
          Authorization: `Bearer ${environment.airtableKey}`
        }
      }))

    const user = users.records.find((it) => it.fields.Email == email && it.fields.Password == password)

    if (user) {
      return {email: user.fields.Email, name: user.fields.Name};
    }
    return undefined;
  }

}
