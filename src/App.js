import "./App.css";
import Game from "./components/Game/Game";

const raccoons = {
  name: "Russiaville Raccoons",
  logoSrc:
    "https://raw.githubusercontent.com/p-mayor/davey-react-sports-lab-basic/master/assets/images/raccoon.png",
};
const squirrels = {
  name: "Sheridan Squirrels",
  logoSrc:
    "https://raw.githubusercontent.com/p-mayor/davey-react-sports-lab-basic/master/assets/images/squirrel.png",
};
const bunnies = {
  name: "Burlington Bunnies",
  logoSrc:
    "https://raw.githubusercontent.com/p-mayor/davey-react-sports-lab-basic/master/assets/images/bunny.png",
};
const hounds = {
  name: "Hammond Hounds",
  logoSrc:
    "https://raw.githubusercontent.com/p-mayor/davey-react-sports-lab-basic/master/assets/images/hound.png",
};

const venue = {
  name1: "Barclay Center",
  name2: "Madison Square Garden",
};

function App() {
  return (
    <section>
      <div>
        <Game homeTeam={raccoons} visitingTeam={squirrels} />
      </div>
      <div>
        <Game homeTeam={bunnies} visitingTeam={hounds} />
      </div>
    </section>
  );
}
export default App;
