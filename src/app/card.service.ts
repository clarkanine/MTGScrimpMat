import { Injectable } from '@angular/core';

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ResponseContentType } from '@angular/http';
import { saveAs } from 'file-saver/FileSaver';

import { Observable } from 'rxjs';
import {forkJoin} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CardService {
  private oraclePrefix = "http://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=";
  private cardEndpoint = 'https://api.magicthegathering.io/v1/cards';
  constructor(private http: HttpClient) { }

  searchForCard(name: String)
  {
      const headers = new Headers();
      headers.append('Accept', 'text/plain');
      return this.http.get(this.cardEndpoint + '?name=' + name);
  }

  searchForCardNameExact(name: String)
  {
      const headers = new Headers();
      headers.append('Accept', 'text/plain');
      var queryString = this.getQueryString(name);
      return this.http.get(this.cardEndpoint + queryString);
  }

  downloadCardImage(url: string)
  {
    const headers = new Headers();
    headers.append('Accept', 'image/jpeg');

    return this.http.request("GET", url, { responseType: "arraybuffer", withCredentials: true});
  }

  getCardsForDeckList(deckList: string)
  {
    let observables: Observable<any>[] = [];

    var cards = [];
    deckList = deckList.replace(/(\d+ )/g, "");
    var list = deckList.split(/\n/);
    if(list[list.length-1] === "")
      delete list[list.length-1];

    list.forEach(entry => 
      {
        observables.push(this.searchForCardNameExact(entry));
    });
    
    return observables;
  }

  openOracle(multiverseid: number)
  {
    window.open(this.oraclePrefix + multiverseid, "_blank");
  }

  getQueryString(name: String)
  {
    var queryString = '?name="';
    if(name.includes(' // ')) {
      queryString += name.substring(0, name.indexOf(' // ')) + '"';
    }
    // // split, flip, double-faced, token, plane, scheme, phenomenon, leveler, vanguard, aftermath
    else {
      queryString += name + '"';
    }

    return queryString;
  }
}
