import api from '../lib/axios';

import { defineStore } from 'pinia';

export const longestServices = defineStore('longest', {


    state: () => ({
        isLoading: false,
        videoList: [],
        totalPages: ""
    }),

    getters: {

    },


    actions: {
        async getMostlongestVideos() {
            this.isLoading = true;
            try {
                const response = await api.post('/longest', { 'page': 1 });
                this.isLoading = false;
                this.videoList = response.data.data;
                return response.data;

            } catch (e) {
                console.log('Error in home service', e)
            }
        },
        async getMostLongestVideosByPage(page?: string) {
            this.isLoading = true;
            try {
                const response = await api.post('/most-longest', { 'page': page });
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
