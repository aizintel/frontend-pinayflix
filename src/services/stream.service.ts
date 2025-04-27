import { defineStore } from 'pinia';

export const streamServices = defineStore('stream', {
    state: () => ({
        videoList: null as null | any
      }),
      actions: {
        setVideoList(video: any) {
          this.videoList = video
        }
      }
});
