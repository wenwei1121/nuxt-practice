export default defineEventHandler(async () => {
  // handle query params
  // const { name } = useQuery(event)

  // handle post data
  // const { age } = await useBody(event)

  // api call with private key
  const { currencyKey } = useRuntimeConfig()
  const { data } = await $fetch(`https://api.currencyapi.com/v3/latest?apikey=${currencyKey}`)
  return data
})
