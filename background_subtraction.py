import os
import cv2
import numpy as np
from utils import overlay_frame, tqdm

def background_subtraction(background_image, current_frame, threshold):
  diff = current_frame.astype(np.float32) - background_image.astype(np.float32) # [-255,255]^3
  diff = np.abs(diff) / 255.0                                                   # [0,1]^3
  diff_intensity = np.sum(diff, axis=2)                                         # [0,3]
  diff_intensity = diff_intensity > threshold                                   # {0,1}
  return diff_intensity.astype(np.uint8) * 255

def background_subtraction_videos(input_video_path, folder, output_name):
  input_video = cv2.VideoCapture(input_video_path)
  width = int(input_video.get(cv2.CAP_PROP_FRAME_WIDTH))
  height = int(input_video.get(cv2.CAP_PROP_FRAME_HEIGHT))
  frame_count = int(input_video.get(cv2.CAP_PROP_FRAME_COUNT))
  fps = float(input_video.get(cv2.CAP_PROP_FPS))

  video_writer = cv2.VideoWriter(filename=os.path.join(folder, output_name + ".mp4"),
                                 fourcc=cv2.VideoWriter_fourcc(*"avc1"),
                                 fps=fps,
                                 frameSize=(width, height),
                                 isColor=True)
  video_writer_mask = cv2.VideoWriter(filename=os.path.join(folder, output_name + "_mask.mp4"),
                                 fourcc=cv2.VideoWriter_fourcc(*"avc1"),
                                 fps=fps,
                                 frameSize=(width, height),
                                 isColor=False)

  frame_ok, background_frame = input_video.read()

  for _ in tqdm(range(frame_count)):
    frame_ok, current_frame = input_video.read()
    if not frame_ok:
        break

    detections = background_subtraction(background_frame, current_frame, 0.7)  


    video_writer.write(overlay_frame(current_frame, detections, [0, 0, 255], 0.6))
    video_writer_mask.write(detections)

  input_video.release()
  video_writer.release()
  video_writer_mask.release()