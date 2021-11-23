new Vue({
    el: '#app',
    data: {
        title: 'Hình ảnh đẹp',
        brand: 'Từ nhà sản xuất',
        url: "https://1.bp.blogspot.com/-hN0NCoAmEDY/X8z1OcRjXmI/AAAAAAAAlc0/hHqbHzqOPhIABiVomzpYacPeEufV816QQCNcBGAsYHQ/w350-h265-p-k-no-nu/hinh-nen-may-cuc-dep.jpg",
        target: '_target',
        price: 12000
    },
    methods: {
        formatPrice: function() {
            var number = this.price;
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
        }
    }

});