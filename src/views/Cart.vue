<template>
  <div class="cart">
    <Navbar />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/tshirt" class="text-dark"
                  >T-Shirt</router-link
                >
              </li>
              <li class="breadcrumb-item active" aria-current="page">Cart</li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <h2>My <strong>Cart</strong></h2>
          <div class="table-responsive mt-3">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Photo</th>
                  <th scope="col">T-Shirt</th>
                  <th scope="col">Size</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Total Price</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(cart, index) in carts" :key="cart.id">
                  <th>{{ index + 1 }}</th>
                  <td>
                    <img
                      :src="'../assets/images/' + cart.products.gambar"
                      class="img-fluid shadow"
                      width="100"
                    />
                  </td>
                  <td>
                    <strong>{{ cart.products.nama }}</strong>
                  </td>
                  <td align="left">{{ cart.ukuran ? cart.ukuran : "-" }}</td>
                  <td align="left">{{ cart.jumlah_pesan }}</td>
                  <td align="left"> Rp. {{cart.products.harga}}</td>
                  <td align="left"><strong> Rp. {{cart.products.harga*cart.jumlah_pesan}}</strong></td>
                  <td align="center"><b-icon-trash></b-icon-trash></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  name: "Cart",
  components: {
    Navbar,
  },
  data() {
    return {
      carts: [],
    };
  },
  methods: {
    setCarts(data) {
      this.carts = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/carts")
      .then((response) => this.setCarts(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>
