const cookies = [{ name: 'Chocolate Cookies' }, { name: 'Macaron Cookies' }];
const newCookie = { name: 'Biscotti Cookies' };

// Progression 1: create a function to get all the cookies
function getCookies(cookies) {
  storeCookie = [];
  cookies.forEach((cookie) => {
    storeCookie.push(cookie['name']);
  });
  // Progression 2: using setTimeout() - use 1000 units for time parameter
  setTimeout(function printCookie() {
    storeCookie.forEach((printEachCookie) => {
      document.body.innerHTML += '<p>' + printEachCookie + '</p>';
    }, 1000);
  });
  console.log(storeCookie);
  return storeCookie;
}

//Progression 3: Create a function to creat cookies and create an object of Promise.
function getNewCookie(newCookie) {
  return new Promise((resolve, reject) => {
   // Progression 4: adding two parameters and using setTimeout() -- use 2000 units for time parameter
    setTimeout(function addNewCookie() {
      cookies.push(newCookie);
      let error = false;
    if (error == false) {
      resolve('promise resolved');
    } else {
      reject("promise rejected");
    }
    }, 2000);
    
  });
}
// Progression 5: handling errors and adding new cookie to the list

// Progression 6: call function using `.then`

// Progression 4: calling functions
getNewCookie(newCookie).then((res)=>{
  console.log(res)
  getCookies(cookies)
}).catch((error)=>{
 console.log(error)
})
