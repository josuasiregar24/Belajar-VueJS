<template>
  <div class="hero">
    <!-- Dekstop -->
    <div class="d-none d-md-block">
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>I'ts Time, </strong> <br />
                Back To Basic
              </h2>
              <p>Come On, Choose Your Favorite Plain T-Shirt</p>
              <router-link class="btn btn-lg btn-success" to="/tshirt">
                <b-icon-arrow-right></b-icon-arrow-right> Order</router-link
              >
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="../assets/images/kaossebelah.png" width="100%" />
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-4">
        <div class="col-md-6 mb-3">
          <img src="../assets/images/kaossebelah.png" width="100%" />
        </div>
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>I'ts Time, </strong> <br />
                Back To Basic
              </h2>
              <p>Come On, Choose Your Favorite Plain T-Shirt</p>
              <router-link class="btn btn-lg btn-success" to="/tshirt">
                <b-icon-arrow-right></b-icon-arrow-right> Order</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style>
</style>