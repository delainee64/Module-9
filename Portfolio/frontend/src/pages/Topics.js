import React from 'react';

function Topics() {
    return (
        <>
            <h2 className="topic">Web Dev Concepts</h2>
            <nav className="local">
                <a href="#webServers">Web Servers</a>
                <a href="#frontEndDesign">Frontend Design</a>
                <a href="#usability">Usability</a>
                <a href="#anchors">Anchors</a>
                <a href="#optimizedImages">Optimized Images</a>
                <a href="#favicons">Favicons</a>
                <a href="#css">Cascading Stylesheets</a>
                <a href="#forms">Forms</a>
                <a href="#express">Express</a>
            </nav>
            <article id="webServers">
                <h3>Web Servers</h3>
                <p>In the realm of websites and servers, <strong>'index'</strong> refers to the <strong>designated homepage</strong> on a web server.
                    The specific file that serves as the index page can vary depending on the server’s configuration. Other default filenames
                    for index pages include ‘default.html’ and ‘index.php.’ When a request is made to a web server that ends in a backslash with
                    nothing preceding it in the URL, most web applications will default this request to the designated index file, which serves as
                    the website’s homepage. Users are given access to the main page of the website without having to specify a particular page or file
                    within the site.</p>
                <p>When accessing the Web Developer Network tab in the <strong>Chrome</strong> web browser, you can expect to find all the network requests made to load
                    the web page. Each file contains various details within the <strong>request</strong> and <strong>response headers</strong>. The request headers contain information
                    sent by the browser to the server, such as the <strong>URL, methods, status code</strong>, and the <strong>remote address</strong> or IP address. An example of a request method is <strong>GET</strong>. "GET"
                    is used when the client wants the server to retrieve data. However, how the file is viewed will determine the details provided. A file viewed from a web server will provide the URL, response headers with
                    information on content type, the server the file is stored on, and cache control. A file viewed from a local computer does not make
                    a <strong>TCP/IP</strong> connection, therefore it won’t contain a remote address. The URL response will show the local file path to your computer, and
                    there will be minimal details in the response header.</p>
                <p>The favicon.ico file has a status of ‘200’ or, “OK” because the server successfully processed the file, and the response body contains the required favicon image.
                    In contrast, the main.css and main.js files have a status of ‘404’ or, “Not Found” because these files do not exist on the server. The status of ‘404’ can also
                    indicate something wrong with the URL, so the server cannot recognize the resource.</p>
                <p>This web file’s URL can be divided into four parts: the <strong>scheme, subdomain, host domain</strong>, and <strong>resources</strong>.  The scheme is “https” which identifies the protocol that
                    must be used in a request. “Web” and "engr" are the subdomains, which is a subsection of the host domain, “oregonstate.edu”. The subdomain helps categorize content within
                    the larger domain. The resources are “~lenssd” a username in a directory, and “a1-lenssd” which is a resource within the directory.</p>
            </article>
            <article id="frontEndDesign">
                <h3>Frontend Design</h3>

                <p><strong>Frontend design</strong> is the process of creating and organizing the visual and interactive <strong>elements</strong> of a website or application for the site's intended audience. The core technologies
                    in frontend design are HTTP, JavaScript, and CSS. They structure and style the content of the website in addition to enabling seamless user interaction and responsiveness. Frontend design is more than just
                    ensuring a website is aesthetically pleasing, the design needs to be functional across various browsers and provide consistent, <strong>engaging</strong>, and positive user-friendly content. The most effective web interfaces
                    will incorporate intuitive navigational mechanisms, icons, images, and consistent illustration, hue, and font styles.</p>
            </article> 
            <article id="usability">
                <h4>The <strong>Five "E"s</strong> of Usability:</h4>
                <dl>
                    <dt><strong>Effective</strong></dt>
                    <dd>An effective website or interface allows users to accomplish their goals quickly, without errors.</dd>
                    <dt><strong>Efficient</strong></dt>
                    <dd>Efficiency relates to the ease and speed required among users to perform tasks. Tasks should take the least amount of steps and arrive promptly, without lag.</dd>
                    <dt><strong>Easy to navigate</strong></dt>
                    <dd>New users of a website should be able to explore the site independently. They should be able to locate what they need and recall their way around during future visits.</dd>
                    <dt><strong>Error-free</strong></dt>
                    <dd>All roadblocks need to be identified and removed for a seamless experience for the user.</dd>
                    <dt><strong>Enjoyable</strong></dt>
                    <dd>A website should be enjoyable and engaging for the site's intended audience.</dd>
                </dl>

                <p><strong>Page layout tags</strong> serve specific purposes in structuring the content and design of a web page. The <strong>&lt;header&gt;</strong> tag, creates a consistent banner or masthead, typically featuring information like the name,
                    publisher, and marketing slogan, ensuring optical content visibility. The <strong>&lt;nav&gt;</strong> tag, facilitates smooth page transitions with various navigation menus, including the main menu, search, tools, stories, locations, and legal links. The <strong>&lt;main&gt;</strong>
                    tag designates the primary content block, housing the primary content such as stories, galleries, and tutorials. The <strong>&lt;section&gt;</strong> tag groups thematically related content that are related but don't necessarily stand alone. Within a section, the <strong>&lt;article&gt;</strong>
                    tag is used to signify specific topics with a second-level headline (&lt;h2&gt;), typically marked with <strong>ID selectors</strong> for styling and internal navigation. The <strong>&lt;aside&gt;</strong>, <strong>&lt;figure&gt;</strong>, and <strong>&lt;blockquote&gt;</strong> tags serve related purposes that enhance content
                    presentation. &lt;Aside&gt; includes content related to an article, floating in the sidebars or call-out boxes, and employs a different style. &lt;Figure&gt; and <strong>&lt;figcaption&gt;</strong> are shown as a single unit, used mainly for media content and captioning. The
                    &lt;blockquote&gt; tag is intended for emphasizing extended quotations, sometimes including the citation through a URL. The <strong>&lt;footer&gt;</strong> tag, located at the bottom of the page, under the &lt;/main&gt; tag, typically contains legal information, contact details,
                    and critical links, including the website owner's copyright statement. Lastly, the <strong>&lt;div&gt;</strong> element serves as a versatile container for dynamic content and content separation, lacking inherent style or dimensions.</p>
                </article>
                <article id="anchors">
                <h4>How Anchors Connect to External, Internal, and Page-to-Page Content:</h4>
                <ol>
                    <li><strong>Anchors</strong> link to <strong>external</strong> content using the anchor element, or &lt;a&gt; along with the <strong>'href'</strong> <strong>attribute</strong> to specify the path or URL to an external website or resource. After the 'href' attribute, is the text used to describe the link’s purpose or destination.
                        An <strong>absolute path</strong> is used for external content using a complete URL. Clicking on the link navigates the user to the specified external content.  </li>
                    <li>To link to <strong>internal</strong> content within the same webpage, anchors are created using the &lt;a&gt; element to form a hyperlink. This hyperlink includes a 'href' attribute containing a hashtag, followed by the ID of the target element on the page. When a user
                        clicks on the link, it smoothly scrolls to and displays the specified internal content within the same page. This is done by using a <strong>relative path</strong> linked to the location of the file in the URL.</li>
                    <li><strong>Page-to-page</strong> navigation is accomplished using anchors within a <strong>global navigation</strong> block. In a website, they should appear in an obvious, decorative button for user access. These anchors link to other pages on the same website. This is done using the &lt;a&gt; element to create a hyperlink, usually within a navigational menu. Within the &lt;a&gt;
                        element, 'href' is set to the URL to the link within the website. To make these links more noticeable and user-friendly, they are often styled like buttons, enhancing the overall usability of the website or app. </li>
                </ol>
                </article>
                    <article id="optimizedImages">
                        <h3>Optimized Images</h3>
             
                        <p>There are six major specifications for images on the web. First, it’s crucial to use a concise and <strong>descriptive file name</strong> including the who, what, when, and where of the image. This helps search engine bots (SEOs) categorize and present content effectively for users. Additionally, all images should be reduced to their <strong>smallest
                            size</strong> for quick loading times. High-resolution images should only be rendered to high-resolution devices using the <strong>srcset=""</strong> and <strong>sizes=""</strong> attributes. Image <strong>compression</strong> is also important, with two main methods: <strong>lossy</strong> and <strong>lossless</strong>. Lossy, removes redundant, less essential data, but in the process, can significantly reduce image
                            quality. Lossless compresses images with minimal quality loss. Another image optimization tool is using <strong>exact dimensions</strong> to fit seamlessly into the designated space on your webpage. Pixel measurements should also be
                            considered. Moreover, images should be saved in the <strong>correct file format</strong> and <strong>color mode</strong> for the best balance between quality and loading speed. For example, <strong>JPG</strong> is suitable for photos using the <strong>RBG</strong> color mode, and <strong>GIF</strong> is often used for line-art images in index color mode. Lastly, the <strong>resolution</strong> should be sufficient and include
                            several pixels per inch (PPI) sizes to accommodate both older and newer devices to ensure a consistent user experience.</p>
                       
                        <p>The most appropriate file formats for photos are JPG and <strong>WebP</strong>. JPG uses lossy compression to achieve small file sizes while holding the shape and the majority of the quality of the image. WebP uses lossy and lossless compression to shrink the file size while holding the shape and quality of the image. An <strong>alpha channel</strong> can be utilized to create a transparent background.
                            For line-art, the most appropriate file formats are <strong>PNG, SVG,</strong> and GIF. PNG supports transparency and is great for simple images with solid colors and clear shapes and lines. SVG is XML-based, providing crisp two-dimensional images that can be interactive and animated. GIF supports transparency and is used for simple animations or images with flat colors.</p>
                    </article>
                    <article id="favicons">
                        <h3>Favicons</h3>
                      
                        <p><strong>Favicons</strong> serve several key purposes in web browsing and on devices. They are displayed in browser tabs, bookmarks, the address bar, and browsing history, enabling users to quickly identify and access web pages. Additionally, they are utilized on device home screens as shortcuts or bookmarks. In mobile browsers, they play a role in making websites recognizable
                            when added to the home screen. Properly designed and implemented favicons, usually in <strong>ICO</strong> or PNG format, enhance user experience and brand recognition on the web.</p>
                    </article>
                    <article id="css">
                        <h3>Cascading Stylesheets</h3>
                        <p><strong>Stylesheets</strong> are crucial for websites and apps. They ensure a consistent visual style, by applying a unified set of styles across various web pages or app screens, resulting in an improved user experience. Stylesheets enable adaptability to different devices and enhance accessibility and SEO by enabling features such as alternative text for images. Lastly,
                            stylesheets play a crucial role in reflecting a brand's identity by incorporating its colors, logos, and typography.</p>
                        <p>There are five primary methods for incorporating styles into websites or apps. The most common and efficient approach is to use <strong>external</strong> CSS files that are linked in the global &lt;head&gt; section, ensuring a consistent design across all pages. Additional stylesheets can be linked or imported for specific components. Alternatively, styles can be <strong>embedded</strong> within HTML and
                            JavaScript files through &lt;style&gt; tags, <strong>inline</strong> attributes, or <strong>JavaScript</strong> &lt;template&gt; literals. These embedded styles are typically suitable for one-off style changes. Lastly, styles can be incorporated using JavaScript to manipulate the Document Object Model (DOM) for dynamic and real-time style adjustments. Each method serves distinct purposes, with external
                            CSS providing a standardized and efficient way to maintain a cohesive look. Embed styles and DOM manipulation offer more flexibility but are often reserved for specific scenarios due to their potential for code complexity and redundancy.</p>
                    </article>
                    <article id="forms">
                        <h3>Forms</h3>
                        <p>Accessible web forms are designed with six primary goals in mind to ensure they can be used by all individuals, regardless of their abilities or disabilities. First, clear instructions should be provided above the form and within labels to assist users in comprehending and filling out the form accurately.
                            Informing users why data is being collected and indicating required fields offers context and clarity. Autofocusing on the first field is important to expedite the process, especially for keyboard users. Keyboard accessibility is essential, as it accommodates those who may not use a mouse. Complex forms should have tab indexing to guide users in a logical order.
                            Lastly, validation messages must be screen-readable to assist users in identifying and addressing any issues. These goals not only comply with legal requirements but also prioritize the creation of web forms that are inclusive and user-friendly for everyone. </p>
                        <p>HTML forms rely on several key tags and attributes to create effective user interfaces. The &lt;form&gt; tag acts as the container for the entire form and requires both "action" and "method" attributes. "Action" specifies the URL to which form data is sent, while "method" defines the HTTP request method, typically "POST" or "GET." &lt;fieldset&gt; and &lt;legend&gt; group-related form controls,
                            providing both visual and semantic structure to complex forms, enhancing accessibility. &lt;label&gt; tags, when linked with the "for" attribute and an "id" in the corresponding input element, describe the purpose of user data entry. The &lt;input&gt; tag, with its "type" attribute defining input types (e.g., text, checkbox), also necessitates a "name" attribute to associate form data with server-side processing.
                            Additionally, the "required" attribute ensures essential fields are completed, preventing malicious bot submissions and server overload. Together, these elements contribute to well-structured and accessible HTML forms.</p>
                        <p>To improve the usability of web forms, frontend developers should consider several style recommendations. To accommodate mobile users, form elements like inputs, selects, and buttons should be fingertip-sized. Visual separation within &lt;fieldset&gt; elements minimizes confusion, with customization options including border color, margins, and padding for clear label and control differentiation.
                            Legends within fieldsets can be styled to stand out through font size and color adjustments. Placing labels above, rather than inline with, their form controls can enhance readability. The "autofocus" attribute initiates immediate typing in the first field, and applying a color change on ":focus" visually cues users to start inputting. Styling required fields with ":required" status or a specific
                            class helps users identify essential inputs. These recommendations collectively create more accessible, visually appealing, and user-friendly web forms.</p>
                    </article>
                    <article id="express">
                        <h3>Express</h3>
                        <p>Node.js is a runtime environment for server-side and networking applications developed using JavaScript and a library of modules. Node.js offers functionalities, including communication with server components, debugging, console interaction, and DNS resolution. Additionally, Node.js integrates with npm (Node Package Manager), which serves as an online repository for publishing Node.js
                            packages and a command-line utility for package management. Npm facilitates the installation and management of packages, enabling developers to incorporate open-source packages into their projects efficiently. Express is a Node.js web application framework known for its focus on APIs and performance. It offers easy routing, versatile middleware, support for template engines, and efficient handling of static files.</p>
                    </article>
        </>
    );
}

export default Topics;