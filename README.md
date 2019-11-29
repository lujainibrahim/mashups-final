# Climate Change Discourse — Mashups Final Project by Lujain Ibrahim & Brandon Chin Loy
## Overview
### Initial Proposal Presentation:  
https://docs.google.com/presentation/d/1ArOMnbw-UD5LM-jbf89lVP30UElBkXgdhee4pZ8CAwA/edit?usp=sharing
## Final Project Presentation:  
https://docs.google.com/presentation/d/1cVTRwPkvCbbpvdiPc-1TZF9CnL5S0pLszpaqjBIrXaA/
### Concept & Objectives

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
### What should the user leave with?
### Topics Selected
The topics selected to represent climate change discourse were the following: 
* Energy 
* Oceans
* Global Warming
* Pollution 
* Food Crisis
* Extinction 
After extensive research, we beleived that with these 6 topics, we would have covered the main areas discussed today relating to climate change.
## Drafts (sketches, design decisions)
### Initial Sketches 
### Final Sketches
### Color Scheme Choice

### Font Choice
### Website Flow 
1. Have a database of popular climate change topics
2. Use a random seed to pick n topics
3. Use D3.js to visualize the the topics (we need to pick a D3 visual form) 
4. Users pick one
5. It searches NYT and Financial Times for articles under this topic
6. Presents the articles and their summaries

### D3.js Visualizations
1. D3 Liquid Fill Gauge (http://bl.ocks.org/brattonc/5e5ce9beee483220e2f6)
2. D3 Collapsible Tree (https://observablehq.com/@d3/collapsible-tree)


## Development Process

## Challenges Faced
