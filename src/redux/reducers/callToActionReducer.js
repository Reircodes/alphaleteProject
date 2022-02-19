const initialState = [{
        id: 1,
        heading: 'BEST SELLERS',
        img: 'https://cdn.shopify.com/s/files/1/0667/0133/files/VeryTerryStudio_079-port_1400x.jpg?v=1643390863',
        paragraphText: 'Pieces that speak for themselves',
        video: false,
        leftPosition: true,
        colStart: 1,
        colEnd: 2,
        rowStart: 1,
        rowEnd: 2
    },
    {
        id: 2,
        heading: 'LAST CHANCE',
        img: 'https://cdn.shopify.com/s/files/1/0667/0133/files/lastchancejan22-highres_1400x.jpg?v=1643853035',
        paragraphText: 'Shop 30-50% off . Limited Stock.',
        video: false,
        leftPosition: false,
        colStart: 2,
        colEnd: 3,
        rowStart: 1,
        rowEnd: 3,
        center: true,
        color: 'blue'
    },
    {
        id: 3,
        heading: 'NEW ARRIVALS',
        img: 'https://cdn.shopify.com/s/files/1/0667/0133/files/very-terry-campaign-infinite-text-trans-port.mp4?v=164342299',
        paragraphText: '',
        video: true,
        leftPosition: true,
        colStart: 1,
        colEnd: 2,
        rowSpan: 2,
        rowStart: 2,
        rowEnd: 3
    },

]

const callToActionReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
    }
}

export default callToActionReducer;