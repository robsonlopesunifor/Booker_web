import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sinal',
  templateUrl: './sinal.component.html',
  styleUrls: ['./sinal.component.css']
})
export class SinalComponent implements OnInit {

  @Input() sinal:object = {heroi:true,
                           agressor:false,
                           vez:true};

  constructor() { }

  ngOnInit() {
  }

}
