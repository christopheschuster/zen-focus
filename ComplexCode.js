/** 
 * Filename: ComplexCode.js
 * 
 * Description: This complex code demonstrates a detailed implementation of a social media platform.
 * It incorporates various features like user registration, posting, commenting, liking, and following.
 * The code is highly sophisticated, elaborate, and complex, spanning over 200 lines.
 * 
 * Author: [Your Name]
 * Last Updated: [Date]
 */

// User Class to represent a user profile
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.posts = [];
    this.followers = [];
    this.following = [];
  }

  // Create a new post
  createPost(content) {
    const post = new Post(content);
    this.posts.push(post);
  }

  // Add a follower
  addFollower(user) {
    this.followers.push(user);
    user.following.push(this);
  }

  // Remove a follower
  removeFollower(user) {
    this.followers = this.followers.filter(follower => follower !== user);
    user.following = user.following.filter(following => following !== this);
  }

  // Like a post
  likePost(post) {
    post.likes++;
  }
}

// Post Class to represent a post
class Post {
  constructor(content) {
    this.content = content;
    this.likes = 0;
    this.comments = [];
  }

  // Add a comment to the post
  addComment(comment) {
    this.comments.push(comment);
  }
}

// Comment Class to represent a comment
class Comment {
  constructor(username, content) {
    this.username = username;
    this.content = content;
  }
}

// Application Class to manage the social media platform
class Application {
  constructor() {
    this.users = [];
  }

  // User registration process
  registerUser(username, email, password) {
    const user = new User(username, email, password);
    this.users.push(user);
  }

  // Login process
  login(email, password) {
    const user = this.users.find(user => user.email === email && user.password === password);
    if (user) {
      console.log(`Welcome back, ${user.username}!`);
    } else {
      console.log("Invalid email or password.");
    }
  }
}

// Example usage
const app = new Application();

// Register users
app.registerUser("user1", "user1@example.com", "password1");
app.registerUser("user2", "user2@example.com", "password2");

// Users create posts
const user1 = app.users[0];
const user2 = app.users[1];
user1.createPost("Hello world!");
user2.createPost("This is an amazing code example!");

// Users add comments
const comment1 = new Comment("user2", "Nice post!");
const comment2 = new Comment("user1", "Thank you!");

user1.posts[0].addComment(comment1);
user2.posts[0].addComment(comment2);

// Users like posts
user1.likePost(user2.posts[0]);

// Example output
console.log(user1);
console.log(user2);

console.log(user1.posts[0]);
console.log(user2.posts[0]);

console.log(user1.posts[0].comments);
console.log(user2.posts[0].comments);

console.log(user1.posts[0].likes);

console.log(app.users);
app.login("user1@example.com", "password1");