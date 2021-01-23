import card1 from "../Images/Card1.jpg";
import card2 from "../Images/Card2.jpg";
import card3 from "../Images/Card3.jpg";
import card4 from "../Images/Card4.jpg";
import card5 from "../Images/Card5.jpg";
import card6 from "../Images/Card6.jpg";
import card7 from "../Images/Card7.jpg";
import card8 from "../Images/Card8.jpg";

function shuffle(array) {
  const _array = array.slice(0);
  for (let i = 0; i < array.length - 1; i++) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let temp = _array[i];
    _array[i] = _array[randomIndex];
    _array[randomIndex] = temp;
  }
  return _array;
}

export default function initializeDeck() {
  let id = 0;
  const cards = [
    card1,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8
  ].reduce((acc, type) => {
    acc.push({
      id: id++,
      type
    });
    acc.push({
      id: id++,
      type
    });
    return acc;
  }, []);

  return shuffle(cards);
}
