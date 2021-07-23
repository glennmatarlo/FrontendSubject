<template>
  <div>
    <NavBar />
    <template v-if="$auth.loggedIn">
      <div class="container">
          <h1 class="mt-3">Welcome {{$auth.user.name}}</h1>
      </div>
    </template>
    <template v-else>
      <div class="container">
        <h1 class="mt-3">Welcome</h1>
      </div>
    </template>
    <Footer />
  </div>
</template>

<script>
export default {
  auth: false
}
</script>