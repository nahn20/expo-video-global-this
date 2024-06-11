import { VideoView, useVideoPlayer } from 'expo-video'

const Video = () => {
  const player = useVideoPlayer(
    // https://gist.github.com/jsturgis/3b19447b304616f18657
    // This is just the first public video I found without CORS restrictions
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    (player) => {
      player.play()
    }
  )
  return (
    <>
      <VideoView
        player={player}
        style={{
          width: 400,
          height: 300,
        }}
      />
    </>
  )
}
export default Video
