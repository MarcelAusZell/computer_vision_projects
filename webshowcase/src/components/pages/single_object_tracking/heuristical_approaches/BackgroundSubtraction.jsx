import SyncedVideosRow from "../../../../utils/synced_videos"
import DisplayImage from "../../../../utils/display_image"
import CodeBlock from "../../../../utils/display_code"
import Latex from "../../../../utils/diplay_latex"


export default function BackgroundSubtraction() {
  const base = import.meta.env.BASE_URL

  return (
    <>
      <DisplayImage
        path="assets/pictures/single_object_tracking/heuristical_approaches/backround_subtraction.svg"
        width="100%"
      />
      <CodeBlock
        width="100%"
        language="python"
        code={`import cv2
input_video = cv2.VideoCapture("./inputs.mp4")
frame_ok, frame = input_video.read()`} />
      <SyncedVideosRow
        sources={[
          `${base}assets/videos/single_object_tracking/heuristical_approaches/input.mp4`,
          `${base}assets/videos/single_object_tracking/heuristical_approaches/background_subtraction_mask.mp4`,
          `${base}assets/videos/single_object_tracking/heuristical_approaches/background_subtraction.mp4`,
        ]}
        titles={["Input Video", "Mask", "Mask overlayed"]}
        n={3}
        gap={0}
        width="100%"
      />

      <div className="mt-3">
        <Latex>
          {"\\text{Attention}(\\mathbf{Q},\\mathbf{K},\\mathbf{V}) = " +
            "\\text{softmax}\\left(" +
            "\\frac{\\mathbf{QK}^\\top}{\\sqrt{d_k}}" +
            "\\right)\\mathbf{V}"}
        </Latex>
        <Latex block>
          {"\\text{Attention}(\\mathbf{Q},\\mathbf{K},\\mathbf{V}) = " +
            "\\text{softmax}\\left(" +
            "\\frac{\\mathbf{QK}^\\top}{\\sqrt{d_k}}" +
            "\\right)\\mathbf{V}"}
        </Latex>
      </div>
    </>
  )
}