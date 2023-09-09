if(process.env.NODE_ENV !== "production") {
    require('dotenv').config()
}

const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
const Product = require('./models/product')

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    console.log('database connected')
})

const func = async () => {
    await Product.deleteMany({})
    await Product.insertMany([
        {
            title: 'MSI Gaming Laptop 17.3 inch',
            price: 1900,
            images: [{url: 'https://asset.msi.com/resize/image/global/product/product_7_20190521134135_5ce38f8f57d72.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png',
            filename: 'MSI Gaming Laptop 17.3 inch'}],
            description: 'High-end gaming laptop, RTX 3070, CORE i9 XM670H, 32GB RAM, 2TB total storage',
            author: '6456008c9c247896704e8da1',
            reviews: [],
            producer: 'MSI',
            quantity: 5,
            category: 'electronics'
        },
        {
            title: 'Alienware Gaming Laptop',
            price: 2000,
            images: [{url: 'https://media.cnn.com/api/v1/images/stellar/prod/230112110508-gaming-laptops-2023-alienware-lead.jpg?c=original',
            filename: 'Alienware Gaming Laptop'}],
            description: 'High-end gaming laptop by Alienware, RTX 4070, CORE i7 9900H, 2TB total storage, 17.3 inch 144hz display',
            author: '6456008c9c247896704e8da1',
            reviews: [],
            producer: 'Alienware',
            quantity: 5,
            category: 'electronics'
        },
        {
            title: 'Flat Screen TV',
            price: 700,
            images: [{url: 'https://www.lg.com/us/images/tvs/md05610732/gallery/medium02.jpg', filename: 'Flat Screen TV'}],
            description: 'Flat screen TV, just a modern television set, manufactured by LG',
            author: '6456008c9c247896704e8da1',
            reviews: [],
            producer: 'LG',
            quantity: 5,
            category: 'electronics'
        },
        {
            title: 'The Wire: The Complete Series DVD',
            price: 79,
            images: [{url: 'https://cdn.hmv.com/r/w-640/hmv/files/ba/bacf620d-52b7-4d69-ad15-8b622bc7d1f0.jpg',
            filename: 'The Wire: The Complete Series DVD'}],
            description: `One of the best series HBO has produced, critically acclaimed, very highly rated.
                         Explores early 2000s Baltimore drug trade from the perspective of cops and drug dealers alike`,
            author: '6456008c9c247896704e8da1',
            reviews: [],
            producer: 'HBO',
            quantity: 5,
            category: 'digital entertainment'
        },
        {
            title: 'Bananas (per kg)',
            price: 3,
            images: [{url: 'https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bunch-of-bananas-67e91d5.jpg',
            filename: 'Bananas'}],
            description: `Bananas, as in the fruit`,
            author: '6456008c9c247896704e8da1',
            reviews: [],
            producer: 'Dhole Corporation',
            quantity: 55,
            category: 'fruit & veggie'
        },
        {
            title: 'Coke',
            price: 1,
            images: [{url: 'https://kentstreetcellars.com.au/cdn/shop/files/coke-can_7bf866c9-bffc-449d-a173-de324ac47905_2048x.png?v=1687840069',
            filename: 'Coke'}],
            description: `Classic Coca-Cola`,
            author: '6456008c9c247896704e8da1',
            reviews: [],
            producer: 'Coca-Cola',
            quantity: 55,
            category: 'food & drink'
        },
        {
            title: 'Apples (per kg)',
            price: 4,
            images: [{url: 'https://www.butter-n-thyme.com/wp-content/uploads/2022/11/Sour-Green-Apples.jpg',
            filename: 'Apples'}],
            description: `Green apples, sweet and sour taste`,
            author: '6456008c9c247896704e8da1',
            reviews: [],
            producer: 'Dhole Corporation',
            quantity: 55,
            category: 'fruit & veggie'
        },
        {
            title: 'Lettuce (per kg)',
            price: 3,
            images: [{url: 'https://images.everydayhealth.com/images/healthy-salad-greens-ranked-09-romaine-alt-1440x810.jpg',
            filename: 'Lettuce'}],
            description: `Just lettuce, great for putting in sandwiches`,
            author: '6456008c9c247896704e8da1',
            reviews: [],
            producer: 'Dhole Corporation',
            quantity: 55,
            category: 'fruit & veggie'
        },
        {
            title: 'Pickles',
            price: 8,
            images: [{url: 'https://turkishfoodbasket.com/cdn/shop/products/0000451_berrak-salatalik-tursu-1-no-720-ml-brut-cam_550.png?v=1612491216',
            filename: 'Pickles'}],
            description: `Salatalik pickles, very tasty choice`,
            author: '6456008c9c247896704e8da1',
            reviews: [],
            producer: 'Salatalik',
            quantity: 55,
            category: 'fruit & veggie'
        },
        {
            title: 'Ham Sandwich',
            price: 4,
            images: [{url: 'https://insanelygoodrecipes.com/wp-content/uploads/2023/01/Healthy-Ham-and-Cheese-Sandwich-with-Tomatoes-and-Lettuce-500x375.jpg',
            filename: 'Ham Sandwich'}],
            description: `Delicious, ham sandwich produced in-house`,
            author: '6456008c9c247896704e8da1',
            reviews: [],
            producer: 'Zorgon Ecommerce',
            quantity: 55,
            category: 'food & drink'
        },
        {
            title: 'Slim Jim',
            price: 35,
            images: [{url: 'https://bjs.scene7.com/is/image/bjs/43160?$bjs-Zoom$',
            filename: 'Slim Jim'}],
            description: `Smoked snack sticks, made with beef and manufactured in America, delicious`,
            author: '6456008c9c247896704e8da1',
            reviews: [],
            producer: 'Conagra Brands',
            quantity: 55,
            category: 'food & drink'
        },
        {
            title: 'Dr Pepper',
            price: 3,
            images: [{url: 'https://californiaranchmarket.com/cdn/shop/products/000355_568234ca-45de-49f0-9e9c-65127b46be21.jpg?v=1680240542',
            filename: 'Dr Pepper'}],
            description: `It is an American soda / pop, sweet & delicious`,
            author: '6456008c9c247896704e8da1',
            reviews: [],
            producer: 'Keurig Dr Pepper',
            quantity: 55,
            category: 'food & drink'
        },
        {
            title: "Reese's Chocolate Bar",
            price: 15,
            images: [{url: 'https://i5.walmartimages.com/seo/REESE-S-Milk-Chocolate-filled-with-REESE-S-Peanut-Butter-Giant-Candy-7-37-oz-Bar-15-Pieces_c67df508-b1f7-49e0-a063-0d3d1626348e.5e253a1fdac1bf8f8e673c2d82dfb227.jpeg',
            filename: "Reese's Chocolate Bar"}],
            description: `You might've heard of Reese's peanutbutter cups, this chocolate producer is awesome`,
            author: '6456008c9c247896704e8da1',
            reviews: [],
            producer: 'The Hershey Company',
            quantity: 55,
            category: 'food & drink'
        },
        {
            title: 'Mogu Mogu Soft Drink',
            price: 4,
            images: [{url: 'https://ohfreshdelivers.com/cdn/shop/products/mogu_strawberry_grande.jpg?v=1631797277',
            filename: 'Mogu Mogu Soft Drink'}],
            description: `This is a Japanese soft drink product with "nata de coco" inside, jello-like floaters`,
            author: '6456008c9c247896704e8da1',
            reviews: [],
            producer: 'Sappe',
            quantity: 55,
            category: 'food & drink'
        },
        {
            title: 'Tomato (per kg)',
            price: 3,
            images: [{url: 'https://media.istockphoto.com/id/1419141035/photo/cut-red-tomato-close-up-in-a-box.webp?b=1&s=170667a&w=0&k=20&c=o1dNGNHe54B1O11Ynce-WNQs-FnPx8gsF0NERTjmJC4=',
            filename: 'Tomato'}],
            description: `Just tomato`,
            author: '6456008c9c247896704e8da1',
            reviews: [],
            producer: 'Dhole Corporation',
            quantity: 55,
            category: 'fruit & veggie'
        },
        {
            title: 'Gaming PC',
            price: 1500,
            images: [{url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1648585789-51rGP3HU3HL._SL500_.jpg?crop=1xw:1.00xh;center,top&resize=980:*',
            filename: 'Gaming PC'}],
            description: `Gaming PC, high-end, RTX 2070 graphics, Intel Core i9 HX9880, 32GB RAM, 4TB storage`,
            author: '6456008c9c247896704e8da1',
            reviews: [],
            producer: 'XM Tech',
            quantity: 55,
            category: 'electronics'
        },
        {
            title: 'Razor Gaming Laptop 17.3 inch',
            price: 1300,
            images: [{url: 'https://m.media-amazon.com/images/I/712g5R0vkbL._AC_UF894,1000_QL80_.jpg',
            filename: 'Razor Gaming Laptop 17.3 inch'}],
            description: `RTX 2060, AMD Ryzen 7600, 16GB RAM, 2TB storage, 144hz display`,
            author: '6456008c9c247896704e8da1',
            reviews: [],
            producer: 'Razor',
            quantity: 55,
            category: 'electronics'
        },
        {
            title: 'Apple MacBook Laptop',
            price: 1000,
            images: [{url: 'https://4.imimg.com/data4/SJ/BA/MY-3018414/apple-laptop.jpg',
            filename: 'Apple MacBook Laptop'}],
            description: `An elegant device, sleek and slim`,
            author: '6456008c9c247896704e8da1',
            reviews: [],
            producer: 'Apple',
            quantity: 55,
            category: 'electronics'
        },
        {
            title: 'IERTA Flat Screen TV 32 inch',
            price: 1000,
            images: [{url: 'https://m.media-amazon.com/images/I/81pieXC63IL._AC_UF1000,1000_QL80_.jpg',
            filename: 'IERTA Flat Screen TV 32 inch'}],
            description: `32 inch flat screen by IERTA`,
            author: '6456008c9c247896704e8da1',
            reviews: [],
            producer: 'IERTA',
            quantity: 55,
            category: 'electronics'
        },
        {
            title: 'VOSS water',
            price: 7,
            images: [{url: 'https://m.media-amazon.com/images/I/51FqkT7oYsL._SL1400_.jpg',
            filename: 'VOSS water'}],
            description: `Natural mineral water by VOSS`,
            author: '6456008c9c247896704e8da1',
            reviews: [],
            producer: 'VOSS',
            quantity: 55,
            category: 'food & drink'
        },
        {
            title: 'Onion (per kg)',
            price: 3,
            images: [{url: 'https://images.immediate.co.uk/production/volatile/sites/30/2013/06/Onions-cut-in-half-16d3ade.jpg',
            filename: 'Onion'}],
            description: `Just onion`,
            author: '6456008c9c247896704e8da1',
            reviews: [],
            producer: 'Dhole Corporation',
            quantity: 55,
            category: 'fruit & veggie'
        },
        {
            title: 'Sopranos T-shirt',
            price: 10,
            images: [{url: 'https://shop.hbo.com/cdn/shop/products/SOP-BB-100010-Black-MF_1200x1200.jpg?v=1619725196',
            filename: 'Sopranos T-shirt'}],
            description: `Bada Bing shirt from the famous TV series Sopranos`,
            author: '6456008c9c247896704e8da1',
            reviews: [],
            producer: 'AEY',
            quantity: 55,
            category: 'clothes'
        },
        {
            title: 'Cucumber (per kg)',
            price: 3,
            images: [{url: 'https://nationaltoday.com/wp-content/uploads/2022/07/4-Cucumber-Month-1200x834.jpg.webp',
            filename: 'Cucumber (per kg)'}],
            description: `Just cucumber`,
            author: '6456008c9c247896704e8da1',
            reviews: [],
            producer: 'Dhole Corporation',
            quantity: 55,
            category: 'fruit & veggie'
        },
        {
            title: 'Vans Hat',
            price: 15,
            images: [{url: 'https://images.vans.com/is/image/Vans/VN0A36OR_Y28_HERO?hei=1024&wid=1024&qlt=95',
            filename: 'Vans Hat'}],
            description: `Cool boy hat by Vans`,
            author: '6456008c9c247896704e8da1',
            reviews: [],
            producer: 'Vans',
            quantity: 55,
            category: 'clothes'
        },
        {
            title: 'Game of Thrones T-shirt',
            price: 10,
            images: [{url: 'https://target.scene7.com/is/image/Target/GUEST_a5324a20-8758-4a99-92c1-733674ea8d1d?wid=488&hei=488&fmt=pjpeg',
            filename: 'Game of Thrones T-shirt'}],
            description: `Just a t-shirt referencing the popular show GOT`,
            author: '6456008c9c247896704e8da1',
            reviews: [],
            producer: 'AEY',
            quantity: 55,
            category: 'clothes'
        },
        {
            title: 'Blue Jeans',
            price: 15,
            images: [{url: 'https://static.zara.net/photos///2023/I/0/3/p/1213/706/427/2/w/1920/1213706427_6_1_1.jpg?ts=1688048367552',
            filename: 'Blue Jeans'}],
            description: `Just blue jeans`,
            author: '6456008c9c247896704e8da1',
            reviews: [],
            producer: 'Solerum',
            quantity: 55,
            category: 'clothes'
        },
        {
            title: 'Galaxy Hoodie',
            price: 25,
            images: [{url: 'https://www.cheapsnowgear.com/cdn/shop/products/HTB1ab0kysuYBuNkSmRyq6AA3pXat.jpg?v=1665947042',
            filename: 'Galaxy Hoodie'}],
            description: `Cool, space-themed hoodie`,
            author: '6456008c9c247896704e8da1',
            reviews: [],
            producer: 'Solerum',
            quantity: 55,
            category: 'clothes'
        },
        {
            title: 'Left 4 Dead 2 Steam Key PC',
            price: 10,
            images: [{url: 'https://cdn.cloudflare.steamstatic.com/steam/apps/550/capsule_616x353.jpg?t=1675801903',
            filename: 'Left 4 Dead 2 Steam Key PC'}],
            description: `Zombie first person shooter, very popular`,
            author: '6456008c9c247896704e8da1',
            reviews: [],
            producer: 'Valve',
            quantity: 55,
            category: 'digital entertainment'
        },
        {
            title: 'Insurgency Sandstorm Steam Key PC',
            price: 15,
            images: [{url: 'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_InsurgencySandstormbasegame_NewWorldInteractive_Editions_S1_2560x1440-ad297a516ee88bc43fd232fb3b224c98',
            filename: 'Insurgency Sandstorm Steam Key PC'}],
            description: `Mil-sim FPS, one of the very best`,
            author: '6456008c9c247896704e8da1',
            reviews: [],
            producer: 'New World Interactive',
            quantity: 55,
            category: 'digital entertainment'
        },
        {
            title: 'Dark skinny jeans',
            price: 15,
            images: [{url: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F05%2Fd3%2F05d33d0768cf3dbbdfbcf091a10a1cf1195a8da9.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_jeans_skinny_skinnyhigh%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/mobilefullscreen]&zoom=zoom',
            filename: 'Dark skinny jeans'}],
            description: `Just dark, skinny jeans`,
            author: '6456008c9c247896704e8da1',
            reviews: [],
            producer: 'Solerum',
            quantity: 55,
            category: 'clothes'
        },
        {
            title: 'Yellowstone T-shirt',
            price: 13,
            images: [{url: 'https://target.scene7.com/is/image/Target/GUEST_331ba1e7-609f-4b7c-8478-08cd574ff3d3?wid=488&hei=488&fmt=pjpeg',
            filename: 'Yellowstone T-shirt'}],
            description: `Based on the TV series Yellowstone`,
            author: '6456008c9c247896704e8da1',
            reviews: [],
            producer: 'Solerum',
            quantity: 55,
            category: 'clothes'
        },
        {
            title: 'Dying Light Steam Key PC',
            price: 20,
            images: [{url: 'https://static.wikia.nocookie.net/dyinglight/images/8/8e/Dying-Light-cover.jpg/revision/latest/scale-to-width-down/1200?cb=20200206150358',
            filename: 'Dying Light Steam Key PC'}],
            description: `Open world zombie slasher parkour game, very satisfying`,
            author: '6456008c9c247896704e8da1',
            reviews: [],
            producer: 'Techland',
            quantity: 55,
            category: 'digital entertainment'
        },
        {
            title: 'Yellowstone Digital Download, Seasons 1 - 4',
            price: 60,
            images: [{url: 'https://flxt.tmsimg.com/assets/p16780458_b_h9_ab.jpg',
            filename: 'Yellowstone Digital Download, Seasons 1 - 4'}],
            description: `A ranching family in Montana faces off against others encroaching on their land`,
            author: '6456008c9c247896704e8da1',
            reviews: [],
            producer: 'Paramount Network',
            quantity: 55,
            category: 'digital entertainment'
        },
        {
            title: 'The Irishman Digital Download',
            price: 40,
            images: [{url: 'https://m.media-amazon.com/images/M/MV5BMGUyM2ZiZmUtMWY0OC00NTQ4LThkOGUtNjY2NjkzMDJiMWMwXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg',
            filename: 'The Irishman Digital Download'}],
            description: `A beautiful mob movie by Martin Scorsese`,
            author: '6456008c9c247896704e8da1',
            reviews: [],
            producer: 'Netflix',
            quantity: 55,
            category: 'digital entertainment'
        },
        {
            title: 'Elite Dangerous Steam Key PC',
            price: 20,
            images: [{url: 'https://cdn.cloudflare.steamstatic.com/steam/apps/359320/capsule_616x353.jpg?t=1673300526',
            filename: 'Elite Dangerous Steam Key PC'}],
            description: `Space simulator / exploration game, very beautiful`,
            author: '6456008c9c247896704e8da1',
            reviews: [],
            producer: 'Frontier',
            quantity: 55,
            category: 'digital entertainment'
        }
    ]).then(message => {
        console.log(message)
    }).catch(err => {
        console.log(err)
    })
    mongoose.connection.close()
}

func()