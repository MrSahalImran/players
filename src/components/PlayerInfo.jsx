import React, { useState, useEffect } from "react";
import "../BasketballPlayerCard.css";

const PlayerInfo = ({ selectedPlayer }) => {
  const [imageLoadError, setImageLoadError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  // Reset imageLoadError and imageLoading when selectedPlayer changes
  useEffect(() => {
    setImageLoadError(false);
    setImageLoading(true); // Reset image loading state on player change
  }, [selectedPlayer]);

  // Handle image loading error
  const handleImageError = () => {
    setImageLoadError(true);
    setImageLoading(false); // Image load attempt failed
  };

  // Handle image loading success
  const handleImageLoad = () => {
    setImageLoading(false); // Image successfully loaded
  };

  // Render avatar based on selectedPlayer, imageLoadError, and imageLoading states
  const renderAvatar = () => {
    if (!selectedPlayer || !selectedPlayer.image || imageLoadError) {
      // Render initials or default avatar if avatar is not available or loading error occurs
      return (
        <div className="avatar">
          <span>
            {selectedPlayer
              ? selectedPlayer.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
              : "NN"}
          </span>
        </div>
      );
    }

    // Render player avatar if available
    return (
      <img
        src={selectedPlayer.image}
        alt={selectedPlayer.name || "Player Avatar"}
        onLoad={handleImageLoad}
        onError={handleImageError}
        className={`avatar-image ${imageLoading ? "image-loading" : ""}`}
      />
    );
  };

  return (
    <div>
      {/* Player details header */}
      <h2 className="header">Player Details</h2>
      {selectedPlayer ? (
        // Render player details if selectedPlayer is available
        <div className="player-card">
          <div className="player-info">
            {/* Render player avatar */}
            {renderAvatar()}
            <div>
              {/* Player information */}
              <span className="lg:mb-1 md:font-normal font-bold">
                <span className="font-bold text-darkBlue italic hidden-md">
                  Name:
                </span>{" "}
                {selectedPlayer.name}
              </span>
              <div className="lg:mb-1">
                <span className="font-bold text-darkBlue italic hidden-md">
                  Position:
                </span>{" "}
                {selectedPlayer.position}
              </div>
              <div className="lg:mb-1">
                <span className="font-bold text-darkBlue italic hidden-md">
                  Points Per Game:
                </span>{" "}
                {selectedPlayer.stats.pointsPerGame}
              </div>
              <div className="lg:mb-1">
                <span className="font-bold text-darkBlue italic hidden-md">
                  Assists Per Game:
                </span>{" "}
                {selectedPlayer.stats.assistsPerGame}
              </div>
              <div className="lg:mb-1">
                <span className="font-bold text-darkBlue italic hidden-md">
                  Rebounds Per Game:
                </span>{" "}
                {selectedPlayer.stats.reboundsPerGame}
              </div>
              <div className="lg:mb-1">
                <span className="font-bold text-darkBlue italic hidden-md">
                  Steals Per Game:
                </span>{" "}
                {selectedPlayer.stats.stealsPerGame}
              </div>
              <div className="lg:mb-1">
                <span className="font-bold text-darkBlue italic hidden-md">
                  Blocks Per Game:
                </span>{" "}
                {selectedPlayer.stats.blocksPerGame}
              </div>
              <div className="lg:mb-1">
                <span className="font-bold text-darkBlue italic hidden-md">
                  Field Goal Percentage:
                </span>{" "}
                {selectedPlayer.stats.fieldGoalPercentage}%
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Display message if no player is selected
        <p>No player selected.</p>
      )}
    </div>
  );
};

export default PlayerInfo;
