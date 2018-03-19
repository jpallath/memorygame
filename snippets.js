this.setState(prevState => {
  let cards = prevState.cards.map(c => (
    c.id === id ? {
      ...c,
      cardState: c.cardState === CardState.HIDING ? CardState.MATCHING : CardState.HIDING
    } : c
  ));
  return {cards}
});
