---
layout: post
title: "Semantic HTML - Why you should use it?"
date: 2018-09-14
---

When I was working on my earlier project, my HTML skeleton contained divs within a div that is inside another div acting as a wrapper. Immediately, I thought to myself, "there's gotta be a better way to write my HTML structure without using div in every other line."

I googled and the word "semantic" came up on several articles that I read. Consistent among those articles, the author emphasizes how important it is to use semantic HTML and why web developers should utilize it on every project. Here's what I learned: 

<h3>What is Semantic HTML?</h3>

Semantic HTML is an idea focusing on using HTML elements for what they are rather than how they may appear on the screen. It gives meaning the web pages rather than visual appearances. 

Rather than using div in my project, I can use <code>article</code> to surround my blog entry, newspaper article, or post. Other examples of semantic HTML tags include <code><header></code>, <code><footer></code>, <code><h1></code> through <code><h6></code>, and more. With a few exceptions, tags such as <code><b></code> and <code><i></code> are not sematic, and only serve as styling purposes. 

<h3>Why is important to use it?</h3>

<ol>
	<li> <strong>Increase accessibility for all internet users.</strong> For users who have visual impairment, they have difficulties navigating the web pages without digital assistants. Having a well-defined HTML will help most bots and digital assistants pull off the main content from a web page and inform users accurately what a company does or offers. For example, contents are easier to read or pull if it is inside an article container than inside a div. When there are divs, it is hard to determine which div container has more important than the other.</li>
  
	<li><strong>Better rank in search engines.</strong> There are billions of websites on the internet. Search engines, such as google and yahoo, rely on markups to understand what elements are important and what are not. Imagine putting a business name within a paragraph tag instead of h1, it will get lost among other contents because the engine does not put much important to it. The search engine will put the business at the bottom of the results because it doesn't put important to paragraph tag.</li>
  
	<li><strong>Organized and maintainable code.</strong> As your web pages grow, managing your code can be difficult. To make your code readable and easier to manage, use appropriate tags to provide information in regards to the content.</li>
</ol>

There are many articles on the internet emphasizing the importance of using meaning to HTML. One such article is Aaron Gustafson's <a class="post-link" href="https://alistapart.com/article/conversational-semantics">"Conversational Semantics"</a> that discusses on how semantic HTML can convey different and meaningful sound on devices such as Alexa, Cortana, and Siri. I would suggest you give it a read; Aaron does a great job providing different examples to give you an idea why and how different tags sound different. 

To learn more about what is <a class="post-link" href="https://internetingishard.com/html-and-css/semantic-html/">Semantic HTML</a>, Oliver James does a tutorial on this subject with some great visuals that I enjoy looking at and learning from. 

Cheers,

Anh
