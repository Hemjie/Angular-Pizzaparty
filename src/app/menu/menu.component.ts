import { Component, OnInit, Input } from '@angular/core';
//ne pas oublier ajout du input dans l'import

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
  // le title est défini comme un attribut HTML
  @Input() navTitle;

  @Input() color = 'light';

  changeTheme() {
    if (this.color == "dark") {
      this.color = "light"
    } else {
      this.color = "dark"
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
