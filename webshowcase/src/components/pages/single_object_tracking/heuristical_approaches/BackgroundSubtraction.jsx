import SyncedVideosRow from "../../../../utils/synced_videos"

export default function BackgroundSubtraction() {
  const base = import.meta.env.BASE_URL

  return (
    <>
      <img
        width={800}
        src={`${base}assets/pictures/single_object_tracking/heuristical_approaches/backround_subtraction.svg`}
        alt=""
      />

      <SyncedVideosRow
        sources={[
          `${base}assets/videos/single_object_tracking/heuristical_approaches/input.mp4`,
          `${base}assets/videos/single_object_tracking/heuristical_approaches/background_subtraction_mask.mp4`,
          `${base}assets/videos/single_object_tracking/heuristical_approaches/background_subtraction.mp4`,
        ]}
        n={3}
        width={320}
        height={240}
      />
    </>
  )
}