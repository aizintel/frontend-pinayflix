import api from '../lib/axios';

import { defineStore } from 'pinia';

export const latestServices = defineStore('latest', {
  state: () => ({
    isLoading: false,
    totalPages: "",
    videoList: []
  }),

  actions: {
    async getLatestVideosByPage(page?: string): Promise<any> {
      this.isLoading = true;
      try {
        const response = await api.post('/latest', { 'page': page });
        this.isLoading = false;
        this.totalPages = response.data.totalPages;
        this.videoList = response.data.data;
        return response.data;

      } catch (e) {
        console.log('Error in latest service', e)
      }
    }
  }
});
