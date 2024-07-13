import { useState, useEffect } from "react";
import players from "./player"; // Import the player data
import PlayerList from "./components/PlayerList";
import PlayerInfo from "./components/PlayerInfo";

const Home = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (players.length === 0) {
      setError("No players available.");
    }
  }, []);

  const loading = players.length === 0 && !error;

  return (
    <div className="flex bg-gradient-to-b from-white to-[#D4DFED] px-[5vw] h-[100vh]">
      {loading ? (
        <LoadingState />
      ) : error ? (
        <ErrorState error={error} />
      ) : (
        <div className="flex lg:flex-row flex-col-reverse lg:items-center justify-between gap-4 w-full h-[100vh] overflow-y-hidden">
          <PlayerList players={players} setSelectedPlayer={setSelectedPlayer} />
          <PlayerInfo selectedPlayer={selectedPlayer} />
        </div>
      )}
    </div>
  );
};

const LoadingState = () => (
  <div className="flex lg:flex-row flex-col-reverse lg:items-center justify-between gap-4">
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-8 gap-4 p-4 animate-pulse pt-[4vw] h-fit">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="rounded-xl bg-gray-300 lg:w-[255px] sm:w-[200px] w-[80vw] lg:h-[190px] sm:h-[120px] h-[50px]"
        ></div>
      ))}
    </div>
    <div className="rounded-2xl bg-gray-300 animate-pulse xl:w-[400px] lg:w-[350px] sm:h-[300px] h-[250px] lg:mt-0 mt-4"></div>
  </div>
);

const ErrorState = ({ error }) => (
  <div className="flex flex-col items-center mx-auto my-auto">
    <img src="" alt="worried Icon" className="w-20 h-20" />
    <p className="text-darkBlue font-bold sm:text-6xl text-3xl tracking-wider mb-10 text-center">
      Aww... Don&apos;t worry
    </p>
    <p>It&apos;s just a</p>
    <p className="font-bold underline italic">{error}</p>
  </div>
);

export default Home;
