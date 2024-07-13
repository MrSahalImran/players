import React, { useState, useEffect } from "react";

const PlayerList = ({ players, setSelectedPlayer }) => {
  const [selectedIndex, setSelectedIndex] = useState(0); // State for the index of the selected player
  const [imageLoadErrorIndices, setImageLoadErrorIndices] = useState([]); // State to track image loading errors

  useEffect(() => {
    if (players.length > 0) {
      setSelectedPlayer(players[selectedIndex]); // Update selected player based on selectedIndex
    }
  }, [players, selectedIndex, setSelectedPlayer]);

  // Handler for image loading errors
  const handleImageError = (index) => {
    setImageLoadErrorIndices((prev) => [...prev, index]); // Add index to image loading error state
  };

  // Handler for player click events
  const handlePlayerClick = (index, player) => {
    setSelectedPlayer(player); // Set selected player
    setSelectedIndex(index); // Set selected index
  };

  return (
    <div className="overflow-hidden bg-yellow-00">
      {/* Player list header */}
      <h2 className="text-3xl font-bold p-4 text-darkBlue text-center">
        Player List
      </h2>

      {/* Player grid */}
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-8 gap-4 p-4 h-[90vh] overflow-y-auto">
        {/* Map through players and render each player card */}
        {players.map((player, index) => (
          <div key={player.name} className="group h-full">
            {/* Player card */}
            <div
              className={`h-full border lg:p-5 p-3 rounded-xl bg-[#f8faff] ${
                selectedIndex === index
                  ? "bg-darkBlue shadow-md scale-105"
                  : "group-hover:bg-white"
              } flex md:flex-col flex-row items-center md:gap-4 gap-2 transition-all duration-300 cursor-pointer group-hover:shadow-md group-hover:scale-105`}
              onClick={() => handlePlayerClick(index, player)}
            >
              {/* Render initials if image loading failed */}
              {imageLoadErrorIndices.includes(index) ? (
                <div
                  className={`w-20 h-20 rounded-full ${
                    selectedIndex === index ? "bg-white" : "bg-[#88c9d3]"
                  } text-[24px] text-[#05264e] font-bold flex items-center justify-center`}
                >
                  <span>
                    {player.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
              ) : (
                // Render player avatar
                <img
                  src={player.image}
                  alt={player.name[0]}
                  onError={() => handleImageError(index)}
                  className="w-20 h-20 ob rounded-full bg-gray-300"
                />
              )}
              {/* Player details */}
              <div>
                <div
                  className={`text-[#05264e] ${
                    selectedIndex === index
                      ? "text-white"
                      : "group-hover:text-[#3c65f5]"
                  } lg:text-[20px] text-[18px] lg:leading-[26px] leading-[23px] md:text-center font-bold transition-all duration-300`}
                >
                  {player.name}
                </div>
                <div
                  className={`${
                    selectedIndex === index ? "text-white" : "text-black"
                  } text-[12px] leading-[18px] font-medium md:text-center transition-all duration-300`}
                >
                  {player.position}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerList;
