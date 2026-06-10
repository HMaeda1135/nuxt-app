export const useCounter = () => {
  const count = ref(0)
  const doubled = computed(() => count.value * 2)

  const increment = () => {
    count.value++
  }

  return {
    count,
    doubled,
    increment,
  }
}
