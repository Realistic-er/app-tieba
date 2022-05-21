export let mobileroute = [
    {
        path: '',
        name: 'firstpage',
        component: ()=>import('@/views/mobile/firstpage')
    },
    {
        path: '/advertisement',
        name: 'advertisement',
        component: ()=>import('@/views/mobile/advertisement'),
        children:[
            {
                path: '',
                name: 'home',
                component: ()=>import('@/views/mobile/home'),
                redirect:'/advertisement/recommend',
                children:[
                    {
                        path:'recommend',
                        name:'recommend',
                        component: ()=>import('@/views/mobile/recommend'),
                    },
                    {
                        path:'concern',
                        name:'concern',
                        component: ()=>import('@/views/mobile/concern'),
                    },
                    {
                        path:'hot',
                        name:'hot',
                        component: ()=>import('@/views/mobile/hot'),
                    },
                    {
                        path:'live',
                        name:'live',
                        component: ()=>import('@/views/mobile/live'),
                    },
                    {
                        path:'game',
                        name:'game',
                        component: ()=>import('@/views/mobile/game'),
                    },
                    {
                        path:'number',
                        name:'number',
                        component: ()=>import('@/views/mobile/number'),
                    },

                ]
            },
            {
                path: 'upgrade',
                name: 'upgrade',
                component: ()=>import('@/views/mobile/upgrade')
            },
            {
                path: 'tv',
                name: 'tv',
                component: ()=>import('@/views/mobile/tv')
            },
            {
                path: 'chat',
                name: 'chat',
                component: ()=>import('@/views/mobile/chat')
            },
            {
                path: 'user',
                name: 'user',
                component: ()=>import('@/views/mobile/user')
            }
        ]
    },
    {
        path: '/articledetail',
        name: 'articledetail',
        component: ()=>import('@/views/mobile/articledetail')
    },
    {
        path: '/bardetail',
        name: 'bardetail',
        component: ()=>import('@/views/mobile/bardetail')
    },
    {
        path: '/search',
        name: 'search',
        component: ()=>import('@/views/mobile/search')
    },

]