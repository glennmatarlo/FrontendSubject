<template>
<div>
<br><br><br><br><br><br><br><br>
<!-- Footer -->
<footer class="text-center text-lg-start bg-light text-muted">
  <!-- Section: Social media -->
  <section
    class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
  >
    <!-- Left -->
    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    <!-- Left -->

    <!-- Right -->
    <div>
      <a href="facebook.com" class="me-4 text-reset">
        <i><img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" width="50px;" alt=""></i>
      </a>
      <a href="twitter.com" class="me-4 text-reset">
        <i><img src="https://lh3.googleusercontent.com/proxy/YQ9GPcghnJE7y1Ai2gRAUnKzxAQ30Ocfae9MmP2NauZ-pZ3APh3Ym8y3zt00FOzudg8rQqG5TzCdDc55hIlIN_KXyIFQKvY" width="35px;" alt=""></i>
      </a>
      <a href="youtube.com" class="me-4 text-reset">
        <i><img src="https://i.pinimg.com/originals/19/7b/36/197b365922d1ea3aa1a932ff9bbda4a6.png" width="40px;" alt=""></i>
      </a>
    </div>
    <!-- Right -->
  </section>
  <!-- Section: Social media -->

  <!-- Section: Links  -->
  <section class="">
    <div class="container text-center text-md-start mt-5">
      <!-- Grid row -->
      <div class="row mt-3">
        <!-- Grid column -->
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <!-- Content -->
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>FULLSTACKPROJECT
          </h6>
          <p>
            You can view, add, update and delete subjects.
          </p>
        </div>
        <!-- Grid column -->



        <!-- Grid column -->
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p><i class="fas fa-home me-3"></i> Cabulijan, Tubigon, Bohol</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            FullStackProject@gmail.com
          </p>
          <p><i class="fas fa-phone me-3"></i> +63912368941</p>
          <p><i class="fas fa-print me-3"></i> +63 (038) 508 6944</p>
        </div>
        <!-- Grid column -->
      </div>
      <!-- Grid row -->
    </div>
  </section>
  <!-- Section: Links  -->

  <!-- Copyright -->
  <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
    © 2021 Copyright:
    <a class="text-reset fw-bold" href="https://google.com/">FULLSTACKPROJECT.com</a>
  </div>
  <!-- Copyright -->
</footer>
<!-- Footer -->

</div>
</template>

<script>
export default {
    methods: {
        async onLogout() {
            this.$auth.logout()
        }
    }
}
</script>
