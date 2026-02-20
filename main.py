import os
import cv2
from background_subtraction import background_subtraction_videos
from frame_differencing import frame_differencing_videos
from three_frame_differencing import three_frame_differencing_videos
from single_gaussian import single_gaussian_videos


def main():
    input_video_path = os.path.join("videos", "input.mp4")
    background_subtraction_videos(input_video_path=input_video_path, folder="videos", output_name="background_subtraction")
    frame_differencing_videos(input_video_path=input_video_path, folder="videos", output_name="frame_differencing")
    three_frame_differencing_videos(input_video_path=input_video_path, folder="videos", output_name="three_frame_differencing")
    single_gaussian_videos(input_video_path=input_video_path, folder="videos", output_name="single_gaussian")

if __name__ == "__main__":
    main()