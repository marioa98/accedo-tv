import { useCallback, useContext, useEffect, useState } from "react";
import constants from "../config/constants";
import { MediaContext } from "../config/context/MediaContext";
import { add, get } from "../config/storage";

const { storage } = constants;

const useVideoHistory = () => {
  const { medias } = useContext(MediaContext)
  const [historyItems, setHistoryItems] = useState([]);

  const save = (videoId) => {
    const currentHistory = get(storage.videoHistory) || [];
    // Append at front the most recent video id.
    const history = [videoId, ...currentHistory];
    // Filters repeated values
    add(storage.videoHistory, JSON.stringify([...new Set(history)]));
  }

  const getHistory = useCallback(() => {
    const videoIds = get(storage.videoHistory) || [];
    // Sort the video objects based on the id's order
    const history = medias
      .filter(({ id }) => videoIds.includes(id))
      .sort((a, b) =>
        videoIds.indexOf(a.id) - videoIds.indexOf(b.id)
      );
    setHistoryItems(history);
  }, [medias]);

  useEffect(() => {
    getHistory();
  }, [getHistory, medias])

  return { save, historyItems };
};

export default useVideoHistory;
