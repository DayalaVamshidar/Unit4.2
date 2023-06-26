import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public addPlayer(body: any) {
    return this.http.post('http://localhost:3000/add-player', body);
  }
  public updatePlayer(body: any) {
    return this.http.post('http://localhost:3000/update-player', body);
  }
  public findPlayer(body: any) {
    return this.http.post('http://localhost:3000/find-player', body);
  }
  public deletePlayer(body: any) {
    return this.http.post('http://localhost:3000/delete-player', body);
  }
  public getAllPlayers() {
    return this.http.get('http://localhost:3000/find-all-players');
  }
  public getIndianPlayers() {
    return this.http.get('http://localhost:3000/get-indian-players');
  }
  public getNonIndianPlayers() {
    return this.http.get('http://localhost:3000/get-non-indian-players');
  }
  public getGraterThan200RunsPlayers() {
    return this.http.get(
      'http://localhost:3000/get-grater-than-200-runs-players'
    );
  }
  public getLessThan100RunsPlayers() {
    return this.http.get(
      'http://localhost:3000/get-less-than-100-runs-players'
    );
  }
  public getGraterThan25AvgPlayers() {
    return this.http.get(
      'http://localhost:3000/get-grater-than-25-avg-players'
    );
  }
}
