import http from '@/core/services/http-common';
export class PublicationApiService {
    nuevaPubli(data){
        return http.post('/publication', data);
    }
    getAll() {
        return http.get('/publication');
    }
}
