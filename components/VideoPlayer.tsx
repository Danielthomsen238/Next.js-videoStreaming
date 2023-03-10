function VideoPlayer({ id }: { id: string }) {
  return (
    <>
      <h2>Video</h2>
      <video
        src={`/videos/${id}.mp4`}
        width="800px"
        height="auto"
        controls
        autoPlay
        id="video-player"
      />
    </>
  );
}

export default VideoPlayer;
