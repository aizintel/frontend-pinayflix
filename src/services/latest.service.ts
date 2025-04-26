import api from '../lib/axios';
import { defineStore } from 'pinia';

interface VideoItem {
  title: string;
  img: string;
  link: string;
  video: string;
  date: string;
  author: string;
}

export const latestServices = defineStore('latest', {
  state: () => ({
    isLoading: false,
    videoList: [] as VideoItem[] 
  }),

  getters: {
 
  },

  actions: {
    async getLatestVideos() {
      this.isLoading = true;
      try {
        const response = await api.post('/latest', { page: 1 });
        this.videoList = response.data.data;
        return response.data; 
      } catch (e) {
        console.log('Error in home service', e);
      } finally {
        this.isLoading = false;
      }
    }
  }
});
