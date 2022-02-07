import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import PlayerMetadata from '../../components/PlayerMetadata/PlayerMetadata';

import { MediaContext } from '../../config/context/MediaContext';

const Player = () => {
  const videoRef = useRef(); // Ref to the <video /> tag in DOM.
  const playerRef = useRef(); // Ref to handle instance returned by video.js
  const [media, setMedia] = useState();
  const [isPrepared, setPrepared] = useState(false);
  const { videoId } = useParams();
  const navigate = useNavigate();
  const { mediaById } = useContext(MediaContext);

  useEffect(() => {
    const currentMedia = mediaById(videoId)
    setMedia(currentMedia)
  }, [videoId, mediaById]);

  /* Cleanup the player after component unmounting */
  useEffect(() => {
    const video = videoRef.current;
    return () => {
      if (!video) {
        return;
      }

      video?.dispose?.();
      videoRef.current = null;
      setPrepared(false);
    }
  }, [])

  useEffect(() => {
    if (!media || playerRef.current || !videoRef.current) {
      return;
    }

    const { mediaUrl: src, image: poster } = media;
    playerRef.current = videojs(
      videoRef.current,
      {
        autoplay: true,
        controls: true,
        controlBar: {
          // Full options list: https://docs.videojs.com/control-bar_control-bar.js.html.
          children: [
            "playToggle",
            "volumePanel",
            "currentTimeDisplay",
            "timeDivider",
            "durationDisplay",
            "progressControl",
            "liveDisplay",
            "seekToLive",
            "remainingTimeDisplay",
            "customControlSpacer",
            "playbackRateMenuButton"
          ],
          volumePanel: { inline: false },
        },
        fluid: true,
        responsive: true,
        sources: [{
          src,
          type: 'video/mp4'
        }],
        poster
      },
      () => setPrepared(true)
    );
  }, [media]);

  useEffect(() => {
    if(isPrepared && videoRef.current) {
      videoRef.current?.play();
      playerRef.current?.enterFullWindow?.()
    }
  }, [isPrepared])

  const onEnd = () => navigate(-1);

  useEffect(() => {
    if (!playerRef.current) {
      return;
    }

    playerRef.current?.on?.('ended', onEnd);
    
    return () => {
      playerRef.current?.off?.('ended', onEnd);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPrepared])

  return (
    <div data-vjs-player="">
      <PlayerMetadata media={media} />
      <video ref={videoRef} className="video-js vjs-big-play-centered" />
    </div>
  )
};

export default Player;
