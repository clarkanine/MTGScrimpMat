import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Player, Card } from '../data-model';
import { CardService } from '../card.service';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-player-deck-viewer',
  templateUrl: './player-deck-viewer.component.html',
  styleUrls: ['./player-deck-viewer.component.css']
})
export class PlayerDeckViewerComponent implements OnInit, OnChanges {

  @Input() player: Player;
  deckList: Card[];
  constructor(public cardService: CardService) { }

  list = '4 Champion of the Parish\n'+
  '4 Kitesail Freebooter\n'+
  '4 Mantis Rider\n'+
  '4 Meddling Mage\n'+
  '4 Noble Hierarch\n'+
  '4 Phantasmal Image\n'+
  '4 Reflector Mage\n'+
  '4 Thalia\'s Lieutenant\n'+
  '3 Thalia, Guardian of Thraben\n'+
  '2 Thalia, Heretic Cathar\n'+
  '1 Island\n'+
  '1 Plains\n'+
  '4 Ancient Ziggurat\n'+
  '4 Cavern of Souls\n'+
  '4 Horizon Canopy\n'+
  '1 Seachrome Coast\n'+
  '4 Unclaimed Territory\n'+
  '4 Aether Vial\n';

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void
  {
    this.updateView();
  }

  updateView()
  {
    var observables;

    // this.deckList = 
    observables = this.cardService.getCardsForDeckList(this.player.deckList);

    forkJoin(observables).subscribe(cards => 
      {
        this.deckList = [];
        cards.forEach((cardResponse:any) => 
        {
          var card = new Card();

          for(var i=0; i < cardResponse.cards.length; i++) {
            var curr = cardResponse.cards[i];

            if(curr.imageUrl && curr.multiverseid)
            {
              card.imageUrl = curr.imageUrl;
              card.multiverseid = curr.multiverseid;
              card.name = curr.name;
              break;
            }
          }

          this.deckList.push(card)
        });
      });
  }

}
