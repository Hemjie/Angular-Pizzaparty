import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isCollapsed = false; 

  toggleCollapseNavbar() {
    if (!this.isCollapsed) {
      this.isCollapsed = true;
    } else {
      this.isCollapsed = false;
    }

    //raccourci par rapport au if : this.isCollapsed = !this.isCollapsed
  };

  constructor() { }

  ngOnInit(): void {
  }

}
