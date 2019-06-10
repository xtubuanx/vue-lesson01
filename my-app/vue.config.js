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
        form: {
            entry: 'src/form/main.js',
            template: 'public/form.html',
            filename: 'form.html',
            title: 'Form Page',
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