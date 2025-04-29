import api from '../lib/axios';
import { defineStore } from 'pinia';

export const homeServices = defineStore('home', {
  state: () => ({
    isLoading: false,
    videoList: [],
    totalPages: "",
  }),

  getters: {
  },

  actions: {
    async getHomeVideosByPage(page?: string): Promise<any> {
      this.isLoading = true;
      try {
        const response = await api.post('/home', { 'page': page });
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
