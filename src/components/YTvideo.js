import React, { useState, useEffect } from "react";
import axios from "axios";
import YouTube from "react-youtube";

const RepairVideo = ({ repairOption, vehicleData }) => {
  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    // Function to fetch the video based on the repair option
    const fetchVideo = async () => {
      try {
        const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

        // Modify the query based on the selected repairOption and vehicleData.make
        const query = `${repairOption} repair tutorial for ${vehicleData.make}`;

        // Make a request to the YouTube Data API
        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/search",
          {
            params: {
              key: apiKey,
              q: query,
              part: "snippet",
              maxResults: 1,
              type: "video",
            },
          }
        );

        // Extract the video ID from the response
        const video = response.data.items[0];
        if (video) {
          setVideoId(video.id.videoId);
        }
      } catch (error) {
        console.error("Error fetching video:", error);
      }
    };

    if (repairOption && vehicleData) {
      fetchVideo();
    }
  }, [repairOption, vehicleData]);
  return (
    <div className="repair-video-container">
      {videoId && (
        <div>
          <h3>
            {repairOption === "Oil"
              ? `An ${repairOption} Repair Tutorial for your ${vehicleData.make}! `
              : `A ${repairOption} Repair Tutorial for your ${vehicleData.make}!`}
          </h3>
          <YouTube videoId={videoId} />
        </div>
      )}
    </div>
  );
};

export default RepairVideo;
