new Vue({
    el: '#app',
    data: {
        isActive: true,
        isError: false
    },
    methods: {
        changeActive: function() {
            console.log("changeActive");
            this.isActive = !this.isActive;
        },
        changeError: function() {
            this.isError = !this.isError;
        }
    },
    computed: {
        object: function() {
            return {
                active: this.isActive,
                error: this.isError
            };
        }
    }
});