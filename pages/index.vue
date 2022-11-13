<script setup>
import { userStore } from "../stores/user";
const store = userStore();
const router = useRouter();
const strapi = import.meta.env.VITE_STRAPI_URL
const { data: photos } = await useFetch(strapi + `/photos`);
async function logout() {
  try {
    store.$reset();
    router.push("/auth/login");
  } catch (error) {
    console.log(error, "log out error catch");
    errors.value = error.response;
  }
}

</script>

<template>
  <div class="bg-white">
    <div
      class="fixed h-12 w-screen bg-white flex flex-row justify-between items-center px-5 bg-opacity-75"
    >
      <div class="text-2xl font-semibold uppercase">Koken Vue</div>
      <div class="flex flex-row">
        <div
          @click="router.push('/admin')"
          class="cursor-pointer pr-3"
          v-if="store.user.role.id == 3"
        >
          Admin
        </div>
        <div @click="logout" class="cursor-pointer" v-if="store.isLoggedIn">
          Logout
        </div>
        <div
          @click="router.push('/auth/login')"
          class="cursor-pointer"
          v-if="!store.isLoggedIn"
        >
          Log In
        </div>
      </div>
    </div>
    <div
      class="pt-12 bg-white min-h-full h-screen w-screen grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-0 md:gap-0.5"
    >
      <template v-for="photo in photos" :key="photo.id">
        <template v-if="photo.photo.width > photo.photo.height">
          <div class="col-span-2">
            <a :href="'/photo/' + photo.id"
              ><img
                :src="strapi + photo.photo.formats.small.url"
                class="block object-cover object-center w-full h-full col-span-2 cursor-pointer"
            /></a>
          </div>
        </template>
        <template v-else>
          <div>
            <img
              :src="strapi + photo.photo.formats.small.url"
              class="block object-cover object-center w-full h-full cursor-pointer"
              @click="navigateTo({ path: '/photo/' + photo.id })"
            />
          </div>
        </template>
      </template>
    </div>
  </div>
</template>
