import SyncedVideosRow from "../../../../utils/synced_videos"
import DisplayImage from "../../../../utils/display_image"

export default function BackgroundSubtraction() {
  const base = import.meta.env.BASE_URL

  return (
    <>
      <DisplayImage
        path="assets/pictures/single_object_tracking/heuristical_approaches/backround_subtraction.svg"
        width="80%"
      />

      <SyncedVideosRow
        sources={[
          `${base}assets/videos/single_object_tracking/heuristical_approaches/input.mp4`,
          `${base}assets/videos/single_object_tracking/heuristical_approaches/background_subtraction_mask.mp4`,
          `${base}assets/videos/single_object_tracking/heuristical_approaches/background_subtraction.mp4`,
        ]}
        titles={["Input Video", "Mask", "Mask overlayed"]}
        n={3}
        gap={0}
        width="80%"
      />
    </>
  )
}