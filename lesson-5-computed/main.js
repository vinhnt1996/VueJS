new Vue({
    el: '#app',
    data: {
        a: 0,
        b: 0,
        number: 20
    },
    methods: {
        // addA: function() {
        //     console.log("add A");
        //     return this.a + this.number;
        // },
        // addB: function() {
        //     console.log("add B");
        //     return this.b + this.number;
        // }
    },
    computed: {
        addA: function() {
            console.log("add A");
            return this.a + this.number;
        },
        addB: function() {
            console.log("add B");
            return this.b + this.number;
        }
    }
});