"use client";

import React from "react";
import ReactPlayer from "react-player";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { Media } from "@/payload-types";

const VideoPlayer = ({ media }: { media?: Media | string }) => {

  if (!media || typeof media === "string") {
    return <div>No Video</div>;
  }

  return (
    <ReactPlayer
      url={media.url!}
      playsinline
      loop
      muted
      playing
      controls={false}
      height="100%"
      width="100%"
      wrapper={({ children }) => (
        <div className={classNames(styles.bgVideo, "grid-content-full")}>
          {children}
        </div>
      )}
    />
  );
};

export default VideoPlayer;
