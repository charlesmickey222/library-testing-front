const BASE_URL = 'https://openlibrary.org/search.json?q='

async function generalQuery(entry){
  const formattedEntry = entry.replaceAll(' ','+')
  try {
    const res = await fetch(`${BASE_URL}${formattedEntry}`)
    return await res.json()
  } catch (error) {
    throw error
  }
}

export{
  generalQuery
}