<template>
    <main class="container">
        <div class="row">
            <div class="col-12">
                <div class="avatar mt-5">
                    <img src="@/assets/images/avatar.jpg" class="avatar__img"/>
                </div>
                <div class="hello">
                    <h1 class="my-4">Honza Blasko <span class="hello__wave">👋</span></h1>
                    <blockquote><abbr title="Vue.js / Nuxt.js, Laravel">Fullstack</abbr> &amp; <abbr title="Flutter">Mobile</abbr> Dev<span class="d-block d-md-inline">&mdash;</span> Prague & Sydney <span class="d-block d-md-inline">&mdash;</span> Chipmunks & Coffee</blockquote>
                    <p class="text-center mb-0">📍 I’m currently the tech lead at <a href="https://circul8.com.au/" target="_blank" class="hello__c8">Circul8</a>.</p>
                </div>
            </div>
        </div>

        <hr/>

        <div class="row">
            <div class="col-12 col-sm-6 text-center">
                <h3 class="u-darrow">About Me</h3>
                <ul class="list">
                    <li class="list__item">💼&nbsp;&nbsp;<a href="https://www.linkedin.com/in/blaskojan" target="_blank">linkedin.com</a></li>
                    <li class="list__item">👨‍💻&nbsp;&nbsp;<a href="https://github.com/lucien144?tab=repositories" target="_blank">github.com</a></li>
<!--                    <li class="list__item">📸&nbsp;&nbsp;<a href="https://www.instagram.com/coding.father/" target="_blank">instagram.com</a></li>-->
                    <li class="list__item">🔉&nbsp;&nbsp;<router-link to="/spotify">spotify.com</router-link></li>
                </ul>
            </div>
            <div class="col-12 col-sm-6 mt-4 mt-sm-0 text-center">
                <h3 class="u-darrow">Side Projects</h3>
                <ul class="list">
                    <li class="list__item">📱&nbsp;&nbsp;<a href="https://github.com/lucien144/fyx" target="_blank">Fyx for Nyx.cz</a>&nbsp;<sup>🇨🇿</sup></li>
                    <li class="list__item">👕&nbsp;&nbsp;<a href="https://devnull.store" target="_blank">/dev/null store</a></li>
                    <li class="list__item list__item--disabled">🕹&nbsp;&nbsp;<a href="https://www.thebuttongame.io" target="_blank">The Button Game</a></li>
                    <li class="list__item list__item--disabled">🍿&nbsp;&nbsp;<a href="https://artkina.cz" target="_blank">Artkina</a>&nbsp;<sup>🇨🇿</sup></li>
                </ul>
            </div>
        </div>

        <hr/>

        <div class="row">
            <div class="col-12 position-relative">
                <h2 class="u-darrow">⚡️ Recent Work</h2>
                <p class="text-center" v-if="!showWork">Loading, plesae wait&hellip;</p>
                <div id="work-container" :class="{invisible: !showWork}">
                    <div class="card" macy-complete="1" v-for="(project, index) in projects" :key="index">
                        <img :src="require(`@/assets/images/work/${project.image}`)" class="card__image">
                        <div class="px-3 py-2">
                            <h3 class="card__title" v-html="project.title"/>
                            <div class="card__copy">
                                <h4>About</h4>
                                <p>{{ project.description }}</p>
                                <h4>Client</h4>
                                <p>{{ project.client }}</p>
                                <template v-if="project.awards.length">
                                    <h4>🏆 Awards</h4>
                                    <ul v-if="project.awards" class="card__awards">
                                        <li v-for="(award, index) in project.awards" :key="index">
                                            <a :href="award.link">{{ award.title }}</a>
                                        </li>
                                    </ul>
                                </template>
                                <h4>Technologies</h4>
                                <ul v-if="project.tags" class="card__tags">
                                    <li v-for="(tag, index) in project.tags" :key="index" v-text="tag"/>
                                </ul>
								<template v-if="project.link || project.casestudy">
									<h4>Links</h4>
									<div class="d-flex flex-row">
										<a v-if="project.casestudy" :href="project.casestudy" target="_blank" class="card__btn">🔬 Casestudy</a>
										<a v-if="project.link" :href="project.link" target="_blank" class="card__btn card__btn--website">Website</a>
									</div>
								</template>
                            </div>
                            <a v-if="project.link" :href="project.link" target="_blank" class="card__link"><span class="d-none">Show me</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr>

        <div class="row">
            <div class="col-12 position-relative">
                <h2 class="u-darrow">👀 Most Notable Projects</h2>
            </div>
        </div>

        <div class="row">
            <div class="col-12 col-sm-4 col-lg-3" v-for="(notable, index) in notables">
                <NotableProjects
                    :key="index"
                    :title="notable.title"
                    :type="notable.type"
                    :description="notable.description"
                    :links="notable.links"
                    :tags="notable.tags"
                />
            </div>
        </div>

        <hr>

        <p class="text-center mb-5">All rights reserved.<br>&copy; {{ date }} Jan Blasko</p>
    </main>
