const posts = [
  { id: 1, author: "user1", content: "Hello world!", likes: 15, tags: ["greeting", "first"] },
  { id: 2, author: "user2", content: "JavaScript is awesome", likes: 32, tags: ["programming", "js"] },
  { id: 3, author: "user1", content: "Learning arrays", likes: 18, tags: ["programming", "learning"] },
  { id: 4, author: "user3", content: "Good morning!", likes: 8, tags: ["greeting"] }
];

// a) Most popular post (highest likes)
Use .reduce() to compare likes:

const mostPopularPost = posts.reduce((max, post) => {
  return post.likes > max.likes ? post : max;
});

console.log("Most Popular Post:", mostPopularPost);
// b) All unique tags used
Use .flatMap() to collect all tags, and then a Set to remove duplicates:


const uniqueTags = [...new Set(posts.flatMap(post => post.tags))];
console.log("Unique Tags:", uniqueTags);


//c) Average likes per author
// Group likes by author

// Count posts per author

// Calculate average


const authorStats = posts.reduce((acc, post) => {
  if (!acc[post.author]) {
    acc[post.author] = { totalLikes: 0, count: 0 };
  }
  acc[post.author].totalLikes += post.likes;
  acc[post.author].count += 1;
  return acc;
}, {});

const  averageLikes = Object.entries(authorStats).map(([author, stats]) => ({
  author,
   averageLikes: stats.totalLikes / stats.count
}));

console.log("Average Likes Per Author:", averageLikes);
//d) Posts with "JavaScript" or "programming" in content or tags
//Check both content and tags:

 
const keywordPosts = posts.filter(post =>
  post.content.includes("JavaScript") ||
  post.content.includes("programming") ||
  post.tags.includes("programming") ||
  post.tags.includes("JavaScript")
);

console.log("Posts with 'JavaScript' or 'programming':", keywordPosts);
//e) Leaderboard of authors sorted by total likes
//Sum likes by author

// //Convert to array

// Sort by likes

 
const leaderboard = Object.entries(
  posts.reduce((acc, post) => {
    acc[post.author] = (acc[post.author] || 0) + post.likes;
    return acc;
  }, {})
).map(([author, likes]) => ({ author, likes }))
.sort((a, b) => b.likes - a.likes);

console.log("Leaderboard:", leaderboard);
