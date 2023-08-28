import { MemoryStorage, PostService } from "./StorageDependency";
//import { DatabaseStorage, MemoryStorage, PostService } from './StorageDependencyInjection';

const memory = new MemoryStorage();
memory.insert("Memory Register 1");
memory.insert("Memory Register 2");
console.log(memory.getMemoryStorage());

const posts = new PostService();
posts.createPost("Post 1");
posts.createPost("Post 2");
console.log(posts.getPosts());


// Dependency Injection

// const memory = new MemoryStorage();
// memory.insert("Memory Register 1");
// memory.insert("Memory Register 2");
// console.log(memory.getMemoryStorage());

// const posts = new PostService(memory);
// posts.createPost("Post 1");
// posts.createPost("Post 2");
// posts.createPost("Post 3");
// console.log(posts.getPosts());
