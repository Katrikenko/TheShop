// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {
    layout: 'index.hbs',
  })
  //                  ↑↑ сюди вводимо JSON дані
})




// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки

router.get('/shophome', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('shophome', {
    layout: 'shop',
    navigation: {
      links: [
        {
          text: 'Home',
          href: 'https://github.com/',
        },
        {
          text: 'Contacts',
          href: 'https://www.google.com/',
        },
        {
          text: 'Help',
          href: 'https://www.youtube.com/',
        },
      ],
    },

    newsBlock: {
      title: 'Latest News',
      cards: [
        {
          title: 'COVID-19 Vaccinations Begin in Europe',
          description:
            'As the world continues to grapple with the ongoing COVID-19 pandemic, Europe begins its vaccination rollout, with healthcare workers and the elderly among the first to receive the vaccine.',
          isTop: false,
          isNew: false,
        },
        {
          title: 'Tesla Stock Surges After Record Sales',
          description:
            "Tesla's stock price jumps 10% following the company's announcement of record sales in the last quarter, thanks in part to strong demand for its electric vehicles.",
          isTop: true,
          isNew: true,
        },
        {
          title:
            'New Study Shows Benefits of Meditation for Mental Health',
          description:
            'A new study published in the Journal of the American Medical Association finds that practicing mindfulness meditation can lead to improved mental health outcomes for people struggling with depression and anxiety.',
          isTop: false,
          isNew: false,
        },
        {
          title: 'NASA Launches New Mars Rover',
          description:
            "NASA's Perseverance rover successfully launches on a mission to explore Mars, with the goal of collecting samples of the planet's surface and searching for signs of ancient microbial life.",
          isTop: false,
          isNew: true,
        },
        {
          title:
            'GameStop Shares Soar as Reddit Traders Rally',
          description:
            'Shares of GameStop surge as amateur traders on the social media platform Reddit rally to drive up the price, in what some are calling a battle between Wall Street and Main Street.',
          isTop: false,
          isNew: false,
        },
        {
          title:
            'UK Announces Plan to Ban Sale of Gas-Powered Cars by 2030',
          description:
            'In an effort to combat climate change, the UK government announces a plan to ban the sale of new gas-powered cars and vans by 2030, with hybrid vehicles to follow in 2035.',
          isTop: true,
          isNew: false,
        },
        {
          title:
            'New Study Shows Link Between Exercise and Longevity',
          description:
            'A new study published in the Journal of the American Medical Association suggests that regular exercise can help people live longer, with participants who exercised regularly having a lower risk of premature death.',
          isTop: false,
          isNew: false,
        },
        {
          title: 'Amazon Expands Grocery Delivery Service',
          description:
            'Amazon announces an expansion of its grocery delivery service, with plans to offer free delivery to Prime members on orders over $35 and to expand its selection of fresh and organic produce.',
          isTop: false,
          isNew: true,
        },
      ],
    },

    goodsBlock: {
      tabs: [
        {
          isActive: true,
          isDisabled: false,
          text: 'Electronics',
        },
        {
          isActive: false,
          isDisabled: false,
          text: 'Home & Kitchen',
        },
        {
          isActive: false,
          isDisabled: false,
          text: 'Clothing & Accessories',
        },
        {
          isActive: false,
          isDisabled: true,
          text: 'Toys & Games',
        },
      ],
      cards: [
        {
          image: 'https://picsum.photos/400/200',
          title: 'iPhone 13',
          description:
            'The latest iPhone model features a new A15 Bionic chip, improved camera system, and longer battery life.',
          isHot: false,
          isNew: false,
        },
        {
          image: 'https://picsum.photos/400/200',
          title: 'MacBook Pro',
          description:
            "Apple's high-end laptop features a 16-inch Retina display, powerful M1 Pro or M1 Max chip, and up to 64GB of RAM.",
          isHot: true,
          isNew: false,
        },
        {
          image: 'https://picsum.photos/400/200',
          title: 'AirPods Pro',
          description:
            "Apple's premium wireless earbuds feature active noise cancellation, a customizable fit, and up to 4.5 hours of listening time.",
          isHot: false,
          isNew: false,
        },
        {
          image: 'https://picsum.photos/400/200',
          title: 'Sony Bravia XR A90J',
          description:
            'This OLED TV boasts a 4K resolution, HDR support, and a high refresh rate for smooth motion handling.',
          isHot: false,
          isNew: true,
        },
        {
          image: 'https://picsum.photos/400/200',
          title: 'Nintendo Switch OLED Model',
          description:
            'The latest iteration of the popular gaming console features a larger OLED screen and improved audio quality.',
          isHot: false,
          isNew: false,
        },
        {
          image: 'https://picsum.photos/400/200',
          title: 'Bose SoundLink Revolve+',
          description:
            'This portable Bluetooth speaker features 360-degree sound, water-resistant construction, and up to 16 hours of battery life.',
          isHot: true,
          isNew: true,
        },
      ],
    },
    subscribe: {
      header: 'Unlock Premium Content',
      description:
        'Subscribe to access exclusive content and features.',
      buttons: [
        {
          text: 'Register Now',
          link: 'https://www.youtube.com/',
        },
        {
          text: 'Buy Subscription',
          link: 'https://www.youtube.com/',
        },
      ],
    },
    service: {
      title: 'Our Services',
      description:
        'We offer a variety of services to meet your needs, including web design, content creation, and social media management.',
      buttons: [
        {
          text: 'Show More',
          link: 'https://www.youtube.com/',
        },
      ],
    },

    footer: [
      [
        {
          text: 'Home',
          link: 'https://www.youtube.com/',
        },
        {
          text: 'Trending',
          link: 'https://www.youtube.com/feed/trending',
        },
        {
          text: 'Subscriptions',
          link: 'https://www.youtube.com/feed/subscriptions',
        },
        {
          text: 'Library',
          link: 'https://www.youtube.com/feed/library',
          isDisabled: true,
        },
      ],
      [
        {
          text: 'History',
          link: 'https://www.youtube.com/feed/history',
        },
        {
          text: 'Your Videos',
          link: 'https://www.youtube.com/feed/my_videos',
        },
        {
          text: 'Live',
          link: 'https://www.youtube.com/live',
        },
        {
          text: 'Settings',
          link: 'https://www.youtube.com/account',
          isDisabled: true,
        },
      ],
      [
        {
          text: 'Watch Later',
          link: 'https://www.youtube.com/playlist?list=WL',
        },
        {
          text: 'Liked Videos',
          link: 'https://www.youtube.com/playlist?list=LL',
        },
        {
          text: 'Music',
          link: 'https://www.youtube.com/music',
        },
        {
          text: 'Gaming',
          link: 'https://www.youtube.com/gaming',
          isDisabled: true,
        },
      ],
      [
        {
          text: 'Sports',
          link: 'https://www.youtube.com/channel/UCo_q6aOlvPH7M-j_XGWVgXg',
        },
        {
          text: 'News',
          link: 'https://www.youtube.com/news',
        },
        {
          text: 'Fashion & Beauty',
          link: 'https://www.youtube.com/channel/UC1x8rV_f-2yPpzlN0JWZXIQ',
        },
        {
          text: 'Learning',
          link: 'https://www.youtube.com/learning',
          isDisabled: true,
        },
      ],
      [
        {
          text: 'Report History',
          link: 'https://www.youtube.com/feed/history/report_history',
        },
        {
          text: 'Help',
          link: 'https://support.google.com/youtube/?hl=en',
        },
        {
          text: 'Send Feedback',
          link: 'https://support.google.com/youtube/answer/4347644?hl=en',
        },
        {
          text: 'About',
          link: 'https://www.youtube.com/about/',
          isDisabled: true,
        },
      ],
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/shopproduct', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('shopproduct', {
    layout: 'shop',
    navigation: {
      links: [
        {
          text: 'Home',
          href: 'https://github.com/',
        },
        {
          text: 'Contacts',
          href: 'https://www.google.com/',
        },
        {
          text: 'Help',
          href: 'https://www.youtube.com/',
        },
        {
          text: 'Other',
          href: 'https://www.youtube.com/',
          isDisabled: true,
        },
      ],
    },

    breadcrumb: [
      { name: 'Home', url: 'https://github.com/' },
      { name: 'PC', url: 'https://www.google.com/' },
      { name: 'Windows', url: 'https://github.com/' },
      { name: 'Product PC #3123', url: null },
    ],

    productData: {
      img: 'https://picsum.photos/400/200',

      info: {
        title: 'Product PC Asus 331 BC 671',
        about:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: '1000$',

        category: [
          { name: 'HOT', isHot: true },
          { name: 'New', isNew: true },
          { name: 'Bonus', isBonus: true },
        ],
      },

      actionList: [
        { name: 'Buy', isWarning: true },
        { name: 'Add to cart', isError: true },
        { name: 'Like', isSuccess: true },
        { name: 'Share', isGood: true },
      ],

      item: {
        head: ['#', 'color', 'price'],

        body: [
          ['id312', 'red', '1100$'],
          ['id532', 'blue', '1050$'],
          ['id643', 'dark', '999$'],
        ],
      },

      param: {
        title: 'Product params',
        list: ['Экран 15.6', 'IPS (1920x1080)', 'Full HD'],
      },

      alert: {
        isError: true,
        text: 'Danger! This is a danger alert — check it out!',
      },
    },

    goodsOtherBlock: {
      title: 'See other products',
      cards: [
        {
          image: 'https://picsum.photos/400/200',
          title: 'iPhone 13',
          description:
            'The latest iPhone model features a new A15 Bionic chip, improved camera system, and longer battery life.',
          isHot: false,
          idNew: false,
        },
        {
          image: 'https://picsum.photos/400/200',
          title: 'MacBook Pro',
          description:
            "Apple's high-end laptop features a 16-inch Retina display, powerful M1 Pro or M1 Max chip, and up to 64GB of RAM.",
          isHot: true,
          idNew: false,
        },
        {
          image: 'https://picsum.photos/400/200',
          title: 'AirPods Pro',
          description:
            "Apple's premium wireless earbuds feature active noise cancellation, a customizable fit, and up to 4.5 hours of listening time.",
          isHot: false,
          idNew: false,
        },
      ],
    },
    service: {
      title: 'Our Services',
      description:
        'We offer a variety of services to meet your needs, including web design, content creation, and social media management.',
      buttons: [
        {
          text: 'Show More',
          link: 'https://www.youtube.com/',
        },
      ],
    },

    footer: [
      [
        {
          text: 'Home',
          link: 'https://www.youtube.com/',
        },
        {
          text: 'Trending',
          link: 'https://www.youtube.com/feed/trending',
        },
        {
          text: 'Subscriptions',
          link: 'https://www.youtube.com/feed/subscriptions',
        },
        {
          text: 'Library',
          link: 'https://www.youtube.com/feed/library',
          isDisabled: true,
        },
      ],
      [
        {
          text: 'History',
          link: 'https://www.youtube.com/feed/history',
        },
        {
          text: 'Your Videos',
          link: 'https://www.youtube.com/feed/my_videos',
        },
        {
          text: 'Live',
          link: 'https://www.youtube.com/live',
        },
        {
          text: 'Settings',
          link: 'https://www.youtube.com/account',
          isDisabled: true,
        },
      ],
      [
        {
          text: 'Watch Later',
          link: 'https://www.youtube.com/playlist?list=WL',
        },
        {
          text: 'Liked Videos',
          link: 'https://www.youtube.com/playlist?list=LL',
        },
        {
          text: 'Music',
          link: 'https://www.youtube.com/music',
        },
        {
          text: 'Gaming',
          link: 'https://www.youtube.com/gaming',
          isDisabled: true,
        },
      ],
      [
        {
          text: 'Sports',
          link: 'https://www.youtube.com/channel/UCo_q6aOlvPH7M-j_XGWVgXg',
        },
        {
          text: 'News',
          link: 'https://www.youtube.com/news',
        },
        {
          text: 'Fashion & Beauty',
          link: 'https://www.youtube.com/channel/UC1x8rV_f-2yPpzlN0JWZXIQ',
        },
        {
          text: 'Learning',
          link: 'https://www.youtube.com/learning',
          isDisabled: true,
        },
      ],
      [
        {
          text: 'Report History',
          link: 'https://www.youtube.com/feed/history/report_history',
        },
        {
          text: 'Help',
          link: 'https://support.google.com/youtube/?hl=en',
        },
        {
          text: 'Send Feedback',
          link: 'https://support.google.com/youtube/answer/4347644?hl=en',
        },
        {
          text: 'About',
          link: 'https://www.youtube.com/about/',
          isDisabled: true,
        },
      ],
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// ==============================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/shopnews', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('shopnews', {
    layout: 'shop',
    navigation: {
      links: [
        {
          text: 'Home',
          href: 'https://github.com/',
        },
        {
          text: 'Contacts',
          href: 'https://www.google.com/',
        },
        {
          text: 'Help',
          href: 'https://www.youtube.com/',
        },
        {
          text: 'Other',
          href: 'https://www.youtube.com/',
          isDisabled: true,
        },
      ],
    },

    breadcrumb: [
      { name: 'Home', url: 'https://github.com/' },
      { name: 'News', url: 'https://www.google.com/' },
      { name: 'Today', url: 'https://github.com/' },
      { name: 'About cats', url: null },
    ],

    newsData: {
      photo: 'https://picsum.photos/400/200',

      head: {
        heading: 'About cats',
        description:
          "Cats are adorable and beloved pets that have been domesticated for thousands of years. They are known for their independent and playful nature, as well as their agility and hunting skills. With their soft fur, purring, and cuddling, cats make great companions and can bring joy and relaxation to their owners. From domestic short-hairs to exotic breeds, cats come in many shapes, sizes, and colors, each with their own unique personalities. Whether they are napping in a sunny spot or chasing a toy, cats always bring a smile to their owner's faces.",
      },

      body: [
        {
          title: 'Cats have a keen sense of hearing',
          text: 'With their highly sensitive ears, cats can detect sounds that are too faint for humans to hear, including the ultrasonic calls of rodents and other small prey.',
        },
        {
          title: 'Cats are natural hunters',
          text: 'Thanks to their sharp claws, quick reflexes, and stealthy movements, cats are excellent hunters. They can catch mice, rats, birds, and other prey with ease.',
        },
        {
          title: 'Cats are independent creatures',
          text: "Cats are known for their independent nature, and unlike dogs, they don't require constant attention and affection from their owners. They are perfectly content to entertain themselves with toys and explore their surroundings on their own.",
        },
        {
          title: 'Cats have a unique way of communicating',
          text: 'From meows and purrs to chirps and trills, cats use a variety of sounds to communicate with their owners and other cats. They also use body language, such as tail movements and ear positions, to convey their moods and intentions.',
        },
        {
          title: 'Cats are good for your health',
          text: 'Studies have shown that owning a cat can have numerous health benefits, including lower stress levels, reduced risk of heart disease and stroke, and improved mental health. Plus, cats make great companions and can provide a source of comfort and emotional support.',
        },
      ],
    },

    newsOtherBlock: {
      title: 'See other news',
      cards: [
        {
          title: 'NASA Launches New Mars Rover',
          description:
            "NASA's Perseverance rover successfully launches on a mission to explore Mars, with the goal of collecting samples of the planet's surface and searching for signs of ancient microbial life.",
          isTop: false,
          isNew: true,
        },
        {
          title:
            'GameStop Shares Soar as Reddit Traders Rally',
          description:
            'Shares of GameStop surge as amateur traders on the social media platform Reddit rally to drive up the price, in what some are calling a battle between Wall Street and Main Street.',
          isTop: false,
          isNew: false,
        },
        {
          title:
            'New Study Shows Link Between Exercise and Longevity',
          description:
            'A new study published in the Journal of the American Medical Association suggests that regular exercise can help people live longer, with participants who exercised regularly having a lower risk of premature death.',
          isTop: false,
          isNew: false,
        },
        {
          title: 'Amazon Expands Grocery Delivery Service',
          description:
            'Amazon announces an expansion of its grocery delivery service, with plans to offer free delivery to Prime members on orders over $35 and to expand its selection of fresh and organic produce.',
          isTop: false,
          isNew: true,
        },
      ],
    },

    service: {
      title: 'Our Services',
      description:
        'We offer a variety of services to meet your needs, including web design, content creation, and social media management.',
      buttons: [
        {
          text: 'Show More',
          link: 'https://www.youtube.com/',
        },
      ],
    },

    footer: [
      [
        {
          text: 'Home',
          link: 'https://www.youtube.com/',
        },
        {
          text: 'Trending',
          link: 'https://www.youtube.com/feed/trending',
        },
        {
          text: 'Subscriptions',
          link: 'https://www.youtube.com/feed/subscriptions',
        },
        {
          text: 'Library',
          link: 'https://www.youtube.com/feed/library',
          isDisabled: true,
        },
      ],
      [
        {
          text: 'History',
          link: 'https://www.youtube.com/feed/history',
        },
        {
          text: 'Your Videos',
          link: 'https://www.youtube.com/feed/my_videos',
        },
        {
          text: 'Live',
          link: 'https://www.youtube.com/live',
        },
        {
          text: 'Settings',
          link: 'https://www.youtube.com/account',
          isDisabled: true,
        },
      ],
      [
        {
          text: 'Watch Later',
          link: 'https://www.youtube.com/playlist?list=WL',
        },
        {
          text: 'Liked Videos',
          link: 'https://www.youtube.com/playlist?list=LL',
        },
        {
          text: 'Music',
          link: 'https://www.youtube.com/music',
        },
        {
          text: 'Gaming',
          link: 'https://www.youtube.com/gaming',
          isDisabled: true,
        },
      ],
      [
        {
          text: 'Sports',
          link: 'https://www.youtube.com/channel/UCo_q6aOlvPH7M-j_XGWVgXg',
        },
        {
          text: 'News',
          link: 'https://www.youtube.com/news',
        },
        {
          text: 'Fashion & Beauty',
          link: 'https://www.youtube.com/channel/UC1x8rV_f-2yPpzlN0JWZXIQ',
        },
        {
          text: 'Learning',
          link: 'https://www.youtube.com/learning',
          isDisabled: true,
        },
      ],
      [
        {
          text: 'Report History',
          link: 'https://www.youtube.com/feed/history/report_history',
        },
        {
          text: 'Help',
          link: 'https://support.google.com/youtube/?hl=en',
        },
        {
          text: 'Send Feedback',
          link: 'https://support.google.com/youtube/answer/4347644?hl=en',
        },
        {
          text: 'About',
          link: 'https://www.youtube.com/about/',
          isDisabled: true,
        },
      ],
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/shoporder', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('shoporder', {
    layout: 'shop',
    navigation: {
      links: [
        {
          text: 'Home',
          href: 'https://github.com/',
        },
        {
          text: 'Contacts',
          href: 'https://www.google.com/',
        },
        {
          text: 'Help',
          href: 'https://www.youtube.com/',
        },
        {
          text: 'Exit',
          href: null,
          isDisabled: true,
        },
      ],
    },

    header: 'Оформлення замовлення',
    contacts_data: {
      title: 'Контактні дані',

      buttons: [
        {
          text: 'Я новий покупець',
          isPrimary: true,
        },
        {
          text: 'Я постійний покупець',
          isOutline: true,
        },
      ],
      form: {
        input: {
          surname: {
            label: 'Прізвище',
            placeholder: 'Іванов',
            caption: 'Введіть прізвище',
          },
          name: {
            label: 'Ім’я',
            placeholder: 'Іван',
            caption: 'Введіть Ім’я',
          },
          phone: {
            label: 'Мобільний телефон',
            placeholder: '+38 (XXX) XXX XX XX',
            caption: 'Введіть телефон',
          },
          email: {
            label: 'Пошта',
            placeholder: 'ivanivanov@ukr.net',
            caption: 'Введіть Пошту',
          },
        },
        switch: [
          {
            text: 'Отримувати інформацію про новинки',
            isActive: false,
          },
          {
            text: 'Отримувати інформацію про знижки',
            isActive: true,
          },
        ],
      },
    },
    action_block: [
      { text: 'Швидке замовлення', isSuccess: true },
      { text: 'Видалити', isDanger: true },
      { text: 'Детальніше', isInfo: true },
    ],
    total: {
      title: 'Всього',
      item_list: [
        { name: 'Ноут', price: '25 000 ₴' },
        { name: 'Мишка', price: '25 000 ₴' },
        { name: 'Клава', price: '25 000 ₴' },
      ],
      additional_info: [
        { text: 'Всього товарів', value: '75 000 ₴' },
        { text: 'Купони', value: 'Немає' },
        { text: 'Доставка', value: 'Безкоштовно' },
      ],
      total_price: {
        text: 'Всього товарів',
        value: '75 000 ₴',
      },
      button: [
        {
          text: 'Підтвердити замовлення',
          isPrimary: true,
        },
        {
          text: 'Відмінити купони',
          isOutline: true,
        },
      ],
    },
    delivery: {
      title: 'Доставка',
      select: [
        {
          label: 'Місто доставки',
          placeholder: 'Оберіть місто доставки',
          options: [
            { value: '1', text: 'Київ' },
            { value: '2', text: 'Харків' },
            { value: '3', text: 'Одеса' },
            { value: '4', text: 'Львів' },
            { value: '5', text: 'Дніпро' },
            { value: '6', text: 'Донецьк' },
          ],
        },
        {
          label: 'Район доставки',
          placeholder: 'Оберіть район доставки',
          options: [
            { value: '1', text: 'Голосіївський' },
            { value: '2', text: 'Оболонський' },
            { value: '3', text: 'Печерський' },
            { value: '4', text: 'Дарницький' },
            { value: '5', text: 'Деснянський' },
            { value: '6', text: 'Подільський' },
          ],
        },
      ],
      delivery_type: [
        {
          type: 'Самовивіз з відділення Нової пошти',
        },
        {
          type: 'Кур’єром Нової пошти',
        },
        {
          type: 'Самовивіз з магазину',
        },
        {
          type: 'Доставка закордон',
        },
      ],
      payment: {
        title: 'Оплата',
        list: [
          {
            type: 'Оплата при отриманні',
            description: 'За тарифами перевізника',
          },
          {
            type: 'Оплатити зараз',
          },
        ],
      },
      contact: {
        title: 'Контактні дані отримувача',
        surname: {
          label: 'Прізвище',
          placeholder: 'Іванов',
          caption: 'Введіть прізвище',
        },
        name: {
          label: 'Ім’я',
          placeholder: 'Іван',
          caption: 'Введіть Ім’я',
        },
        phone: {
          label: 'Мобільний телефон',
          placeholder: '+38 (XXX) XXX XX XX',
          caption: 'Введіть телефон',
        },
        email: {
          label: 'Пошта',
          placeholder: 'ivanivanov@ukr.net',
          caption: 'Введіть Пошту',
        },
      },
      coment: {
        label: 'Коментар',
        placeholder: 'Я хочу, щоб',
      },
    },
    coupon: {
      title: 'Купони',
      select: {
        availabel_coupon: {
          label: 'Наявні купони',
          placeholder: 'Виберіть купон',
          options: [
            { value: '1', text: 'SEEYALATER' },
            { value: '2', text: 'HOTEL10' },
            { value: '3', text: 'DOWNLOAD25' },
          ],
        },
        friend_coupon: {
          label: 'Купони за запрошених друзів',
          placeholder: 'Виберіть купон',
          options: [
            { value: '1', text: 'TRAVEL5' },
            { value: '2', text: '75VACA' },
            { value: '3', text: '150VACA' },
          ],
        },
      },
      add: {
        friend: {
          label: 'Запросіть друзів та отримайте ще купонів',
          placeholder:
            'Введіть контактні дані друзів через ;',
          caption:
            'Напишіть електронні адреси/телефон друзів через “;”',
        },
        colleague: {
          label: 'Запросити колег',
          placeholder:
            'Введіть контактні дані колег через ;',
          caption:
            'Напишіть електронні адреси/телефон колег через “;”',
        },
      },
    },
    quiz: {
      title: 'Домоможи краще нам тебе зрозуміти',
      preference: {
        title:
          'Який тип обладнання ви зацікавлені в придбанні?',
        options: [
          'Смартфони',
          'Ноутбуки',
          'Планшети',
          'ПК',
          'Телевізори',
        ],
      },
      your_expirience: {
        label: 'Який у Вас досвід користування ПК',
      },
      purchase_frequency: {
        label: 'Як часто ви купуєте обладнання?',
        placeholder: 'Оберіть варіант',
        options: [
          { value: '1', text: 'Раз в тиждень' },
          { value: '2', text: 'Раз в місяць' },
          { value: '3', text: 'Раз в рік' },
        ],
      },
      factors: {
        title:
          'Які з наведених нижче факторів є для вас важливими при купівлі обладнання?',
        options: [
          'Ціна',
          'Репутація бренду',
          'Якість',
          'Особливості',
          'Гарантія',
          'Доступність',
          'Обслуговування клієнтів',
        ],
      },
    },
    footer: [
      [
        {
          text: 'Home',
          link: 'https://www.youtube.com/',
        },
        {
          text: 'Trending',
          link: 'https://www.youtube.com/feed/trending',
        },
        {
          text: 'Subscriptions',
          link: 'https://www.youtube.com/feed/subscriptions',
        },
        {
          text: 'Library',
          link: 'https://www.youtube.com/feed/library',
          isDisabled: true,
        },
      ],
      [
        {
          text: 'History',
          link: 'https://www.youtube.com/feed/history',
        },
        {
          text: 'Your Videos',
          link: 'https://www.youtube.com/feed/my_videos',
        },
        {
          text: 'Live',
          link: 'https://www.youtube.com/live',
        },
        {
          text: 'Settings',
          link: 'https://www.youtube.com/account',
          isDisabled: true,
        },
      ],
      [
        {
          text: 'Watch Later',
          link: 'https://www.youtube.com/playlist?list=WL',
        },
        {
          text: 'Liked Videos',
          link: 'https://www.youtube.com/playlist?list=LL',
        },
        {
          text: 'Music',
          link: 'https://www.youtube.com/music',
        },
        {
          text: 'Gaming',
          link: 'https://www.youtube.com/gaming',
          isDisabled: true,
        },
      ],
      [
        {
          text: 'Sports',
          link: 'https://www.youtube.com/channel/UCo_q6aOlvPH7M-j_XGWVgXg',
        },
        {
          text: 'News',
          link: 'https://www.youtube.com/news',
        },
        {
          text: 'Fashion & Beauty',
          link: 'https://www.youtube.com/channel/UC1x8rV_f-2yPpzlN0JWZXIQ',
        },
        {
          text: 'Learning',
          link: 'https://www.youtube.com/learning',
          isDisabled: true,
        },
      ],
      [
        {
          text: 'Report History',
          link: 'https://www.youtube.com/feed/history/report_history',
        },
        {
          text: 'Help',
          link: 'https://support.google.com/youtube/?hl=en',
        },
        {
          text: 'Send Feedback',
          link: 'https://support.google.com/youtube/answer/4347644?hl=en',
        },
        {
          text: 'About',
          link: 'https://www.youtube.com/about/',
          isDisabled: true,
        },
      ],
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/shopprofile', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('shopprofile', {
    layout: 'shop',
    navigation: {
      links: [
        {
          text: 'Home',
          href: 'https://github.com/',
        },
        {
          text: 'Contacts',
          href: 'https://www.google.com/',
        },
        {
          text: 'Help',
          href: 'https://www.youtube.com/',
        },
        {
          text: 'Other',
          href: null,
          isDisabled: true,
        },
      ],
    },

    header: 'Мої замовлення',

    purchase: {
      tabs: ['Всі замовлення', 'Гарантія та повернення'],
      actionBlock: {
        input: { placeholder: 'Placeholder' },
        buttons: [
          {
            text: 'Знайти',
            link: 'https://www.youtube.com/',
            isSuccess: true,
          },
          {
            text: 'Виділити все',
            link: 'https://www.youtube.com/',
            isOutline: true,
          },
          {
            text: 'Очистити все',
            link: 'https://www.youtube.com/',
            isDanger: true,
          },
        ],
      },
      itemList: [
        {
          number: '№12587463 від 01.01.2023',
          status: 'Виконано',
          amount: { title: 'Сума', value: '25 000 ₴' },
          images: ['https://picsum.photos/110/100'],
          button: {
            text: 'Детальніше',
            link: 'https://www.youtube.com/',
            isPrimary: true,
          },
        },
        {
          number: '№12587463 від 01.01.2023',
          status: 'Виконано',
          amount: { title: 'Сума', value: '25 000 ₴' },
          images: [
            'https://picsum.photos/110/100',
            'https://picsum.photos/110/100',
            'https://picsum.photos/110/100',
          ],
          button: {
            text: 'Детальніше',
            link: 'https://www.youtube.com/',
            isPrimary: true,
          },
        },
        {
          number: '№12587463 від 01.01.2023',
          status: 'Виконано',
          amount: { title: 'Сума', value: '25 000 ₴' },
          images: [
            'https://picsum.photos/110/100',
            'https://picsum.photos/110/100',
          ],
          button: {
            text: 'Детальніше',
            link: 'https://www.youtube.com/',
            isPrimary: true,
          },
        },
      ],
    },
    userInfo: {
      title: 'Особиста інформація',
      profileData: {
        title: 'Особисті дані',
        fullName: {
          surname: {
            title: 'Прізвище',
            value: 'Іванов',
          },
          name: {
            title: 'Ім’я',
            value: 'Іван',
          },
          middleName: {
            title: 'По-батькові',
            value: 'Іванович',
          },
        },
        otherInfo: {
          birthday: {
            title: 'Дата народження',
            value: '01.01.2000',
          },
          sex: {
            title: 'Стать',
            value: 'Чоловіча',
          },
          language: {
            title: 'Мова',
            value: 'Українська',
          },
        },
      },
      buttons: [
        {
          text: 'Редагувати',
          link: 'https://www.youtube.com/',
          isPrimary: true,
        },
        {
          text: 'Очистити',
          link: 'https://www.youtube.com/',
          isSecondary: true,
        },
        {
          text: 'Видалити',
          link: 'https://www.youtube.com/',
          isDanger: true,
        },
      ],
      recipients: {
        title: 'Отримувачі',
        users: [
          {
            name: 'Іванов Іван Іванович',
            phone: '+38 (098) 222 22 22',
            button: {
              text: 'Редагувати',
              link: 'https://www.youtube.com/',
            },
          },
          {
            name: 'Петров Петро Петрович',
            phone: '+38 (098) 111 11 11',
            button: {
              text: 'Редагувати',
              link: 'https://www.youtube.com/',
            },
          },
        ],
      },
      contacts: {
        title: 'Контакти',
        contactData: {
          phone: {
            title: 'Номер телефону',
            value: '+38 (098) 222 22 22',
          },
          additionalPhone: {
            title: 'Додатковий номер телефону',
            value: '+38 (098) 111 11 11',
          },
          email: {
            title: 'Електронна адреса',
            value: 'ivanivanov@ukr.net',
          },
        },
        buttons: [
          {
            text: 'Редагувати',
            link: 'https://www.youtube.com/',
            isPrimary: true,
          },
          {
            text: 'Очистити',
            link: 'https://www.youtube.com/',
            isSecondary: true,
          },
          {
            text: 'Видалити',
            link: 'https://www.youtube.com/',
            isDanger: true,
          },
        ],
      },
    },

    footer: [
      [
        {
          text: 'Home',
          link: 'https://www.youtube.com/',
        },
        {
          text: 'Trending',
          link: 'https://www.youtube.com/feed/trending',
        },
        {
          text: 'Subscriptions',
          link: 'https://www.youtube.com/feed/subscriptions',
        },
        {
          text: 'Library',
          link: 'https://www.youtube.com/feed/library',
          isDisabled: true,
        },
      ],
      [
        {
          text: 'History',
          link: 'https://www.youtube.com/feed/history',
        },
        {
          text: 'Your Videos',
          link: 'https://www.youtube.com/feed/my_videos',
        },
        {
          text: 'Live',
          link: 'https://www.youtube.com/live',
        },
        {
          text: 'Settings',
          link: 'https://www.youtube.com/account',
          isDisabled: true,
        },
      ],
      [
        {
          text: 'Watch Later',
          link: 'https://www.youtube.com/playlist?list=WL',
        },
        {
          text: 'Liked Videos',
          link: 'https://www.youtube.com/playlist?list=LL',
        },
        {
          text: 'Music',
          link: 'https://www.youtube.com/music',
        },
        {
          text: 'Gaming',
          link: 'https://www.youtube.com/gaming',
          isDisabled: true,
        },
      ],
      [
        {
          text: 'Sports',
          link: 'https://www.youtube.com/channel/UCo_q6aOlvPH7M-j_XGWVgXg',
        },
        {
          text: 'News',
          link: 'https://www.youtube.com/news',
        },
        {
          text: 'Fashion & Beauty',
          link: 'https://www.youtube.com/channel/UC1x8rV_f-2yPpzlN0JWZXIQ',
        },
        {
          text: 'Learning',
          link: 'https://www.youtube.com/learning',
          isDisabled: true,
        },
      ],
      [
        {
          text: 'Report History',
          link: 'https://www.youtube.com/feed/history/report_history',
        },
        {
          text: 'Help',
          link: 'https://support.google.com/youtube/?hl=en',
        },
        {
          text: 'Send Feedback',
          link: 'https://support.google.com/youtube/answer/4347644?hl=en',
        },
        {
          text: 'About',
          link: 'https://www.youtube.com/about/',
          isDisabled: true,
        },
      ],
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/shopreview', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('shopreview', {
    layout: 'shop',
    navigation: {
      links: [
        {
          text: 'Home',
          href: 'https://github.com/',
        },
        {
          text: 'Contacts',
          href: 'https://www.google.com/',
        },
        {
          text: 'Help',
          href: 'https://www.youtube.com/',
        },
        {
          text: 'Other',
          href: null,
          isDisabled: true,
        },
      ],
    },
    formBlock: {
      header: 'Відгуки покупців про Ноут',
      rating: {
        title: 'Оцінка',
        value: '4.5/5',
      },
      actionBlock: {
        tabs: [
          { text: 'Про товар' },
          { text: 'Характеристики' },
          { text: 'Відгуки', isActive: true },
        ],
        report: {
          title: 'Залиште відгук про товар',
          button: {
            text: 'Написати відгук',
            link: 'https://www.youtube.com/',
          },
        },
      },
      feedbackBlock: {
        title:
          'Хочете поділитись своєю думкою про наш магазин?',
        buttons: [
          {
            text: 'Додати відгук',
            isWarning: true,
            link: 'https://www.youtube.com/',
          },
          {
            text: 'Позитивні відгуки',
            isSuccess: true,
            link: 'https://www.youtube.com/',
          },
          {
            text: 'Негативні відгуки',
            isDanger: true,
            link: 'https://www.youtube.com/',
          },
        ],
      },
      goodsInfo: {
        photo: 'https://picsum.photos/110/100',
        name: 'Ноут Asus',
        price: '25 000 ₴',
        inMarket: true,
        buttons: [
          {
            text: 'Купити',
            isPrimary: true,
            link: 'https://www.youtube.com/',
          },
          {
            text: 'Купити в кредит',
            isSecondary: true,
            link: 'https://www.youtube.com/',
          },
        ],
        seller: {
          title: 'Продавець',
          value: 'Machinery',
        },
      },
    },

    reviewList: [
      {
        title: {
          userName: 'Іван Іванов',
          caption: 'Відгук покупця',
          date: '1 січня 2023',
        },
        reviewBody: {
          seller: {
            title: 'Продавець',
            value: 'Machinery',
          },
          rating: {
            title: 'Оцінка',
            value: '5/5',
          },
          text: [
            "Цей ноутбук має гарний дизайн та добре виконує свої основні функції. Швидкість роботи та продуктивність в цілому є на задовільному рівні. Крім того, присутній достатній обсяг пам'яті та потужність акумулятора.",
            ' Однак, можливі проблеми з перегрівом під час тривалого використання, та може бути недостатньої ємності жорсткого диска для потреб користувача. Крім того, ціна може бути дещо високою порівняно з аналогічними моделями.',
          ],
          advantages: {
            title: 'Переваги',
            text: 'Дизайн, швидкість роботи, обсяг пам’яті, акумулятор',
          },
          disadvantages: {
            title: 'Недоліки',
            text: 'Перегрів, ємкість жосткого диску',
          },
          images: [
            'https://picsum.photos/110/100',
            'https://picsum.photos/110/100',
            'https://picsum.photos/110/100',
          ],
          coments: [
            {
              userName: 'Користувач',
              date: '1 січня 2023',
              text: 'Дякую за відгук, я подумаю про недоліки, про які ви згадували, перш ніж зробити покупку.',
            },
            {
              userName: 'Користувач',
              date: '3 січня 2023',
              text: 'Дякую за корисний відгук! Це допомогло мені зробити вибір щодо покупки ноутбука.',
            },
            {
              userName: 'Користувач',
              date: '10 січня 2023',
              text: 'Дякую за відгук, але я хотів би дізнатися більше деталей про проблеми з перегрівом, щоб зробити зважений вибір перед покупкою.',
            },
          ],
        },
      },
      {
        title: {
          userName: 'Петро Петров',
          caption: 'Відгук покупця',
          date: '1 січня 2023',
        },
        reviewBody: {
          seller: {
            title: 'Продавець',
            value: 'Machinery',
          },
          rating: {
            title: 'Оцінка',
            value: '5/5',
          },
          text: [
            "Цей ноутбук має гарний дизайн та добре виконує свої основні функції. Швидкість роботи та продуктивність в цілому є на задовільному рівні. Крім того, присутній достатній обсяг пам'яті та потужність акумулятора.",
          ],
          advantages: {
            title: 'Переваги',
            text: 'Обсяг пам’яті, акумулятор',
          },
          disadvantages: {
            title: 'Недоліки',
            text: 'Не виявлено',
          },
          images: ['https://picsum.photos/110/100'],
          coments: [
            {
              userName: 'Користувач',
              date: '1 січня 2023',
              text: 'Дякую за відгук, я подумаю про недоліки, про які ви згадували, перш ніж зробити покупку.',
            },
          ],
        },
      },
    ],

    service: {
      title: 'Our Services',
      description:
        'We offer a variety of services to meet your needs, including web design, content creation, and social media management.',
      buttons: [
        {
          text: 'Show More',
          link: 'https://www.youtube.com/',
        },
      ],
    },

    footer: [
      [
        {
          text: 'Home',
          link: 'https://www.youtube.com/',
        },
        {
          text: 'Trending',
          link: 'https://www.youtube.com/feed/trending',
        },
        {
          text: 'Subscriptions',
          link: 'https://www.youtube.com/feed/subscriptions',
        },
        {
          text: 'Library',
          link: 'https://www.youtube.com/feed/library',
          isDisabled: true,
        },
      ],
      [
        {
          text: 'History',
          link: 'https://www.youtube.com/feed/history',
        },
        {
          text: 'Your Videos',
          link: 'https://www.youtube.com/feed/my_videos',
        },
        {
          text: 'Live',
          link: 'https://www.youtube.com/live',
        },
        {
          text: 'Settings',
          link: 'https://www.youtube.com/account',
          isDisabled: true,
        },
      ],
      [
        {
          text: 'Watch Later',
          link: 'https://www.youtube.com/playlist?list=WL',
        },
        {
          text: 'Liked Videos',
          link: 'https://www.youtube.com/playlist?list=LL',
        },
        {
          text: 'Music',
          link: 'https://www.youtube.com/music',
        },
        {
          text: 'Gaming',
          link: 'https://www.youtube.com/gaming',
          isDisabled: true,
        },
      ],
      [
        {
          text: 'Sports',
          link: 'https://www.youtube.com/channel/UCo_q6aOlvPH7M-j_XGWVgXg',
        },
        {
          text: 'News',
          link: 'https://www.youtube.com/news',
        },
        {
          text: 'Fashion & Beauty',
          link: 'https://www.youtube.com/channel/UC1x8rV_f-2yPpzlN0JWZXIQ',
        },
        {
          text: 'Learning',
          link: 'https://www.youtube.com/learning',
          isDisabled: true,
        },
      ],
      [
        {
          text: 'Report History',
          link: 'https://www.youtube.com/feed/history/report_history',
        },
        {
          text: 'Help',
          link: 'https://support.google.com/youtube/?hl=en',
        },
        {
          text: 'Send Feedback',
          link: 'https://support.google.com/youtube/answer/4347644?hl=en',
        },
        {
          text: 'About',
          link: 'https://www.youtube.com/about/',
          isDisabled: true,
        },
      ],
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки

router.get('/shopcatalog', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('shopcatalog', {
    layout: 'shop',
    navigation: {
      links: [
        {
          text: 'Home',
          href: 'https://github.com/',
        },
        {
          text: 'Contacts',
          href: 'https://www.google.com/',
        },
        {
          text: 'Help',
          href: 'https://www.youtube.com/',
        },
        {
          text: 'Other',
          href: null,
          isDisabled: true,
        },
      ],
    },
    breadcrumb: [
      { name: 'Головна', url: 'https://github.com/' },
      {
        name: "Комп'ютери та ноутбуки",
        url: 'https://www.google.com/',
      },
      { name: 'Ноутбуки', url: null },
    ],
    header: 'Ноутбуки',
    sortBlock: [
      {
        placeholder: 'За ціною',
        options: [
          { value: '1', text: 'За зростанням' },
          { value: '2', text: 'За спаданням' },
        ],
      },
      {
        placeholder: 'За новизною',
        options: [
          { value: '1', text: 'Спочатку нові' },
          { value: '2', text: 'Спочатку старі' },
        ],
      },
      {
        placeholder: 'За рейтингом',
        options: [
          { value: '1', text: 'За зростанням' },
          { value: '2', text: 'За спаданням' },
        ],
      },
    ],
    filterBlock: {
      sellers: {
        title: 'Продавець',
        list: [{ value: 'Machinery' }, { value: 'інші' }],
      },
      brands: {
        title: 'Бренд',
        input: {
          placeholder: 'Пошук',
        },
        options: [
          { value: 'Acer' },
          { value: 'Apple' },
          { value: 'Asus' },
          { value: 'Dell' },
        ],
      },
      price: {
        title: 'Ціна',
        range: {
          from: '8 000',
          to: '30 000',
        },
        button: {
          text: 'OK',
          link: 'https://www.youtube.com/',
        },
      },

      filterList: [
        {
          title: 'Готов к отправке',
          options: [{ value: 'Готов к отправке' }],
        },
        {
          title: 'Процесор',
          options: [
            { value: 'Intel Core i7' },
            { value: 'Intel Core i5' },
            { value: 'Intel Core i3' },
            { value: 'AMD Ryzen 9' },
          ],
        },
        {
          title: 'Діагональ екрану',
          options: [
            { value: '13' },
            { value: '14' },
            { value: '15-16' },
            { value: '17-18' },
            { value: '9 - 12.5' },
          ],
        },
        {
          title: 'Оперативна пам’ять',
          options: [
            { value: '10 - 12ГБ' },
            { value: '16 - 24ГБ' },
            { value: '32ГБ і більше' },
            { value: '4ГБ' },
            { value: '6 - 8ГБ' },
          ],
        },
        {
          title: 'Операційна система',
          options: [
            { value: 'Chrome OS' },
            { value: 'Linux' },
            { value: 'Windows' },
            { value: 'Mac OS' },
            { value: 'Без ОС' },
          ],
        },
      ],
    },
    goodsList: [
      {
        img: 'https://picsum.photos/400/200',
        isHot: true,
        isNew: true,
        isFast: true,
        isFree: true,
        name: 'Ноут',
        review: {
          amount: 13,
          text: 'відгуків',
        },
        price: '25 000 ₴',
        delivery: 'Готовий до відправки',
        buttons: [
          {
            text: 'Купити зараз',
            link: 'https://www.youtube.com/',
            isPrimary: true,
          },
          {
            text: 'Купити в кредит',
            link: 'https://www.youtube.com/',
            isSecondary: true,
          },
        ],
        characteristics: [
          { title: 'Діагональ', value: '15,6' },
          { title: 'Екран', value: 'IPS' },
          {
            title: 'Процесор',
            value: 'Intel Core i5-1135G7',
          },
          { title: 'Оперативна пам’ять', value: '8 ГБ' },
        ],
      },
      {
        img: 'https://picsum.photos/400/200',
        isFree: true,
        name: 'Ноут',
        review: {
          amount: 13,
          text: 'відгуків',
        },
        price: '25 000 ₴',
        delivery: 'Готовий до відправки',
        buttons: [
          {
            text: 'Купити зараз',
            link: 'https://www.youtube.com/',
            isPrimary: true,
          },
          {
            text: 'Купити в кредит',
            link: 'https://www.youtube.com/',
            isSecondary: true,
          },
        ],
        characteristics: [
          { title: 'Діагональ', value: '15,6' },
          { title: 'Екран', value: 'IPS' },
          {
            title: 'Процесор',
            value: 'Intel Core i5-1135G7',
          },
          { title: 'Оперативна пам’ять', value: '8 ГБ' },
        ],
      },
      {
        img: 'https://picsum.photos/400/200',
        isHot: true,
        isFree: true,
        name: 'Ноут',
        review: {
          amount: 13,
          text: 'відгуків',
        },
        price: '25 000 ₴',
        delivery: 'Готовий до відправки',
        buttons: [
          {
            text: 'Купити зараз',
            link: 'https://www.youtube.com/',
            isPrimary: true,
          },
          {
            text: 'Купити в кредит',
            link: 'https://www.youtube.com/',
            isSecondary: true,
          },
        ],
        characteristics: [
          { title: 'Діагональ', value: '15,6' },
          { title: 'Екран', value: 'IPS' },
          {
            title: 'Процесор',
            value: 'Intel Core i5-1135G7',
          },
          { title: 'Оперативна пам’ять', value: '8 ГБ' },
        ],
      },
      {
        img: 'https://picsum.photos/400/200',
        isHot: true,
        isFast: true,
        name: 'Ноут',
        review: {
          amount: 13,
          text: 'відгуків',
        },
        price: '25 000 ₴',
        delivery: 'Готовий до відправки',
        buttons: [
          {
            text: 'Купити зараз',
            link: 'https://www.youtube.com/',
            isPrimary: true,
          },
          {
            text: 'Купити в кредит',
            link: 'https://www.youtube.com/',
            isSecondary: true,
          },
        ],
        characteristics: [
          { title: 'Діагональ', value: '15,6' },
          { title: 'Екран', value: 'IPS' },
          {
            title: 'Процесор',
            value: 'Intel Core i5-1135G7',
          },
          { title: 'Оперативна пам’ять', value: '8 ГБ' },
        ],
      },
    ],
    formBlock: {
      header: 'Відгуки покупців про Ноут',
      rating: {
        title: 'Оцінка',
        value: '4.5/5',
      },
      actionBlock: {
        tabs: [
          { text: 'Про товар' },
          { text: 'Характеристики' },
          { text: 'Відгуки', isActive: true },
        ],
        report: {
          title: 'Залиште відгук про товар',
          button: {
            text: 'Написати відгук',
            link: 'https://www.youtube.com/',
          },
        },
      },
      feedbackBlock: {
        title:
          'Хочете поділитись своєю думкою про наш магазин?',
        buttons: [
          {
            text: 'Додати відгук',
            isWarning: true,
            link: 'https://www.youtube.com/',
          },
          {
            text: 'Позитивні відгуки',
            isSuccess: true,
            link: 'https://www.youtube.com/',
          },
          {
            text: 'Негативні відгуки',
            isDanger: true,
            link: 'https://www.youtube.com/',
          },
        ],
      },
      goodsInfo: {
        photo: 'https://picsum.photos/110/100',
        name: 'Ноут Asus',
        price: '25 000 ₴',
        inMarket: true,
        buttons: [
          {
            text: 'Купити',
            isPrimary: true,
            link: 'https://www.youtube.com/',
          },
          {
            text: 'Купити в кредит',
            isSecondary: true,
            link: 'https://www.youtube.com/',
          },
        ],
        seller: {
          title: 'Продавець',
          value: 'Machinery',
        },
      },
    },

    reviewList: [
      {
        title: {
          userName: 'Іван Іванов',
          caption: 'Відгук покупця',
          date: '1 січня 2023',
        },
        reviewBody: {
          seller: {
            title: 'Продавець',
            value: 'Machinery',
          },
          rating: {
            title: 'Оцінка',
            value: '5/5',
          },
          text: [
            "Цей ноутбук має гарний дизайн та добре виконує свої основні функції. Швидкість роботи та продуктивність в цілому є на задовільному рівні. Крім того, присутній достатній обсяг пам'яті та потужність акумулятора.",
            ' Однак, можливі проблеми з перегрівом під час тривалого використання, та може бути недостатньої ємності жорсткого диска для потреб користувача. Крім того, ціна може бути дещо високою порівняно з аналогічними моделями.',
          ],
          advantages: {
            title: 'Переваги',
            text: 'Дизайн, швидкість роботи, обсяг пам’яті, акумулятор',
          },
          disadvantages: {
            title: 'Недоліки',
            text: 'Перегрів, ємкість жосткого диску',
          },
          images: [
            'https://picsum.photos/110/100',
            'https://picsum.photos/110/100',
            'https://picsum.photos/110/100',
          ],
          coments: [
            {
              userName: 'Користувач',
              date: '1 січня 2023',
              text: 'Дякую за відгук, я подумаю про недоліки, про які ви згадували, перш ніж зробити покупку.',
            },
            {
              userName: 'Користувач',
              date: '3 січня 2023',
              text: 'Дякую за корисний відгук! Це допомогло мені зробити вибір щодо покупки ноутбука.',
            },
            {
              userName: 'Користувач',
              date: '10 січня 2023',
              text: 'Дякую за відгук, але я хотів би дізнатися більше деталей про проблеми з перегрівом, щоб зробити зважений вибір перед покупкою.',
            },
          ],
        },
      },
      {
        title: {
          userName: 'Петро Петров',
          caption: 'Відгук покупця',
          date: '1 січня 2023',
        },
        reviewBody: {
          seller: {
            title: 'Продавець',
            value: 'Machinery',
          },
          rating: {
            title: 'Оцінка',
            value: '5/5',
          },
          text: [
            "Цей ноутбук має гарний дизайн та добре виконує свої основні функції. Швидкість роботи та продуктивність в цілому є на задовільному рівні. Крім того, присутній достатній обсяг пам'яті та потужність акумулятора.",
          ],
          advantages: {
            title: 'Переваги',
            text: 'Обсяг пам’яті, акумулятор',
          },
          disadvantages: {
            title: 'Недоліки',
            text: 'Не виявлено',
          },
          images: ['https://picsum.photos/110/100'],
          coments: [
            {
              userName: 'Користувач',
              date: '1 січня 2023',
              text: 'Дякую за відгук, я подумаю про недоліки, про які ви згадували, перш ніж зробити покупку.',
            },
          ],
        },
      },
    ],

    service: {
      title: 'Our Services',
      description:
        'We offer a variety of services to meet your needs, including web design, content creation, and social media management.',
      buttons: [
        {
          text: 'Show More',
          link: 'https://www.youtube.com/',
        },
      ],
    },

    footer: [
      [
        {
          text: 'Home',
          link: 'https://www.youtube.com/',
        },
        {
          text: 'Trending',
          link: 'https://www.youtube.com/feed/trending',
        },
        {
          text: 'Subscriptions',
          link: 'https://www.youtube.com/feed/subscriptions',
        },
        {
          text: 'Library',
          link: 'https://www.youtube.com/feed/library',
          isDisabled: true,
        },
      ],
      [
        {
          text: 'History',
          link: 'https://www.youtube.com/feed/history',
        },
        {
          text: 'Your Videos',
          link: 'https://www.youtube.com/feed/my_videos',
        },
        {
          text: 'Live',
          link: 'https://www.youtube.com/live',
        },
        {
          text: 'Settings',
          link: 'https://www.youtube.com/account',
          isDisabled: true,
        },
      ],
      [
        {
          text: 'Watch Later',
          link: 'https://www.youtube.com/playlist?list=WL',
        },
        {
          text: 'Liked Videos',
          link: 'https://www.youtube.com/playlist?list=LL',
        },
        {
          text: 'Music',
          link: 'https://www.youtube.com/music',
        },
        {
          text: 'Gaming',
          link: 'https://www.youtube.com/gaming',
          isDisabled: true,
        },
      ],
      [
        {
          text: 'Sports',
          link: 'https://www.youtube.com/channel/UCo_q6aOlvPH7M-j_XGWVgXg',
        },
        {
          text: 'News',
          link: 'https://www.youtube.com/news',
        },
        {
          text: 'Fashion & Beauty',
          link: 'https://www.youtube.com/channel/UC1x8rV_f-2yPpzlN0JWZXIQ',
        },
        {
          text: 'Learning',
          link: 'https://www.youtube.com/learning',
          isDisabled: true,
        },
      ],
      [
        {
          text: 'Report History',
          link: 'https://www.youtube.com/feed/history/report_history',
        },
        {
          text: 'Help',
          link: 'https://support.google.com/youtube/?hl=en',
        },
        {
          text: 'Send Feedback',
          link: 'https://support.google.com/youtube/answer/4347644?hl=en',
        },
        {
          text: 'About',
          link: 'https://www.youtube.com/about/',
          isDisabled: true,
        },
      ],
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
