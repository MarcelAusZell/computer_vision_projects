import os
import numpy as np
import cv2
import matplotlib.pyplot as plt
from utils import tqdm, overlay_frame

def pixel_classification_for_frame(frame, mean, variance, T):
  detections = np.abs(frame - mean) > T * np.sqrt(variance)
  return np.uint8(detections) * 255

def single_gaussian_videos(input_video_path, folder, output_name):
  print("Single Object Detection: Single Gaussian")
  input_video = cv2.VideoCapture(input_video_path)
  width = int(input_video.get(cv2.CAP_PROP_FRAME_WIDTH))
  height = int(input_video.get(cv2.CAP_PROP_FRAME_HEIGHT))
  frame_count = int(input_video.get(cv2.CAP_PROP_FRAME_COUNT))
  fps = float(input_video.get(cv2.CAP_PROP_FPS))

  video_writer = cv2.VideoWriter(
    filename=os.path.join(folder, output_name + ".mp4"),
    fourcc=cv2.VideoWriter_fourcc(*"avc1"),
    fps=fps,
    frameSize=(width, height),
    isColor=True,
  )

  video_writer_mask = cv2.VideoWriter(filename=os.path.join(folder, output_name + "_mask.mp4"),
                                fourcc=cv2.VideoWriter_fourcc(*"avc1"),
                                fps=fps,
                                frameSize=(width, height),
                                isColor=False)

  N = 100
  first_N_frames = []
  for frame_idx in tqdm(range(N)):
    frame_ok, frame = input_video.read()
    if frame_ok:
      frame_intensities = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
      first_N_frames.append(frame_intensities)

  input_video.set(cv2.CAP_PROP_POS_FRAMES, 0)

  first_N_frames = np.array(first_N_frames)
  mean = first_N_frames.mean(axis=0)
  variance = first_N_frames.var(axis=0)

  for frame_idx in tqdm(range(frame_count)):
    frame_ok, current_frame = input_video.read()
    if not frame_ok:
      break

    frame_intensities = cv2.cvtColor(current_frame, cv2.COLOR_BGR2GRAY)
    detections = pixel_classification_for_frame(frame_intensities, mean, variance, 15)
    video_writer.write(overlay_frame(current_frame, detections, [0, 0, 255], 0.6))
    video_writer_mask.write(detections)

    cv2.imshow("Single Gaussian", overlay_frame(current_frame, detections, [0, 0, 255], 0.6))
    if cv2.waitKey(1) & 0xFF == ord('q'):
      break

  cv2.destroyAllWindows()
  input_video.release()
  video_writer.release()
  video_writer_mask.release()


