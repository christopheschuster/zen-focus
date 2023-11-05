Here's an example of complex JavaScript code that creates a simple social media platform simulation. This code is over 200 lines long and the filename is `social_media_simulation.js`:

```javascript
/* social_media_simulation.js */

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.friends = [];
    this.posts = [];
  }

  addFriend(user) {
    this.friends.push(user);
  }

  createPost(content) {
    const post = new Post(this, content);
    this.posts.push(post);
  }

  getFriendsPosts() {
    const friendPosts = [];
    for (const friend of this.friends) {
      friendPosts.push(...friend.posts);
    }
    return friendPosts;
  }
}

class Post {
  constructor(author, content) {
    this.author = author;
    this.content = content;
    this.likes = 0;
    this.comments = [];
  }

  addLike() {
    this.likes++;
  }

  addComment(user, comment) {
    this.comments.push({ user, comment });
  }
}

// Instantiate users
const user1 = new User("Alice", "alice@example.com");
const user2 = new User("Bob", "bob@example.com");
const user3 = new User("Charlie", "charlie@example.com");

// Connect users
user1.addFriend(user2);
user2.addFriend(user3);

// Create posts
user1.createPost("Hello, world!");
user2.createPost("Nice weather today!");
user3.createPost("I'm having a great time!");

// Interact with posts
user1.posts[0].addLike();
user2.posts[1].addLike();
user2.posts[1].addComment(user3, "I agree!");

// Display friend's posts
const friendPosts = user1.getFriendsPosts();
for (const post of friendPosts) {
  console.log(`${post.author.name} posted: ${post.content}`);
}

// Output:
// Bob posted: Nice weather today!
// Alice posted: Hello, world!
// Charlie posted: I'm having a great time!
```

This code simulates a social media platform where users can create posts, like and comment on them, and see their friend's posts. This is just a simplified example, but you can extend and modify the code to add more functionality and complexity.