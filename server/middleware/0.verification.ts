export default defineEventHandler((event) => {
  if (event.path === '/98a48889564439c15159ceb5bda37327.txt') {
    setResponseHeader(event, 'Content-Type', 'text/plain')
    return '58285932c44dc498a0c1a4996be3be53bcabab72'
  }
})
