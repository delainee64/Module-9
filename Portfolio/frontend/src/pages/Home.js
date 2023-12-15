import React from 'react';
import { GiSpermWhale } from "react-icons/gi";

function Home() {
  return (
    <>
      <article>
      <h2 className="pageOne"><i><GiSpermWhale /></i>Welcome to my website!<i><GiSpermWhale /></i></h2>
      <p>I aspire to be a cybersecurity professional, driven by my fascination with identifying and addressing vulnerabilities in digital systems. I want to specialize in ethical hacking to protect organizations against cyber threats.</p>
      <dl>
                    <dt><strong>HTML</strong></dt>
                    <dd>HTML, or HyperText Markup Language, is a fundamental technology in web development used for structuring and presenting content on the internet. It serves as the backbone of web pages, providing a standardized way to create and
                        organize text, images, links, forms, and other types of media.</dd>
                    <dt><strong>CSS</strong></dt>
                    <dd>CSS, or Cascading Style Sheets, is a standard technology in web development that is used to describe the presentation and styling of HTML documents. CSS enables developers to control the layout, appearance, and formatting of web pages, 
                      ensuring a consistent and visually appealing user experience.</dd>
                    <dt><strong>JavaScript</strong></dt>
                    <dd>JavaScript is a versatile programming language primarily used in web development to add interactivity, manipulate the Document Object Model (DOM), and create dynamic content on websites. As a client-side scripting language, it runs in the browser, 
                      allowing developers to enhance the user experience by creating responsive and interactive web pages. </dd>
                    <dt><strong>DOM</strong></dt>
                    <dd>DOM or Document Object Model, is a programming interface that allows scripts (such as JavaScript) to dynamically access, modify, and manipulate the content and structure of web documents. The DOM represents the structure of HTML or XML 
                      documents as a tree-like model, where each node in the tree corresponds to an element or attribute in the document.</dd>
                    <dt><strong>Node</strong></dt>
                    <dd>Node is a server-side JavaScript runtime environment that is commonly used for building server-side applications, such as web servers and APIs. Node.js integrates with npm (Node Package Manager), which serves as an online repository
                       for publishing Node.js packages and a command-line utility for package management.</dd>
                </dl>

      </article>
    </>
  );
}

export default Home;