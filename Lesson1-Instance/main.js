var vueInstance = new Vue({
    el: '#app',
    data: {
       name: 'Nguyễn Thiện Vinh',
       language: 'PHP',
       job: 'Dev',
       gender: 'Male',
       age: 15
    },
    methods: {
        say: function(text) {
            return 'Hello' + ' '+ text;
        }
    }

});
setTimeout(function(){
    vueInstance.language = 'Javascript'
}, 3000);