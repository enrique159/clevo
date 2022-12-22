import { User } from "@/app/modules/Users/domain/interfaces";
import { IPayload, Response } from "@/app/network/domain/interfaces";
import Http from "@/app/network/Http";
import { Auth } from "../domain/interfaces";
import { IsAuth } from "../domain/interfaces/Auth";
import { AuthRepositoryModel } from "../domain/services/AuthRepositoryModel";

export class AuthRepository implements AuthRepositoryModel {
  private http: Http;

  constructor() {
    this.http = new Http();
  }

  signIn(payload: IPayload<Auth>): Promise<Response<User>> {
    return this.http.post<Auth, User>("/auth/signin", payload)
  }

  async isAuth(): Promise<Response<User>> {
    return await this.http.get<null, User>("/auth/isauth")
  }

  signOut(): Promise<Response<void>> {
    return Promise.resolve({ data: undefined } as Response<void>)
  }
}