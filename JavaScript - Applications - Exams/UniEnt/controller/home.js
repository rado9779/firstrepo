import commonPartials from './partials.js';
import { setHeader } from './auth.js';
import { getAll } from '../models/events.js';


export function getHome(ctx) {
    setHeader(ctx);
    getAll()
        .then(response => {
            const events = response.docs.map(x => x = { ...x.data(), id: x.id });
            ctx.events = events;
            ctx.loadPartials(commonPartials).partial('./view/home.hbs');
        })
}