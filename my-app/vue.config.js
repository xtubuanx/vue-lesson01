module.exports = {
    // ...
    pages: {
        //これはSPA形式ではない。
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'Index Page',
        },
        navigation: {
            entry: 'src/navigation/main.js',
            template: 'public/navigation.html',
            filename: 'navigation.html',
            title: 'Navigation Page',
        },
    },
    // ...
}

//https://cli.vuejs.org/config/
//このあたりのセッティングが使える