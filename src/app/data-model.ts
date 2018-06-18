export class Player {
    _id = null;
    id = -1;
    name = '';
    deck = '';
    wins = 0;
    losses = 0;
    draws = 0;
    matches =[];
    userIdentifier = 'defaultUser';
    deckList = '';
  }

export class Match {
  _id;
  id = -1;
  wins= 0;
  losses = 0;
  draws = 0;
  myDeck = '';
  theirDeck = '';
  opponentId = -1;
}

export class Card {
  name = '';
  imageUrl = '';
  multiverseid = 0;
}