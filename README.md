In this first step, you will develop a basic blog application. We will continue to work with the same application later. Next Tuesday (14/5) you will receive the continuation of this task. The deadline for final submission is 5/26.

We use MediumLinks to an external site. as inspiration - if you want to log in to see how it looks, create an account and select "free account". It is also possible to Google Medium articles and read them without an account.
A basic principle of Medium is that you can read other people's posts and write comments on them, and you can write your own posts that you can edit and delete. How you can interact with a post therefore depends on whether it is you who wrote it yourself.

We will not focus on implementing real user management now, but start from my example around UserContext from today's lesson and create good test data. When I refer to you below as "user"/"logged in", it is the user you choose to be "logged in" as in your context - so we pretend we have implemented user management.

Functionality:

1.Multi-page application with navigation:
The app must consist of at least two main pages, but you choose how many pages you want. In the navigation menu, I want to see who I am logged in as.

2.Blog posts:
Create an array of blog posts already on your site, written by a user other than yourself (eg Jane Doe). They must at least contain title, author and text
Display a list of blog posts on the home page. Each post must at least show the title, author and text.
Implement the ability for a user to add new blog posts. Remember that you should not be able to decide which author writes the post because it is you as a logged in user who writes the post.
If the blog post is one that you yourself as a user have written, you should be able to change and delete the post, otherwise not. How you choose to implement this functionality is up to you: You may want to be able to do it from the list of all posts, or you may choose to create a page where you only display your user's posts and can manage the posts. This is up to you.

3.Comments:
Implement the ability to add comments to blog posts. Comments must contain username and comment text.
Show comments under each blog post.

4.Global state:
Use useContext to manage global state, a container's list of blog posts and its comments, and a container's user management (remember, we're not building a real login system - keep it simple).


When we create a new post/change a post, we should also be able to choose which category the post should belong to

The blog posts should be categorized on the first page, and we should be able to choose which category we want to show in the list of posts
# evelynBlog
# evelynBlog
