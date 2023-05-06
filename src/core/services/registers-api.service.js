import http from '@/core/services/http-common';
export class RegistersApiService {
    create(data) {
        return http.post('/registers', data);
    }
    getAll() {
        return http.get('/registers');
    }
}

