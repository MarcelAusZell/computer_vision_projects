import os
import cv2
from background_subtraction import background_subtraction_videos
from frame_differencing import frame_differencing_videos


def main():
    input_video_path = os.path.join("videos", "input.mp4")
    background_subtraction_videos(input_video_path=input_video_path, folder="videos", output_name="background_subtraction")
    frame_differencing_videos(input_video_path=input_video_path, folder="videos", output_name="frame_differencing")

if __name__ == "__main__":
    main()