addEventListener("fetch", event => {
    event.respondWith(handleRequest(event.request))
  })
  
  const responseMap = {
      0: 'hello',
      1: 'welcome',
      2: 'goodbye',
      3: 'cheers',
    };
  
  
  function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

  const randomnumber= getRandomInt(4)
  console.log(randomnumber)
  
  async function handleRequest(request) {
    if (randomnumber != null && randomnumber in responseMap) {
    const tableresponse = responseMap[randomnumber];
    return new Response(tableresponse)
    }
    else {
          return fetch(request);
        }
      }