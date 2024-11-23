import {createRouter, createWebHistory} from "vue-router";

import LoginComponent from "../users/pages/login.component.vue";
import RegisterComponent from "../users/pages/register.component.vue";
import MoodComponent from "../users/pages/mood.component.vue";


import MainWelcomePage from '../home/pages/main-welcome-page.vue';
import MainPerfilPage from "../home/pages/main-perfil-page.vue";
import MainPageComponent from "../public/pages/main-page.component.vue";
/*
import ListasComponent from "../public/pages/listas.component.vue";
import AuthLayoutComponent from "../login/pages/auth-layout.component.vue";
*/


import AvailableContent from '../explorer/pages/available-content.component.vue';
import RecentContent from '../explorer/pages/recent-content.component.vue';


import AuthLayoutComponent from "../users/pages/auth-layout.component.vue";
import EventsComponent from "../events/pages/events-page.component.vue";
import EventPage from "../events/pages/event-page.component.vue";
import ForumPage from "../forum/pages/forum-page.vue";
import ListView from "../lists/components/ListView.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/main',
            component: MainPageComponent,
            children: [

                { path: '/explorar/contenido-disponible', component: AvailableContent },
                { path: '/explorar/contenido-reciente', component: RecentContent },

                {path: '/home', component: MainWelcomePage, meta: {title: 'Home'}},
                {path: '/perfil', component: MainPerfilPage, meta: {title: 'Perfil'}},
                {path:'/forum', component: ForumPage, meta: {title: 'Foro'}},
                {path:'/list', component: ListView, meta: {title: 'Listas'}},

                {path: '/events', component: EventsComponent, meta: {title: 'Eventos'}},
                {path: '/event/:id', component: EventPage, meta: {title: 'Evento'}},
                {path: '/event', component: EventPage, meta: {title: 'Evento'}},
                { path: '/:pathMatch(.*)*', redirect: '/login' },


            ]
        },
                //{path: '/list', component: ListasComponent, meta: {title: 'Listas'}},

        {
            path: '/register',
            component: AuthLayoutComponent,
            children: [
                {path: '/register', component: RegisterComponent, meta: {title: 'Register'}},
            ]
        },
        {
            path: '/login',
            component: AuthLayoutComponent,
            children: [
                {path: '/login', component: LoginComponent, meta: {title: 'Login'}},
            ]
        },
        {
            path: '/mood',
            component: AuthLayoutComponent,
            children: [
                {path: '/mood', component: MoodComponent, meta: {title: 'Mood'}},
            ]
        },




        /*
        {path: '/home', component: HomeComponent, meta: {title: 'Home'}},
        {path: '/', redirect: '/home'},
        {path: '/login' , component: LoginComponent, meta: {title: 'Login'}},
        {path: '/register', component: RegisterComponent, meta: {title: 'Register'}},
        {path: '/mood', component: MoodComponent, meta: {title: 'Mood'}},
        {path: '/main', component: MainPageComponent, meta: {title: 'Main Page'}},
        {path: '/explorer', component: ExplorarComponent, meta: {title: 'Explorar'}},
        {path: '/list', component: ListasComponent, meta: {title: 'Listas'}},

            */
    ],



});

router.beforeEach((to, from, next) => {
    let baseTitle = 'Zenflicks app';
    document.title = `${baseTitle} | ${to.meta['title']}`;
    next();
});

export default router;
