<template>
  <div class="fold-detail">
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
              <li class="breadcrumb-item active" aria-current="page">
                T-Shirt Detail
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-md-6">
          <img
            :src="'../assets/images/' + product.gambar"
            class="img-fluid shadow"
          />
        </div>
        <div class="col-md-6">
          <h2>
            <strong>{{ product.nama }}</strong>
          </h2>
          <hr />
          <h4>
            Price : <strong>Rp. {{ product.harga }}</strong>
          </h4>
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group">
              <label for="jumlah_pesan">Order Quantity</label>
              <input
                type="number"
                class="form-control"
                v-model="pesan.jumlah_pesan"
              />
            </div>
            <div class="form-group">
              <label for="ukuran">Size</label>
              <textarea
                v-model="pesan.ukuran"
                class="form-control"
                placeholder="Ex. Size : S, M, L, . . ."
              ></textarea>
            </div>
            <button type="submit" class="btn btn-success" @click="pemesanan">
              <b-icon-cart></b-icon-cart> Order
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  name: "T-ShirtDetail",
  components: {
    Navbar,
  },
  data() {
    return {
      product: {},
      pesan: {},
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
    pemesanan() {
      if (this.pesan.jumlah_pesan) {
        this.pesan.products = this.product;
        axios
          .post("http://localhost:3000/carts", this.pesan)
          .then(() => {
            this.$router.push({ path: "/cart" });
            this.$toast.success("Order In Cart", {
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissible: true,
            });
          })
          .catch((err) => console.log(err));
      } else {
        this.$toast.error("Order Quantity Must Be Filled", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/best-products/" + this.$route.params.id)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>
