const posts = [
    {
      title: "Post one",
      body: "This is post one",
      createdAt: new Date().getTime(),
    },
    {
      title: "Post two",
      body: "This is post two",
      createdAt: new Date().getTime(),
    },
  ];
  
  let intervalId = 0;
  function getposts() {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
      let output = "";
      posts.forEach((post, index) => {
        output += `<li>${post.title} -last Edited on ${
          (new Date().getTime() - post.createdAt) / 1000
        } -seconds ago</li>`;
      });
      // console.log(output);
      document.body.innerHTML = output;
    }, 1000);
  }
  
  function createPosts(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        posts.push({ ...post, createdAt: new Date().getTime() });
        const error = false;
        if (!error) {
          resolve('this is createPost');
        } else {
          reject("Error:There is something wrong");
        }
      }, 1000);
    });
  }
  
  
  
  // async await
  //  async function createPosts(post) {
  //   return await new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       posts.push({ ...post, createdAt: new Date().getTime() });
  //       const error = false;;
  //       if (!error) {
  //         resolve();
  //       } else {
  //         reject("Error:There is something wrong");
  //       }
  //     }, 1000);
  //   });
  // }
  
  
  // function deletePost(){
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (posts.values!=0) {
  //         resolve(posts.pop());
  //       }
  //       else{
  //         reject('Array is empty now')
  //       }
          
  //     }, 1000);
  //   })
  // }
  
  // createPosts({
  //   title:'Post Third',
  //   lastActivity:'4th may'
  // })
  // .then(()=>{
  //   getposts();
  //   deletePost().then(()=>{
  //     getposts();
  //   })
  // }).catch ((err) =>
  // console.log(err));
  
  
  
  // Delete All Posts
  
  // function deleteAllPost(){
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (posts.length>0) {
  //         resolve(posts.pop());
  //       }else{
  //         reject('Array is empty now')
  //       }
  //     }, 3000);
  //   })
  // }
  
  // createPosts({
  //   title:'Post Fourth',
  //   body:'This is fourth post'
  // })
  // .then(()=>{
  //   getposts();
  //   deleteAllPost().then(()=>{
  //     getposts();
  //     deleteAllPost().then(()=>{
  //       getposts();
  //       deleteAllPost().then(()=>{
  //         getposts();
  //         deleteAllPost().then(()=>{
  //           getposts();
  //           deleteAllPost().then(()=>{})
  //           .catch ((err) =>
  //           console.log(err));
  
  //         }).catch ((err) =>
  //         console.log('inside catch block', err));
  
  //       }).catch ((err) =>
  //       console.log(err));
  
  //     }).catch ((err) =>
  //     console.log(err));
      
  //   }).catch ((err) =>
  //   console.log(err));
  
  // }).catch ((err) =>
  //     console.log(err));
    
  
  
  // Promise All
  
  
  // const promise1=Promise.resolve('resolve');
  // const promise2=10;
  // const promise3=new Promise((resolve,reject)=>
  // setTimeout(resolve,2000,'GoodBye')
  // );
  
  // const promise4=fetch('https://jsonplaceholder.typicode.com/users').then(res=>
  //     res.json());
  
  
  // Promise.all([promise1,promise2,promise3,promise4])
  // .then(values=>console.log(values));
  
  const user={
    title:'Post Third',
    lastActivity:new Date().getTime()
  }
  
  updateLastActivityTime=()=>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        user.lastActivity=new Date().getTime();
        resolve(user.lastActivity);
      }, 1000);
    })
  }
  
  function updateData(){
    Promise.all([createPosts({title:'Post New',body:'inside the promise all'}),updateLastActivityTime()])
    .then(([data1,data2])=>{
      getposts();
      console.log(data1);
      console.log(data2/1000*60*60);
      
    })
    .catch(err=>console.log(err));
  }
  updateData();
  
    
  
  // userUpdatePost();
  
  //async await
  
  
  // async function init(){
  //     await createPosts({
  //         title:'Post Third',
  //         body:'This is third post'
  //     });
  //     getposts();
  // }
  // init();
  
  // async function fetchUsers(){
  //     const res=await fetch('https://jsonplaceholder.typicode.com/users');
  //     const data=await res.json();
  //     console.log(data);
  // }
  
  // fetchUsers();
  
  
  
  
  
    