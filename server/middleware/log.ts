export default defineEventHandler((event) => {
  console.log("New Request : " + event.node.req.url)
})