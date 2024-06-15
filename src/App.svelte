<script>
  import "./app.css";
  import routes from "../.routify/routes.default.js";
  import { Router, createRouter } from "@roxi/routify";
  export const router = createRouter({
    routes
  });
</script>

<Router {router}></Router>

<main>

</main>

<style>

</style>
