import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  data: any = [];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getAllData();
  }
  getAllData() {
    this.apiService.getAllPlayers().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getIndianPlayers() {
    this.apiService.getIndianPlayers().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getNonIndianPlayers() {
    this.apiService.getNonIndianPlayers().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getGraterThan200RunsPlayers() {
    this.apiService.getGraterThan200RunsPlayers().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getLessThan100RunsPlayers() {
    this.apiService.getLessThan100RunsPlayers().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getGraterThan25AvgPlayers() {
    this.apiService.getGraterThan25AvgPlayers().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  DeletePlayer(data: any) {
    let body = {
      _id: data,
    };
    this.apiService.deletePlayer(body).subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  onOptionsSelected(value: string) {
    if (value === 'get-indian-players') {
      this.getIndianPlayers();
    } else if (value === 'get-non-indian-players') {
      this.getNonIndianPlayers();
    } else if (value === 'get-grater-than-200-runs-players') {
      this.getGraterThan200RunsPlayers();
    } else if (value === 'get-less-than-100-runs-players') {
      this.getLessThan100RunsPlayers();
    } else if (value === 'get-grater-than-25-avg-players') {
      this.getGraterThan25AvgPlayers();
    } else {
      this.getAllData();
    }
  }
  deletePlayer(id: string) {
    this.DeletePlayer(id);
  }
}
