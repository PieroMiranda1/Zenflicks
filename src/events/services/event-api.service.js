import http from "../../shared/services/http-common.js";

export class EventApiService{

    createEvent(eventResource){
        return http.post('/events', eventResource);
    }

    getEvent(){
        return http.get('/events');
    }

    getEventbyId(id){
        return http.get(`/events?eventId=${id}`);
    }


}