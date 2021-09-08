


export const getPharm = async() => {
  const url = 'http://localhost/web_site/apiPharm/'
  const reponse = await axios.get(url)
    .then((response) => response.json())
    .catch((error) => console.log(error))
}
