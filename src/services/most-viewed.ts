import api from '../lib/axios';

import { defineStore } from 'pinia';

export const mostViewServices = defineStore('most-view', {


    state: () => ({
        isLoading: false,
        totalPages: "",
        videoList: []
    }),

    getters: {

    },


    actions: {
        async getMostViewvideos() {
            this.isLoading = true;
            try {
                const response = await api.post('/most-view', { 'page': 1 });
                this.isLoading = false;
                this.videoList = response.data.data;
                return response.data;

            } catch (e) {
                console.log('Error in home service', e)
            }
        },

        async getMostVideosByPage(page?: string) {
            this.isLoading = true;
            try {
                const response = await api.post('/most-view', { 'page': page });
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
