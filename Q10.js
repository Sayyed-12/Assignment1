const posts = [
  { id: 1, author: "user1", content: "Hello world!", likes: 15, tags: ["greeting", "first"] },
  { id: 2, author: "user2", content: "JavaScript is awesome", likes: 32, tags: ["programming", "js"] },
  { id: 3, author: "user1", content: "Learning arrays", likes: 18, tags: ["programming", "learning"] },
  { id: 4, author: "user3", content: "Good morning!", likes: 8, tags: ["greeting"] }
];


//a) Find the most popular post (highest likes):
 
function getMostPopularPost(posts) {
  var mostLiked = posts[0];
  for (var i = 1; i < posts.length; i++) {
    if (posts[i].likes > mostLiked.likes) {
      mostLiked = posts[i];
    }
  }
  return mostLiked;
}

var popularPost = getMostPopularPost(posts);
console.log("Most Popular Post:", popularPost);


//b) Get all unique tags used across all posts:
 
function getUniqueTags(posts) {
  var tagSet = [];

  for (var i = 0; i < posts.length; i++) {
    var tags = posts[i].tags;
    for (var j = 0; j < tags.length; j++) {
      if (tagSet.indexOf(tags[j]) === -1) {
        tagSet.push(tags[j]);
      }
    }
  }

  return tagSet;
}

var uniqueTags = getUniqueTags(posts);
console.log("Unique Tags:", uniqueTags);



//c) Calculate average likes per author:
 
function getAverageLikes(posts) {
  var authorMap = {};

  for (var i = 0; i < posts.length; i++) {
    var author = posts[i].author;
    var likes = posts[i].likes;

    if (!authorMap[author]) {
      authorMap[author] = { totalLikes: 0, count: 0 };
    }

    authorMap[author].totalLikes += likes;
    authorMap[author].count += 1;
  }

  var averageLikes = {};
  for (var key in authorMap) {
    averageLikes[key] = authorMap[key].totalLikes / authorMap[key].count;
  }

  return averageLikes;
}

var avgLikes = getAverageLikes(posts);
console.log("Average Likes per Author:", avgLikes);



//d) Find posts containing "JavaScript" or "programming" in content or tags:
 
function findRelevantPosts(posts) {
  var result = [];

  for (var i = 0; i < posts.length; i++) {
    var content = posts[i].content.toLowerCase();
    var tags = posts[i].tags;

    if (content.includes("javascript") || content.includes("programming")) {
      result.push(posts[i]);
      continue;
    }

    for (var j = 0; j < tags.length; j++) {
      if (tags[j].toLowerCase() === "javascript" || tags[j].toLowerCase() === "programming") {
        result.push(posts[i]);
        break;
      }
    }
  }

  return result;
}

var relatedPosts = findRelevantPosts(posts);
console.log("Posts with JavaScript or Programming:", relatedPosts);



//e) Create a leaderboard of authors sorted by total likes:
 
function getLeaderboard(posts) {
  var authorLikes = [];

  var likesMap = {};
  for (var i = 0; i < posts.length; i++) {
    var author = posts[i].author;
    if (!likesMap[author]) {
      likesMap[author] = 0;
    }
    likesMap[author] += posts[i].likes;
  }

  for (var key in likesMap) {
    authorLikes.push({ author: key, totalLikes: likesMap[key] });
  }

  authorLikes.sort(function(a, b) {
    return b.totalLikes - a.totalLikes;
  });

  return authorLikes;
}

var leaderboard = getLeaderboard(posts);
console.log("Author Leaderboard:", leaderboard);