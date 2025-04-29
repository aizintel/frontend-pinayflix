import api from '../lib/axios';

import { defineStore } from 'pinia';

export const longestServices = defineStore('longest', {


    state: () => ({
        isLoading: false,
        videoList: [],
        totalPages: ""
    }),

    actions: {

        async getLongestVideosByPage(page?: string): Promise<any> {
            this.isLoading = true;
            try {
                const response = await api.post('/longest', { 'page': page });
                this.isLoading = false;
                this.totalPages = response.data.totalPages;
                this.videoList = response.data.data;
                return response.data;

            } catch (e) {
                console.log('Error in longest service', e)
            }
        }
    }
});
