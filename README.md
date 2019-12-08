# Climate Change Discourse — Mashups Final Project by Lujain Ibrahim & Brandon Chin Loy
## Overview
### Initial Proposal Presentation:  
* [Link](https://docs.google.com/presentation/d/1ArOMnbw-UD5LM-jbf89lVP30UElBkXgdhee4pZ8CAwA/edit?usp=sharing)
### Final Project Presentation:  
* [Link](https://docs.google.com/presentation/d/1cVTRwPkvCbbpvdiPc-1TZF9CnL5S0pLszpaqjBIrXaA/)
### Viewing the Project:
* [Link](http://brandon.hosting.nyu.edu/mashups/proj2/)
### APIs Used
* NYT Article Search API
* Financial Times API

### Languages & Libraries Used

<b>Languages:</b> 
* HTML
* CSS
* JavaScript


<b>Libraries:</b>
* Node.js
* D3.js

## Concept Generation
### Motivation 
Intially, we wanted to investigate the difference in discourse between climate change discussions on Reddit and on the NYT. We intended to analyze the sentiments of randomly generated articles/subreddits from the two platforms under a specific climate change/environmental science topic using a sentiment analysis Node.js library. Some of the sentiments would include: positive, negative, excited, doubtful, nervous, and confident. The results of this analysis would then be displayed using differently sized and colored bubbles using D3.js.

Our main motivators for this initial propose and exercise in analyzing the audiences of the two propellers of climate discussions are the following: 
* Investigating the effect of demographic differences in Reddit and NYT readers/users on climate change discourse 
* Demonstrating the downplaying  of the influence on discourse of online platforms like Reddit by mainstream media like the NYT 
* Drawing contrast between the two and possibly debunking myths about the circulation of climate news online
* Learning about and using the customizability of sentiment analysis using Node.js

However, due to a number of reasons, we tweaked our proposal to better serve our technical constraints and refined interests. These technical constraints included our failure to obtain access to Reddit's API. Further, our interest shifted to more specifically how certain behind the scenes stakeholders and special interests involved in news-making affect the representation of topics and news circulation — particulary topics like climate change which is deeply intertwined with the science, religion, politics, and the economy. As a result, we begain to look into other sources of news and fact circulation. Among the many newpapers and online platforms we considered, of course after taking into account technical considerations, we were primarily interested with alternative sources of news like The Financial Times as well as Bloomberg (a timely investigation considering Michael Bloomberg just announced his candidancy for the presidency and is a billionare with an interestingly strong stance on climate change). We eventually decided to use The Financial Times due to their explicit focus on the economic angle of all news topics. We also beleived that taking this approach may lead to a more concrete outcome compared to using Reddit: debunking talking points used to discredit the climate change movement as one with invalid and unrealistic demands that are at odds with economic growth.

To reiterate, our main motivators for our final project evolved into the following: 
* Investigating the effect of demographic differences in Financial Times and NYT readers on climate change discourse 
* Understanding differences in the purpose, stakeholders, and investors of Financial Times and NYT Times
* Experimenting with the common talking point of climate activism being at odds with improving the economy
* Drawing direct contrast between climate related topics discussed mostly economically in the Financial Times and mostly culturally and scientifically in the NYT 
* Pursuing our interest in a stronger data visualization element to the project

As a result, our final project shifted to be a more exploratory experience with a stronger contrast in the source of information from the getgo. Users will first be presented with general climate change statistics, visualized to be more attractive and attention-grabbing to encourage users to further explore the webpage. Following that, different climate chaneg topics and their relations to each other will be presented in a collapsible tree type visual, allowing users to dig deeper into these various topic one Financial Times and one NYT article at a time.

### Target Audience
Our target audience are climate change skeptics. These can be students, parents, policy-makers, as well as those immediately affected by the change in climate and are lied to by politicians and policy-makers. Even though our target audience is not restricted by age, gender, race, or degree of education, there are certain demographics that are more likely to be climate change skeptics than others. We hoped that through a highly visual approach we would appeal to a larger group of the skeptics, but we also wanted the experience to be educational and explorative and not just controversial and flashy, and this is where the Financial Times and NYT articles come in. 

### Topics Selected
After extensive research, we believed that with these 6 topics, we would have covered the main areas discussed today relating to climate change. The topics selected to represent climate change discourse are the following:
* Global Warming
* Energy 
* Fossil Fuels
* Solar 
* Wind
* Hydroelectric
* Oceans
* Plastic
* Corals
* Pollution 
* Extinction 
* Endangered 
* Turtles 
* Rhino 
* Vaquita
* Orangutan
* Amazon Rainforest
* Bees 
* Bears
* Emissions
* Ozone
* Lead
* Trash
* Food
* Floods
* Droughts
* Wildfires
## Design Decisions
### Initial Sketches 
![](https://github.com/lujainibrahim/mashups-final/blob/master/docu-images/initialsketch.png)
### Final Sketches
<div style="text-align:center"><img src="https://github.com/lujainibrahim/mashups-final/blob/master/docu-images/finalsketch.png" width="400"></div>

### Color Scheme Choice
<div style="text-align:center"><img src="https://www.color-hex.com/palettes/7174.png" width="500"></div>

We wanted the experience of using our site to feel educational, authentic, and serving the sole purpose of improving the conversation around climate change especially in relation to money and the economy. And so, we did not want to pick a flashy brand for the website or give it a corporate look. This led to us using the earth-y colors as our color scheme (along with black and white). Here are the hex codes used: 
* #4f4cb0                                             
* #d8c596
* #6b93d6
* #e9eff9
* #9fc164 

### Font Choice
For our font choice, one of our constraints was using an open source font provider like Google Fonts. Even though we wanted the authenticity of our website to show, we also wanted users to associate it with scientific rigor and evidence. And so, we decided to use IBM Plex Sans and Roboto. IBM Plex Sans is "an open source typeface superfamily conceptually designed and developed by Mike Abbink at IBM in collaboration with Bold Monday to reflect the brand spirit, beliefs and design principles of IBM and to be used for all brand experiences across the company internationally", while Roboto is "a neo-grotesque sans-serif typeface family developed by Google as the system font for its mobile operating system Android". Ironically, the technology world is a huge part of the problem, but most individuals will experience unconscious association of these fonts with the techinical and scientific world which will achieve our goal of attaching scientific legitmacy to our web page.

### D3.js Visualizations Choice
1. [D3 Liquid Fill Gauge](http://bl.ocks.org/brattonc/5e5ce9beee483220e2f6)
2. [D3 Collapsible Tree](https://observablehq.com/@d3/collapsible-tree)

## Project Development
### Process
We first began the process by dreaming up the idea which had to be revisted due to technical constraints and our evolved interest in the subject. Following that, we needed to decide on (1) a target audience, (2) potential APIs, and (3) JavaScript libraries. 

After making those decisions as described above, we began to implement the code. We began with writing JavaScript files for each of our APIs to test them in simple environments to ensure that they work properly and collect the information needed. For the NYT API, we initially wanted to implement a few filters on the API call so that it only collects articles that belong in at least one of the following categories: environment, politics, weather, energy, cars, and health. However, when testing the code, we realized that adding these filters generates very few and very specific results which did no serve the exploratory purpose of our project. As a result, we decided to get rid of the results and instead search using specific key words present in the collapsible tree. 

As for the Financial Times API, ----------------


Following the API calls, we created the homepage with statistics on the perception of climate change from the [Yale Program on Climate Change Communication](https://climatecommunication.yale.edu/publications/americans-are-increasingly-alarmed-about-global-warming/) who collected this data from 1140 Americans in December 2018. 

![](http://climatecommunication.yale.edu/wp-content/uploads/2019/02/Six-Americas-Februrary-2019.png)

The purpose of this homepage is to get the user (1) intrigued by the project and the numbers presented and (2) thinking about their own position and feelings towards climate change before they begin exploring the various topics in the next page. At the top of this page is a question for the user: "Are you concerned about climate change?". This question is meant to push the user to consider their thoughts on climate change explicitly and independently of other topics that are often associated with climate change that cloud judgement. This sentence also changes color with the rhythm of a pulse with the intention of a sense of urgency and association with the news (similar to a news ticker that carries news headlines that appear and dissapear).

It was only after the homepage that we began designing the page with the collapsible tree structure and API integration. We wanted the same sense of urgency and news association on this page as well, which is why the changing the title behaves in a similar manner to the question described above. However, this title also changes topics as the user explores the climate change topic tree. Under the tree is the section were the APIs are called and the articles on certain topics are presented to the user.


### Website Flow 
1. The user is presented with general climate change statistics (visualized via D3.js) to grab their attention
2. A database of popular climate change topics is kept 
3. A random seed is used to pick n topics
4. D3.js visualizes the the topics in a collapsible tree
5. Users pick a topic
6. NYT and Financial Times are searched for articles under this topic
7. The articles and their summaries are presented to the user


### Challenges Faced
* Limitations in API access. It was only after we had to experience not being able to use the Reddit API and experience difficulties dealing with the Financial Times API that we gained a profound appreciation of the user friendliness of the NYT API. Had we more access to APIs like Twitter, Reddit, etc..., our project would have been closer to what we envisioned it to be and a more accurate representation of our interests.
* Connecting HTML fields to the different nodes in the tree. Having different JavaScript files, a tree that is in SVG format, and a JSON file with all different nodes made this task particularly difficult. We had to get creative with appending HTML elements to introduce interactivity into the page.


## User Experience Testing

* User 1:<br>
<b> Name:</b>Mareya Khouri<br>
<b> Feedback: (quoted) I like how interactive the website is / the graphics but everything very abstract and it’s hard to really know what the bigger purpose of the site is (I can google this info so what makes the site different) and also how to navigate it.
</b>

* User 2:<br>
<b> Name:</b>Nishant Aswani<br>
<b> Feedback:</b> (paraphrased) - The intro sentence is a moutful — maybe break it up? - Prompt the search bar to explain its purpose - Add some indication of the presence of a the search bar at the top

* User 3:<br>
<b> Name:</b>Iman Zambasri <br>
<b> Feedback:</b> (paraphrased) - First sentence is long

* User 4:<br>
<b> Name:</b> <br>
<b> Feedback:</b>

* User 5:<br>
<b> Name:</b> <br>
<b> Feedback:</b>
