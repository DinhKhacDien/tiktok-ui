//layouts
import { HeaderOnly } from '~/component/Layout';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
// routes no login
export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/:nickname', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];
export const privateRoutes = []; // routes to login
