<!-- components/global/IconArrowBlack -->
<script setup>
const props = defineProps({
  isBlue: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <svg
    class="rotate-180"
    width="14"
    height="12"
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      :fill="props.isBlue ? '#1463FF' : '#1D1E25'"
      clip-rule="evenodd"
      d="M7.73659 13.0362C7.38512 13.3877 6.81527 13.3877 6.4638 13.0362L1.0638 7.6362C0.712326 7.28473 0.712326 6.71488 1.0638 6.36341L6.4638 0.963408C6.81527 0.611935 7.38512 0.611935 7.73659 0.963408C8.08806 1.31488 8.08806 1.88473 7.73659 2.2362L3.87299 6.0998L14.3002 6.0998C14.7973 6.0998 15.2002 6.50275 15.2002 6.9998C15.2002 7.49686 14.7973 7.8998 14.3002 7.8998L3.87299 7.8998L7.73659 11.7634C8.08806 12.1149 8.08806 12.6847 7.73659 13.0362Z"
    />
  </svg>
</template>
