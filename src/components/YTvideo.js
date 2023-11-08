import React, { useState, useEffect } from "react";
import axios from "axios";
import YouTube from "react-youtube";

const RepairVideo = ({ repairOption }) => {
  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    // Function to fetch the video based on the repair option
    const fetchVideo = async () => {
      try {
        const apiKey = "AIzaSyBuTLhiQV8e8hplI1xX2Jv_HYhOS5kkRf8"; // Replace with your YouTube Data API key

        // Modify the query based on the selected repairOption
        const query = `${repairOption} repair tutorial`;

        // Make a request to the YouTube Data API
        const response = await axios.get("https://www.googleapis.com/youtube/v3/search", {
          params: {
            key: apiKey,
            q: query,
            part: "snippet",
            maxResults: 1, // Get the first video
            type: "video",
          },
        });

        // Extract the video ID from the response
        const video = response.data.items[0];
        if (video) {
          setVideoId(video.id.videoId);
        }
      } catch (error) {
        console.error("Error fetching video:", error);
      }
    };

    if (repairOption) {
      fetchVideo();
    }
  }, [repairOption]);

  return (
    <div className="repair-video-container">
      {videoId && (
        <div>
          <h3>{repairOption} Repair Tutorial</h3>
          <YouTube videoId={videoId} />
        </div>
      )}
    </div>
  );
};

export default RepairVideo;