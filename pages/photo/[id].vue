<script setup>
const route = useRoute()
console.log(route.params.id)
const strapi = 'http://192.168.1.99:1337'
const { pending, data: photo } = await useFetch(strapi + `/photos?id=` + route.params.id)
watch(() => photo, () => refresh());
</script>

<template>
    <div class="bg-white">
{        <div v-if="!pending" class="flex flex-col justify-around items-center">
            <div class="text-2xl font-semibold py-2 md:py-4 lg:py-10" v-html="photo[0].Title ? photo[0].Title : photo[0].photo.name"></div>
            <nuxt-img :src="strapi + photo[0].photo.formats.large.url"
            sizes="sm:100vw md:50vw lg:400px"
            quality="100"
            loading="lazy" />
            <div class="text-xl font-normal p-10">{{photo[0].Caption}}</div>

        </div>}

    </div>
</template>
