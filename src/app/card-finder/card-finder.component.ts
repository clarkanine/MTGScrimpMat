import { Component, OnInit } from '@angular/core';

import { CardService } from '../card.service';
import { Card } from '../data-model';

import { saveAs } from 'file-saver/FileSaver';

@Component({
  selector: 'app-card-finder',
  templateUrl: './card-finder.component.html',
  styleUrls: ['./card-finder.component.css']
})
export class CardFinderComponent implements OnInit {
  oraclePrefix = "http://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=";
  displayCardUrl = "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=0&type=card";
  cardName = "";
  cardList: Array<Card>;

  constructor(private cardService: CardService) { }

  ngOnInit() {

  }

  searchForCard()
  {
    this.cardService.searchForCard(this.cardName).subscribe((response: any) => this.cleanupCardList(response.cards));//this.cardList = response.cards);
  }

  cleanupCardList(response: any)
  {
    if(!response) {
      return;
    }
    this.cardList = new Array<Card>();
    response.forEach(element => {
        var card = new Card();
        if(element.name && element.imageUrl)
        {
          card.name = element.name;
          card.imageUrl = element.imageUrl;
          card.multiverseid = element.multiverseid;
          this.cardList.push(card);
        }
    });

    console.log(this.cardList);
  }

  setDisplayCardUrl(newUrl: string)
  {
    this.displayCardUrl = newUrl;
  }

  downloadCardImage()
  {
    this.cardService.downloadCardImage(this.displayCardUrl).subscribe((data: any) => this.saveCard(data));
  }

  saveCard(cardData: any)
  {
    var blob = new Blob([cardData], {type: 'image/jpeg'});
    saveAs(blob, 'card');
    // saveAs(blob[0], 'card');
  }

  openOracle(multiverseid: number)
  {
    window.open(this.oraclePrefix + multiverseid, "_blank");
  }

  clearCardSearch()
  {
    this.cardName = '';
    this.cardList = null;
  }
}
