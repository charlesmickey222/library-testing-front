const BASE_URL = 'https://openlibrary.org/search.json?'

async function generalQuery(entry){
  const formattedEntry = entry.replaceAll(' ','+')
  try {
    const res = await fetch(`${BASE_URL}q=${formattedEntry}`)
    return await res.json()
  } catch (error) {
    throw error
  }
}

async function titleQuery(entry){
  const formattedEntry = entry.replaceAll(' ','+')
  try {
    const res = await fetch(`${BASE_URL}title=${formattedEntry}`)
    return await res.json()
  } catch (error) {
    throw error
  }
}

async function authorQuery(entry){
  const formattedEntry = entry.replaceAll(' ','+')
  try {
    const res = await fetch(`${BASE_URL}author=${formattedEntry}`)
    return await res.json()
  } catch (error) {
    throw error
  }
}


export{
  generalQuery,
  titleQuery,
  authorQuery
}