const Vue = require('vue');

function createApp(temp) {
    const app = new Vue({
        template: temp
    });
    return app;
}


export {
    createApp
};