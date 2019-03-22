import { Component } from '@angular/core';
import { ClarityIcons } from '@clr/icons';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    ClarityIcons.add({
      'clarity-logo': `
            <svg width="36px" height="27px" viewBox="0 0 36 27" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <!-- Generator: Sketch 52.5 (67469) - http://www.bohemiancoding.com/sketch -->
            <title>Icon / z-Clarity</title>
            <desc>Created with Sketch.</desc>
            <g id="Changelog" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Icon-Library-Changelog" transform="translate(-24.000000, -17.000000)">
                    <g id="Header">
                        <g id="Icon-/-z-Clarity" transform="translate(24.000000, 12.000000)">
                            <g id="Group" transform="translate(0.000000, 5.000000)">
                                <polyline id="Fill-3" fill="#0095D3" points="24.7018129 0.0389658947 35.9796409 6.73182316 35.9614589 20.3238669 24.7018129 26.9984943 18.0173463 23.0191441 29.6688176 16.4641011 29.6688176 10.5543006 24.9216504 7.94411116 18.0321078 3.9987085"></polyline>
                                <polyline id="Fill-4" fill="#F38B00" points="11.3313965 0.0389658947 0.0535685039 6.73182316 0.0717505512 20.3238669 11.3313965 26.9984943 18.0166888 23.018419 7.35448693 16.4641011 7.35448693 10.5543006 18.0324642 3.99831646"></polyline>
                                <polyline id="Fill-5" fill="#004C70" points="18.017374 23.0192586 11.4990488 19.0119249 18.0212495 15.1590855 24.9510827 19.1187952"></polyline>
                                <polyline id="Fill-6" fill="#98441E" points="18.0314053 3.99761565 11.5267517 7.99043354 18.0439938 11.8827963 24.9058951 7.93498959"></polyline>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    `});
  }
}