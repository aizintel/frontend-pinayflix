import api from '../lib/axios';

import { defineStore } from 'pinia';

export const homeServices = defineStore('home', {


  state: () => ({
    isLoading: false,
    videoList: []
  }),

  getters: {
    
  },


  actions: {
    async getHomeVideos() {
        this.isLoading = true;
        try {
         const response = await api.post('/home', { 'page': 1});
         this.isLoading = false;
         this.videoList = response.data.data;
         return response.data;

        } catch (e) {
            console.log('Error in home service', e)
        }
    }
  }
});
