import api from '../lib/axios';

import { defineStore } from 'pinia';

export const popularServices = defineStore('latest', {


  state: () => ({
    isLoading: false,
    videoList: [],
    totalPages: "",
  }),

  getters: {

  },


  actions: {
    async getPopularVideos() {
      this.isLoading = true;
      try {
        const response = await api.post('/most-popular', { 'page': 1 });
        this.isLoading = false;
        this.videoList = response.data.data;
        return response.data;

      } catch (e) {
        console.log('Error in home service', e)
      }
    },

    async getPopularVideosByPage(page?: string | number) {
      this.isLoading = true;
      try {
        const response = await api.post('/most-popular', { 'page': page });
        this.isLoading = false;
        this.totalPages = response.data.totalPages;
        this.videoList = response.data.data;
        return response.data;

      } catch (e) {
        console.log('Error in home service', e)
      }
    }
  }
});
