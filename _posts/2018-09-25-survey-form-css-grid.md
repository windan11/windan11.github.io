---
layout: article
title: "CSS Grid in Form - Part 2"
date: 2018-09-25
---

CSS Grid is a powerful tool that allows us to create two dimensional layouts, meaning it can divide items into columns and rows. 

In the second part to my Survey Form project, I will cover how I use CSS Grid to separate my labels and inputs into two columns, and align into a column at a certain width. 

To start, I'm going to set my #survey-form as grid and set the column as fractional unit. The labels, on the left side, will take a unit wide of the fractional screen, and it will change depending on the screen's viewport. The inputs, right hand side, will take 2x as much on the left hand side.

```css
#survey-form{
	display: grid;
	grid-gap: 1em;
	grid-template-columns: 1fr 2fr;
}
```

Right now, the two columns are next to each other without any space in between. The grid-gap property will solve that problem in giving enough white spaces between the columns.

To make the two columns to reduce to one, I will use media query and grid-column to change the width of the column. All elements, including inputs, labels, legend, select, teaxtarea, radio, and checkbox, are set as 1/3, so the column will occupy all the horizontal space of the container when the screen decreases to a certain width. 

My image is no longer centered when the screen is minimized. Another CSS property that I can use to fit my image in the center and on top of the page is flex-shrink, which specifies how an item will shrink relative to  another flexible item. 

```css
#survey-form{
	flex-shrink: 1;
}
#img{
	flex-shrink: 3;
	height: 4.4em;
	background-position: 50% 10%;
}
```

The flex-shrink for #survey-form is set to 1, while it is set to 3 for #img. The image container will expand and take 3x times as much space, and it should occupies the top of the page.  The height and background position properties are set to make the image container viewable. 

Lastly, I want to make the submit button in the center of the container by using setting the size of the grid column to 1/3. The number represents the start/end edge of the grid area. The submit button will be placed in the center from the first to the last edge. 

```css
#submit{
	width: 8em;
	height: 2.4em;
	grid-column: 1/3;
}
```

Here's a link to my survey form: [Survey Form](https://www.anthach.xyz/survey-form). You can also view my [github](https://github.com/windan11/survey-form) to see the full code. 

Cheers,

Anh