</template>

<script>
import Macy from 'macy';
import data from '@/assets/recent.json';
import notable from '@/assets/notable.json';
import NotableProjects from '@/components/NotableProjects';

export default {
    components: {NotableProjects},
    computed: {
        projects: () => data,
        notables: () => notable,
        date: () => (new Date).getFullYear()
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
    }
}
</script>

<style lang="scss" scoped>
.hello {
    &__wave {
        @keyframes hi {
            0%, 70%, 85% {
                transform: rotate(0)
            }
            73% {
                transform: rotate(-10deg)
            }
            76% {
                transform: rotate(10deg)
            }
            79% {
                transform: rotate(-10deg)
            }
            82% {
                transform: rotate(10deg)
            }
        }
        display: inline-block;
        animation: hi 3s linear infinite;
    }
    &__c8 {
        color: $grey;
        font-weight: $font-weight-black;
    }
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

.list {
    margin: 0;
    padding: 0;
    list-style: none;
}

.list__item {
    margin: .5rem 0;

    &--disabled {
        opacity: 0.4;
        filter: grayscale(.4);
        &:hover {
          opacity: 1;
          filter: none;
        }
    }
}

hr {
    display: block;
    margin: 3rem 0;
    height: 1px;
    border: none;
    background-color: $grey-light;
}

.card {
    position: relative;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border-radius: 4px;
    overflow: hidden;
    border: 1px solid $grey-light;
    background-color: #fff;

    &:hover {
        box-shadow: 0 0 10px $grey-light;
        transition: all 0.3s ease-out;
    }

    &__image {
        width: 100%;
        display: block;
        height: auto;
    }

    &__copy {
        p {
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
    }

    &__tags {
        margin: 0 0 1rem 0;
        padding: 0;
        list-style: none;
        font-family: 'Open Sans', sans-serif;
        font-size: .85rem;
        li {
            display: inline-block;
            background-color: $grey-light;
            padding: 2px 4px 3px;
            margin-bottom: 4px;
            margin-right: 4px;
            border-radius: 4px;
        }
    }

    &__awards {
        font-family: 'Open Sans', sans-serif;
        list-style: none;
        padding: 0;
        li {
            font-size: 0.95rem;
            &:before {
                display: inline-block;
                padding: 0 .3rem 0 1rem;
                content: '★';
                font-size: 0.7rem;
                transform: translateY(-2px);
            }
        }
        a {
            position: relative;
            z-index: 10;
        }
    }

    &__link {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
	
	&__btn {
		position: relative;
		z-index: 10;
		padding: 0.2rem .5rem;
		margin: 0 0.2rem 0.5rem 0;
		color: currentColor;
		background: $grey-light;
		border: 1px solid $creme;
		border-radius: 4px;
		font-family: 'Open Sans', sans-serif;
		font-size: .85rem;
		&:hover {
			border: 1px solid $grey-light;
			background: $creme;
			text-decoration: none;
		}
	}
}

abbr {
    border-bottom: 1px dashed $grey-light;
    text-decoration: none;
}
</style>
