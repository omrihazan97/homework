let allData = [];
let myPosts = [
  {
    postID: 1,
    postTitle: "TitleOfPost1",
    postBody: "post number 1",
  },
  {
    postID: 2,
    postTitle: "TitleOfPost2",
    postBody: "post number 2",
  },
  {
    postID: 3,
    postTitle: "TitleOfPost3",
    postBody: "post number 3",
  },
];

let myComments = [
  {
    commentID: 1,
    commentToPost: 1,
    commentBody: "This is comment number 1",
  },
  {
    commentID: 2,
    commentToPost: 1,
    commentBody: "This is comment number 1",
  },
  {
    commentID: 3,
    commentToPost: 2,
    commentBody: "This is comment number 2",
  },
  {
    commentID: 4,
    commentToPost: 2,
    commentBody: "This is comment number 2",
  },
  {
    commentID: 5,
    commentToPost: 3,
    commentBody: "This is comment number 3",
  },
  {
    commentID: 6,
    commentToPost: 3,
    commentBody: "This is comment number 3",
  },
];

let getPosts = new Promise((resolve) => {
  setTimeout(() => {
    console.log(myPosts);
    resolve(myPosts);
  }, 2000);
});

let getComments = new Promise((resolve) => {
  setTimeout(() => {
    console.log(myComments);
    resolve(myComments);
  }, 2000);
});

// allPosts==parameter==myPosts
// allComments==parameter==myComments
getPosts
  .then((allPosts) => pushPosts(allPosts)) // דחוף את המערך myPosts >> allData=[myPosts,----]
  .then(() => getComments) //עבר לפונקציה השניה באצעות קריאה לה
  .then((allComments) => pushComments(allComments)) // דחוף את המערך pushComments >> allData=[myPosts,myComments]
  .then(() => console.log(allData))
  .then(() => aler()); //allData=[myPosts,myComments] console

// אחראית לדחיפה
function pushPosts(postsToPush) {
  allData.push(postsToPush);
  return postsToPush;
}
// אחראית לדחיפה

function pushComments(commentsToPush) {
  allData.push(commentsToPush);
  return commentsToPush;
}

function aler() {
  // allData.forEach((element) => {
  //   document.body.innerHTML += JSON.stringify(element);
  // });
  let html = ``;
  allData[0].forEach((post) => {
    // post ==mypost
    html += `<h1>${post.postTitle}</h1>`; // post ==mypost,postTitle
    allData[1].forEach((comment) => {
      if (comment.commentToPost == post.postID) {
        html += `<p>${comment.commentBody}</p>`;
      }
    });
  });

  document.body.innerHTML = html;
}
