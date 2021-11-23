new Vue({
    el: '#app',
    data: {
        count: 0,
        clientX: 0,
        clientY: 0
    },
    methods: {
        dem: function(){
            return this.count += 1;
        },
        handleMouseMove: function(e)
        {
            // console.log(e.target.value);
            this.clientX = e.clientX;
            this.clientY = e.clientY;
        }
    }
});