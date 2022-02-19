const initialState = [{
        src: '	https://cdn.shopify.com/s/files/1/0667/0133/products/MayOGRevival_18_400x.jpg?v=1622868210',
        productName: 'OG REVIVAL LEGGING',
        price: '64.00',
        type: 'POWDER GREY',
        colors: 6,
        id: 1,
        newSales: true
    },
    {
        src: 'https://cdn.shopify.com/s/files/1/0667/0133/products/4U8A4565_400x.jpg?v=1639155413',
        productName: 'AMPLIFY LEGGING',
        price: '72.00',
        colors: 13,
        id: 2,
        type: 'MANDARIN',
        newSales: true

    },
    {
        src: '	https://cdn.shopify.com/s/files/1/0667/0133/products/4U8A4515_400x.jpg?v=1639155430',
        productName: 'AMPLIFY LEGGING',
        price: '72.00',
        colors: 13,
        id: 3,
        type: 'NOT GOLD',
        newSales: true
    },
]

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state;

    }
}

export default productReducer;