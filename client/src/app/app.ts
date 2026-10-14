import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom'; // 26

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit { // 24 inherits OnInit {
  private http = inject(HttpClient); // 24
  //protected readonly title = signal('client');
  protected title = 'Dating App';
  // protected members : any; // 26
  protected members = signal<any>([]); // 26

  // // constructor(private http: HttpClient) {} // 24
  // ngOnInit(): void { // 24
  //   // Initialization logic here
  //   this.http.get('https://localhost:5001/api/members').subscribe({
  //     next: (response) => {
  //       // this.members = response; // 26
  //       this.members.set(response); // 26
  //       // console.log(response);
  //     },
  //     error: (error) => {
  //       console.error('Error fetching members:', error);
  //     },
  //     complete: () => {
  //       console.log('Request completed');
  //     }
  //   });
  // }

  // 26
  async ngOnInit() {
    this.members.set(await this.getMembers());
  }

  //26
  async getMembers() {
    try {
      return lastValueFrom(this.http.get('https://localhost:5001/api/members'));
    } catch (error) {
      console.error('Error fetching members:', error);
      throw error;
    }
  }
}
