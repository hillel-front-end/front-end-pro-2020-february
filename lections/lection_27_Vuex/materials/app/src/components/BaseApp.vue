<template>
  <div class="base-app-container">
    <header>
      <slot name="header"></slot>
    </header>

    <footer>
      <slot name="footer"></slot>
    </footer>   

    <article>
      <slot name="content"></slot>
    </article>
  </div>
</template>

<script>
export default {
  name: 'BaseApp'
}
</script>
