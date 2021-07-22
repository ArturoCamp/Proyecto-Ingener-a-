import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-component',
  templateUrl: './layout-component.component.html',
  styleUrls: ['./layout-component.component.css']
})
export class LayoutComponentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem("username")) {
      this.router.navigate(['/']);
  }
  }

}
