# TG-Pre-Work

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions.

First, the clients web browser converts the web address into an address which is searchable on the internet. This process is done through searching cache locally and looking for a match or through the Domain Name Server (DNS) which has a set of registries that can match the websites to the correct internet protocol (IP) address.

Once the IP address is retrieved, the clients browser sends (through the internet service provider) a packet of data (containing the GET request for the resources required for the webpage) to the IP address associated with the servers that host the website for techtonicgroup asking for relevant data files.

Once the packet is received by the host servers and the packet data is verified - the files associated with the webpage is sent back to the clients browser. These files are in the form of HTML, JS and CSS. Once these files are retrieved, these files are rendered by the browser for the client to interact with.

## From start to finish how does that data reach you to be rendered in the browser?

The data is requested from the server through a GET request, which is sent when we press 'enter' after typing in the url in the url bar. The server receives the GET request, interprets it, and if the GET request is understood by the server, it will return the relevant html markup file to be rendered.

Once the HTML file starts rendering, it reads head to tail, or up from the root-up in the DOM tree. Within the HTML code, there will be requests for additional files like CSS and JS files to be downloaded. When these href and src codes are met by the browser to be rendered, these files are requested to the server once again through a GET request. (it's probably a good idea to href the CSS files before the body, inside the header so that html code is displayed with the stylesheet applied from the start. Additionally it's probably a good idea to src the JS file at the end before the end of the body so that the browser completes loading without waiting for the JS files to be received)

Once the HTML, CSS and JS files are loaded onto the browser, the data receiving for the static browser comes to an end. However, if we are using a dynamic webpage, there'll be AJAX requests using GET POST PUT and Delete methods that will request data from the server or even external API's in a dynamic fashion.

## What code is rendered in the browser?

The data retrieved by the browser may take several file formats. They are comprised of html, CSS and JS.

HTML:
In every scenario, there is an html file which contains the html markup. html markup is written with a high level of sophistication in the rules of what contains what, also known as the document object model (DOM). A tree like structure can be formed using the various tags and by nesting the tags appropriately to partition the elements in ways which make it easy for coders to manipulate the markup into webpages.

CSS:
Once the DOM tree is constructed, styles are overlaid onto it. Cascading Style Sheets is a stylized sheet language which overlays visuals (aesthetics as well as spatial control) onto the html markup. The stylesheet follows the basic syntax of seeking a selector inside the html markup and making a declaration of a property that will be specified as well as a value it should take. CSS follows the basic mechanism of specificity as a rule for determining which declaration is dominant. CSS is crucial to a webpage, how the webpage is displayed will ultimately determine the impact the webpage will have in attaining its goal.

JS:
Javascript is a scripting language that introduces interactivity to the webpages. JS give programmers the ability to do many things: alter the makeup of the HTML DOM tree for an interactive experience, make various requests to the servers, listen for clicks, build objects based on user input etc.

## What is the server-side code’s main function?

In general the server-side code has the main function of listening for requests and fulfilling the requests. Additionally the server-side code may also function to utilize databases. Commonly used server software is Apache: commonly used languages include ruby, perl, node.js, python etc: and commonly used database is mySQL. The way serverside code may be set up vary widely based on whether the webpage being created is a large enterprise level webapp or is a smaller scale website.

A configured server will listen in on a specified port for requests. In the simple case of a static webpage request, if a request comes in and the request is understood and match the filesystem folder on the configured server, the server will send over the files in the correct format (html, css, js, media, api etc.)

In a more complex case like for that of a website like Facebook, the request for a home page is created (uniquely for each account) after generating the html file through the use of a html-generating-template which refers to the database and pulls the best stories to add to the feed in order to achieve maximum impact.

## What is the client-side code’s main function?

The client-side code has the main function of rendering the data, creating a user interface and to do this securely.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

I don't quite get the question,
If the question is asking about how many times each assets are loaded when hitting https://www.techtonic.com/:

From inspecting:
total assets: 82
HTML: 1
JS: 19
CSS: 2
img: 56
font: 4
all the assets are unique.

If the question is asking generally, one instance of each asset is created as is requested.

## How many instances of the server-side code are available at any given time?

Zero, the server-side code is not available to clients visiting the website.

For the developers that have access to the servers, the code is saved once per each instance.

## What is runtime?

When a program is running, it is called runtime.
An example of a runtime error may be the infinite loop, which may cause client memory to crash.

## How many instances of the databases connected to the server application are created?

When the webpage is requested from the client browser, the server application looks on the filesystem for the relevant files to send. The https://www.techtonic.com/ website is hosted on amazon s3 servers (information in the header of the response to the get request), meaning all the webpages on the site are static, all the files associated with the html, css, js, images etc are probably stored in buckets and not in databases.
if it is stored in databases one instance is sufficient to get the job done.
