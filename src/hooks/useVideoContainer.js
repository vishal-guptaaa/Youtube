import { useEffect } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/contants";
import { addVideos } from "../utils/cardSlice";
import { useDispatch } from "react-redux";


const useVideoContainer = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        getVideos();
    }, [])

      const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEO_API);
        const json = await data.json();
        dispatch(addVideos(json.items));
      }
}

export default useVideoContainer;