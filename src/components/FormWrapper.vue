<!-- 
  This wrapper-component only provides the visual appearance of a form. Inputs and form logic must be handled in the parent component. The component accepts a "title"-, "form"- and "footnote"-slot.
-->
<!--
  Do i really need this component? When implementing a form, you most of the time want to have control about the placing of the form, the width and other options.
 -->

<template>
  <div class="outer-container">
    <div class="form-container">
      <h2 class="title">
        <slot name="title" />
      </h2>
      <form @submit.prevent="$emit('onSubmit')">
        <slot name="form" />
      </form>
      <span class="footnote">
        <slot name="footnote" />
      </span>
    </div>
  </div>
</template>

<style scoped>
.outer-container {
  min-height: calc(100vh - (2 * var(--header-height)));
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-container {
  width: fit-content;
  min-width: 420px;
  padding: 40px 60px;
}
.title {
  text-align: center;
}
form {
  display: flex;
  flex-direction: column;
  margin: 40px 0 20px 0;
}
.footnote {
  display: block;
  font-size: 1.4rem;
  text-align: center;
}
</style>
