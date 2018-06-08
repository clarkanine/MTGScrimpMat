import { Injectable } from '@angular/core';

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ResponseContentType } from '@angular/http';
import { saveAs } from 'file-saver/FileSaver';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private cardEndpoint = 'https://api.magicthegathering.io/v1/cards';
  constructor(private http: HttpClient) { }

  searchForCard(name: String)
  {
      const headers = new Headers();
      headers.append('Accept', 'text/plain');

      return this.http.get(this.cardEndpoint + '?name=' + name);
  }

  downloadCardImage(url: string)
  {
    const headers = new Headers();
    headers.append('Accept', 'image/jpeg');

    return this.http.request("GET", url, { responseType: "arraybuffer", withCredentials: true});
  }
}
