export default defineNuxtRouteMiddleware ((to) => {
  const hasCookies = true;

  if (hasCookies) {
    return navigateTo(to.fullPath)
  }

  return navigateTo('/')
})