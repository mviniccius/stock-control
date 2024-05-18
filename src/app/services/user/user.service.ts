import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/app/enviroment/enviroment';
import { AuthRequest } from 'src/app/models/interface/auth/AuthRequest';
import { AuthResponse } from 'src/app/models/interface/auth/AuthResponse';
import { CriarUsuarioRequest } from 'src/app/models/interface/user/CriarUsuarioRequest';
import { CriarUsuarioResponse } from 'src/app/models/interface/user/CriarUsuarioResponse';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private API_URL = enviroment;

  constructor(private http: HttpClient) {}

  criarUsuario(
    requestDatas: CriarUsuarioRequest
  ): Observable<CriarUsuarioResponse> {
    return this.http.post<CriarUsuarioResponse>( `${this.API_URL}/user`,
      requestDatas
    );
  }

  authUser(requestDatas: AuthRequest): Observable<AuthResponse>{
    return this.http.post<AuthResponse>(
      `${this.API_URL}/auth`, requestDatas
    )
  }
}
