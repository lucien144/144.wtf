<template>
    <main class="container">
        <div class="row">
            <div class="col-12">
                <div class="avatar mt-5">
                    <img src="@/assets/images/avatar.jpg" class="avatar__img"/>
                </div>
                <h1 class="my-4">Honza Blasko <span class="hello">👋</span></h1>
                <blockquote class="m-0">Frontend & Backend <span class="d-block d-md-inline">&mdash;</span> Prague & Sydney <span class="d-block d-md-inline">&mdash;</span> Chipmunks & Coffee</blockquote>
            </div>
        </div>

        <hr/>

        <div class="row">
            <div class="col-12 col-sm-6 text-center">
                <h3 class="u-darrow">About Me</h3>
                <ul class="list">
                    <li class="list__item">💼 <a href="https://www.linkedin.com/in/blaskojan" target="_blank">linkedin.com</a></li>
                    <li class="list__item">👨‍💻 <a href="https://github.com/lucien144?tab=repositories" target="_blank">github.com</a></li>
                    <li class="list__item">📸 <a href="https://www.instagram.com/coding.father/" target="_blank">instagram.com</a></li>
                </ul>
            </div>
            <div class="col-12 col-sm-6 mt-4 mt-sm-0 text-center">
                <h3 class="u-darrow">Side Projects</h3>
                <ul class="list">
                    <li class="list__item">👕 <a href="https://devnull.store" target="_blank">/dev/null/store</a></li>
                    <li class="list__item">🕹 <a href="https://www.thebuttongame.io" target="_blank">The Button Game</a></li>
                    <li class="list__item">🍿 <a href="https://artkina.cz" target="_blank">Artkina</a></li>
                </ul>
            </div>
        </div>

        <hr/>

        <div class="row">
            <div class="col-12 position-relative">
                <h2 class="u-darrow">My Work</h2>
                <p class="text-center" v-if="!showWork">Loading, plesae wait&hellip;</p>
                <div id="work-container" :class="{invisible: !showWork}">
                    <div class="card" macy-complete="1" v-for="(item, index) in getPosts()" :key="index">
                        <img :src="getThumbnail(item)" class="card__image">
                        <div class="card__description" v-html="item['photo-caption']"/>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import Macy from 'macy';
import data from '@/assets/work.json';

export default {
    computed: {
      posts() {
          return data.posts.filter(post => post.state === 'published');
      }
    },
    data() {
        return {
            showWork: false
        };
    },
    mounted() {
        const self = this;
        const macy = new Macy({
            container: '#work-container',
            columns: 3,
            margin: {
                y: 16,
                x: '2%',
            },
            breakAt: {
                1200: 3,
                1023: 2,
                400: 1
            },
        });

        // eslint-disable-next-line no-unused-vars
        macy.on(macy.constants.EVENT_IMAGE_COMPLETE, function (ctx) {
          self.showWork = true;
        });
    },
    methods: {
        getPosts(page = 1, perPage = 20) {
            return [...this.posts].splice((page - 1) * perPage, perPage * page);
        },
        getThumbnail(post, width = 400) {
            return post['photo-url'].find(photo => parseInt(photo['max-width']) <= width).copy;
        }
    },
}
</script>

<style lang="scss" scoped>
.hello {
    @keyframes hi {
        0%, 70%, 85%  { transform: rotate(0) }
        73%  { transform: rotate(-10deg) }
        76%  { transform: rotate(10deg) }
        79%  { transform: rotate(-10deg) }
        82%  { transform: rotate(10deg) }
    }
    display: inline-block;
    animation: hi 3s linear infinite;
}
.avatar__img {
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 150px;
    border-radius: 50%;
    border: 2px solid white;
    box-shadow: 0px 0px 1px 1px $grey;
}

.u-darrow:after {
    display: block;
    content: '↓';
    margin-top: 0.5rem;
}

.list {
    margin: 0;
    padding: 0;
    list-style: none;
}

.list__item {
    margin: .5rem 0;
}

hr {
    display: block;
    margin: 3rem 0;
    height: 1px;
    border: none;
    background-color: $grey-light;
}

.card {
    padding: 0.5rem;
    margin-bottom: 1rem;
    border-radius: 4px;
    overflow: hidden;
    border: 1px solid $grey-light;
    background-color: #fff;
}

.card__image {
  width: 100%;
  display: block;
  height: auto;
}

.card__description {
    padding: 1rem 1rem 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 0.95rem;
    line-height: 1.5;

    a {
        color: $grey;
    }

    iframe {
        width: 100%;
    }
}
</style>