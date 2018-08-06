Page({
    data: {
        imgUrls: [
            '/image/b1.jpg',
            '/image/b2.jpg',
            '/image/b3.jpg'
        ],
        indicatorDots: false,
        autoplay: false,
        interval: 3000,
        duration: 800,
        newest:[
            {
                src:'/image/s4.png',
                title:'瓜子 100g',
                price:'0.01'
            },{
                src:'/image/s4.png',
                title:'瓜子 100g',
                price:'0.01'
            },{
                src:'/image/s4.png',
                title:'瓜子 100g',
                price:'0.01'
            },{
                src:'/image/s4.png',
                title:'瓜子 100g',
                price:'0.01'
            },{
                src:'/image/s4.png',
                title:'瓜子 100g',
                price:'0.01'
            }
        ]
    },

    onShow: function () {
        // console.log(11111);


        // wx.request({
        //     url: 'index.php', //仅为示例，并非真实的接口地址
        //     data: {
        //        x: '' ,
        //        y: ''
        //     },
        //     header: {
        //         'content-type': 'application/json' // 默认值
        //     },
        //     success: function(res) {
        //       console.log(res.data)
        //     }
        //   })

    }

})