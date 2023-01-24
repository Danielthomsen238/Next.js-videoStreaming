function VideoPlayer({ id }: { id: string }) {
  return (
    <video
      src={`/api/video?videoId=${id}`}
      width="800px"
      height="auto"
      controls
      autoPlay
      id="video-player"
    />
  );
}

export default VideoPlayer;
