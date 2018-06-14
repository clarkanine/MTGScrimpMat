import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  hardware = 
  [ 
    {"title":"Computer", link:""},
    {"title":"Webcam", link:""},
    {"title":"Tripod", link:""},
  ];
  software = 
  [ 
    {"title":"GoogleChrome", link:"https://www.google.com/chrome/?brand=CHBD&gclid=Cj0KCQjwmPPYBRCgARIsALOziAPJYfBVVxdHdsBz-krFpkGMmyl7EBNkJV8XkK7LnIFpZJ-BYcGu3BUaAqoYEALw_wcB"},
    {"title":"OBS", link:"https://obsproject.com/"},
    {"title":"Overwrite Downloads Extension", link:"https://chrome.google.com/webstore/detail/downloads-overwrite-alrea/lddjgfpjnifpeondafidennlcfagekbp"},
    {"title":"Configure Downloads", link:"https://www.wikihow.com/Change-Google-Chrome-Downloads-Settings"},
  ];
  constructor() { }

  ngOnInit() {
  }

}
