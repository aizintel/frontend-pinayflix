import api from '../lib/axios';

import { defineStore } from 'pinia';

export const mostViewServices = defineStore('most-view', {


    state: () => ({
        isLoading: false,
        totalPages: "",
        videoList: []
    }),
    actions: {
        async getMostVideosByPage(page?: string): Promise<any> {
            this.isLoading = true;
            try {
                const response = await api.post('/most-view', { 'page': page });
                this.isLoading = false;
                this.totalPages = response.data.totalPages;
                this.videoList = response.data.data;
                return response.data;

            } catch (e) {
                console.log('Error in most-viewed service', e)
            }
        }
    }
});
