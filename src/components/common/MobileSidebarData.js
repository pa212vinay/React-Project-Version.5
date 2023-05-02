import React from 'react'
import { Icon } from '@iconify/react';

export const MobileSidebarData = [
    {
        title:'Dashboard',
        path:'/Revenue_Products',
        icon: <Icon icon="fa-solid:home" />,
        cname:'mSBNavText',
        lname: 'mSBNavLink'
    },
    {
        title:'Customer Service',
        path:'/Fulfillment',
        icon: <Icon icon="mdi:table" />,
        cname:'mSBNavText',
        lname: 'mSBNavLink'
    },
    {
        title:'Contact',
        path:'/',
        icon: <Icon icon="carbon:user-filled" />,
        cname:'mSBNavText',
        lname: 'mSBNavLink'
    }
]