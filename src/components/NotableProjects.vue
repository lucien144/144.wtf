<template>
    <div class="notable mb-5">
        <h3 class="d-flex align-items-center notable__title">{{ title }} <span v-if="type" class="notable__type">{{ type }}</span></h3>
        <p class="notable__description mb-1" v-html="description"/>
        <ul class="notable__links">
            <li v-for="(link, index) in links" :key="index">
                <a :href="link.url" target="_blank" class="notable__link">{{ link.title }}</a>
            </li>
        </ul>
        <ul class="notable__tags">
            <li v-for="(tag, index) in tags" :key="index">{{ tag }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: ''
        },
        links: {
            type: Array,
            default: () => ([])
        },
        tags: {
            type: Array,
            default: () => ([])
        },
    }
}
</script>

<style lang="scss" scoped>
.notable {
    &__type {
        display: inline-block;
        font-family: monospace;
        font-weight: normal;
        font-size: 0.7rem;

        display: inline-block;
        border: 1px solid $grey;
        color: $grey;
        padding: 2px 4px 3px;
        margin-left: 4px;
        border-radius: 4px;
    }

    &__description {
        font-family: 'Open Sans', sans-serif;
        font-size: 0.95rem;
        line-height: 1.5;
    }

    &__links {
        list-style: none;
        padding: 0;

        font-family: 'Open Sans', sans-serif;
        font-size: 0.95rem;
        line-height: 1.5;

        a {
            &:after {
                display: inline-block;
                content: '↓';
                transform: rotate(-135deg);
                font-weight: bold;
            }
        }
    }

    // TODO: Refactor to utility
    &__tags {
        margin: 0;
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
}

abbr {
    border-bottom: 1px dashed $grey-light;
    text-decoration: none;
}
</style>
