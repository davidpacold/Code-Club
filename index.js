addEventListener("fetch", event => {
    event.respondWith(handleRequest(event.request))
  })
  
  export default {
   fetch(request) {
     console.log(request.url)
     if(request.method== "POST") {
       return new Response('Hello worker!', {
         headers: {
           'content-type': 'application/json',
         },
       });
     }
     else {
       return new Response('Sorry, wrong method type!', {
         headers: {
           'content-type': 'text/plain',
         },
       });
     }
   },
  };