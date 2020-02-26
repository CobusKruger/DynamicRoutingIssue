import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-PackagedLib',
  template: `
    <p>
      packaged-lib works!
    </p>
  `,
  styles: []
})
export class PackagedLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
