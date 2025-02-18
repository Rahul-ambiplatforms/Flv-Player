import React, { useEffect, useRef } from "react";
import flvjs from "flv.js";

const FlvPlayer = ({ url }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        // Check if FLV.js is supported
        if (flvjs.isSupported()) {
            const player = flvjs.createPlayer({
                type: "flv",
                url: url,
            });

            // Attach the video player to the video element
            player.attachMediaElement(videoRef.current);
            player.load();
            player.play();

            // Cleanup the player when the component unmounts
            return () => {
                player.destroy();
            };
        } else {
            console.error("FLV.js is not supported in this browser.");
        }
    }, [url]);

    return (
        <div>
            <video ref={videoRef} controls autoPlay style={{ width: "100%", height: "100%" }} />
        </div>
    );
};

export default FlvPlayer;
