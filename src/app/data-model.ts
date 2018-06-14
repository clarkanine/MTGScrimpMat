export class Player {
    _id = null;
    id = -1;
    name = 'John';
    deck = '';
    wins = 0;
    losses = 0;
    draws = 0;
    matches =[];
    userIdentifier = 'defaultUser';
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