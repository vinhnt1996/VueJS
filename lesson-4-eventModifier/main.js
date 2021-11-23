new Vue({
    el: '#app',
    data: {
        count: 0,
        clientX: 0,
        clientY: 0
    },
    methods: {
        submitForm: function(e) {
           console.log(e.target);
        },
        dem: function() {
            this.count += 1;
        },
        handleMouseMove: function (e)
        {
            this.clientX = e.clientX;
            this.clientY = e.clientY;
        },
        handleMouseMoveChild: function(e)
        {
            e.stopPropagation();
        }
    }
});