import api from '../lib/axios';

import { defineStore } from 'pinia';

export const longestServices = defineStore('longest', {


    state: () => ({
        isLoading: false,
        videoList: []
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
        }
    }
});
