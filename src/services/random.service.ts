import api from '../lib/axios';

import { defineStore } from 'pinia';

export const randomServices = defineStore('random', {


    state: () => ({
        isLoading: false,
        totalPages: "",
        videoList: []
    }),

    actions: {
        async getRandomVideosByPage(page?: string): Promise<any> {
            this.isLoading = true;
            try {
                const response = await api.post('/random', { 'page': page });
                this.isLoading = false;
                this.totalPages = response.data.totalPages;
                this.videoList = response.data.data;
                return response.data;

            } catch (e) {
                console.log('Error in random service', e)
            }
        }
    }
});
