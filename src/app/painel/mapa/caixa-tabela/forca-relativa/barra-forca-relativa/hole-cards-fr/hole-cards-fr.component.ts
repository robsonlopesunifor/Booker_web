import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hole-cards-fr',
  templateUrl: './hole-cards-fr.component.html',
  styleUrls: ['./hole-cards-fr.component.css']
})
export class HoleCardsFrComponent implements OnInit {

  @Input() holecard = {}
  private backgroud = ''

  constructor() { }

  corDeBackgroud(id):string{
    switch (id){
      case 1:
        return '#00FF00'
      case 2:
        return '#7D7676'
      case 3:
        return '#7D7676'
      case 4:
        return '#7D7676'
      case 5:
        return '#7D7676'
      case 6:
        return '#7D7676'
      case 7:
        return '#7D7676'
      case 8:
        return '#7D7676'
      case 9:
        return '#7D7676'
      case 10:
        return '#7D7676' 
      case 11:
        return '#7D7676'
      case 12:
        return '#7D7676'
      case 13:
        return '#7D7676'
      case 14:
        return '#7D7676'
    }

  }

  ngOnInit() {
    //this.backgroud = this.corDeBackgroud(this.holecard['id'])

  }

}
