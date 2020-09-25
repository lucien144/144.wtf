<template>
    <div>
        <div class="row">
            <div class="col-12 position-relative">
                <h2 class="u-darrow">Recent Work</h2>
                <p class="text-center" v-if="!showWork">Loading, plesae wait&hellip;</p>
                <div id="work-container" :class="{invisible: !showWork}">
                    <div class="card" macy-complete="1" v-for="(item, index) in getPosts()" :key="index">
                        <img :src="getThumbnail(item)" class="card__image">
                        <div class="card__description" v-html="item['photo-caption']"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Macy from 'macy';
import data from '@/assets/archive.json';

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
