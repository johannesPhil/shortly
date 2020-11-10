<template>
  <div class="footer p-3">
    <div class="container flex">
      <div class="logo">
        <img src="@/assets/images/logo.svg" alt="" />
      </div>
      <div class="quicklink-features">
        <h3>Features</h3>
        <ul class="mt-2">
          <li class="my-1"><a href="">Link Shortening</a></li>
          <li class="my-1"><a href="">Branded Links</a></li>
          <li class="my-1"><a href="">Analytics</a></li>
        </ul>
      </div>
      <div class="quicklink-resources">
        <h3>Resources</h3>
        <ul class="mt-2">
          <li class="my-1"><a href="">Blog</a></li>
          <li class="my-1"><a href="">Developers</a></li>
          <li class="my-1"><a href="">Support</a></li>
        </ul>
      </div>
      <div class="quicklink-company">
        <h3>Company</h3>
        <ul class="mt-2">
          <li class="my-1"><a href="">About</a></li>
          <li class="my-1"><a href="">Our Team</a></li>
          <li class="my-1"><a href="">Careers</a></li>
          <li class="my-1"><a href="">Contact</a></li>
        </ul>
      </div>
      <div class="social">
        <div class="flex">
          <div class="icons mx-1">
            <img src="@/assets/images/icon-facebook.svg" alt="" />
          </div>
          <div class="icons mx-1">
            <img src="@/assets/images/icon-instagram.svg" alt="" />
          </div>
          <div class="icons mx-1">
            <img src="@/assets/images/icon-twitter.svg" alt="" />
          </div>
          <div class="icons mx-1">
            <img src="@/assets/images/icon-pinterest.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
.footer {
  background: var(--dark-blue);
  color: #fff;
}

.footer .flex {
  justify-content: space-between;
  align-items: flex-start;
}

.footer a {
  color: var(--gray);
}

.logo img {
  filter: invert(100%);
}

.social .flex {
  flex-direction: row !important;
  justify-content: space-between;
}

@media (max-width: 760px) {
  .footer .flex {
    flex-direction: column;
    align-items: center;
  }

  .container {
    text-align: center;
  }

  .logo {
    margin-bottom: 20px;
  }
}
</style>
