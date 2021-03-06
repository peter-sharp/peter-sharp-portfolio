import {briefcase} from 'briefcase'

import Choo from 'choo'

import mediaArticleService from 'services/mediaArticles'
import pageService from 'services/pages'

import mainView from 'templates/main'
import homeView from 'templates/home'
import contactView from 'templates/contact'
import notFoundView from 'templates/notFound'
import mediaView from 'templates/media'
import menuStore from 'stores/menu'
import mainStore from 'stores/main'
import mediaStore from 'stores/media'
import pagesStore from 'stores/pages'
console.info(`%c${briefcase}`, 'color: yellow; text-shadow: 2px 2px 5px rgba(0,0,0,0.5)')

const app = Choo()

app.use(mainStore)
app.use(menuStore)
app.use(pagesStore.bind(null, pageService))
app.use(mediaStore.bind(null, mediaArticleService))

app.route('/', mainView.bind(null, homeView))
app.route('/contact', mainView.bind(null, contactView))
app.route('/media/:id', mainView.bind(null, mediaView))
app.route('*', mainView.bind(null, notFoundView))

app.mount('.js-app')
