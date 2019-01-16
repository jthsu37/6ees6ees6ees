class HoneyMakerBee extends Bee{
  constructor() {
    super();
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
  // TODO..
  }
  makeHoney(){
    this.honeyPot++
  }

  giveHoney(){
    this.honeyPot--
  }
};
