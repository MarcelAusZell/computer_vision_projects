import DisplayVideo from "../../../../utils/display_video"
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


      <DisplayVideo
        source={[
          `${base}assets/videos/single_object_tracking/heuristical_approaches/background_subtraction.mp4`,
        ]}
        title="Background Subtraction"
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