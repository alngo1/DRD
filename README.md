# Davis Racing Dragons' Website Github

## Clone Repository
To clone repository follow these steps here: https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository be sure to select your correct OS (mac, windows, or linux) as well as your prefered method of interacting with github (GitHub CLI, Desktop, Web browser)

## Editing Guide

This guide is for simple edits to the website. Only Images may be changed at the moment. Knowledge of git, json, and folders will come in handy, but this guide will go through the basic steps to edit the site.

First let's go through some of the things you will be editing. 
### The "assets" Folder
- **Location and Purpose:** This folder can be found starting from the root of the drd folder, clicking into the folder titled "public", and then into the assets folder, and it is where all images and videos for the site gets added. 
- **How to Edit:** Each folder's title relates to one of the pages/sections on the drd site. Inside each of these "pages" folders are all the assets for that page and/or other folders to store images for slideshows or board photos.
  - You can add in files to this folder, but they will only replace images on the site after you also edit the assets.json file.
  - **File Types**: file types for images and videos should be .png, .jpg, or .mp4

### The "assets.json" File
- **Location and Purpose:** This folder can be found starting from the root of the drd folder, clicking into the folder titled "src", and then into the assets.json file. This is where you direct the assets you added in the assets folder to the different locations on the website. 
- **Prior Knowledge:** Here you will need knowledge on two things file paths, and json. if you know this you may skip this bullet:  
  - **file paths:** this is a string of text that describes the series folders to click on in which to arrive at a specific file. the starting folder of this path is denoted with a period followed by a slash (i.e. ./). Any folder we wish to enter gets added to the end of our path, and multiple folders are seperated by slashes (i.e. ./assets/home) this example tells the website to go into the assets folder then the home folder. finally add the file you wish to access at the end and don't forget the file type (i.e. ./assets/home/drd.mp4).
  - **json:** Javascript Object Notation is a standard way the internet uses to store information utilizing name-value pairs. The entire json file starts with these curly braces {}, and inside those braces are name-value pairs where the name is some text in quotes, and the value in our case is either another set of braces {}, brackets [], or also text in a set of quotes. so a simple json file could look like {"Home": {}} where "Home" is the name, and {} is the value. read more at: https://www.w3schools.com/whatis/whatis_json.asp  
- **How to Edit:** To link files we will edit only the values of the name-value pairs. First get the file path to your file and wrap it in quotes (i.e. "assets/home/drd_new.mp4"), then in the json locate the name-value pair associated with the page to edit (i.e. "Home", "About", "Events", etc.). Within each of those page name-value pair is another json object that contains a name that describes where the item is on the page (i.e. "main-video", "what-is-db-slides", "our-story", etc.). As you can see the value after each of those names is a filepath to the asset to be displayed at the location the name describes (i.e. "./assets/home/drd.mp4"). take the quoted file path to the old asset and replace it with the quoted path to your new asset, and be sure not to delete any commas or other.

### git
So you've added your file to the assets folder. You've linked your asset to your desired location. How do you deploy to the actual website?

You've already done a git clone in order to get this repository on your local machine, all you gotta do is add your changes, commit, then push to main and the website will deploy.

if you are using github desktop:
- simply write your commit message then near top left there should be an option to push to main just click that

if you are using git cli:
- enter in the following commands:
    - git add .
    - git commit -m "enter your commit message in these quotes"
    - git push origin

Then wait for about 1-2 min before changes take effect.

## Tech Stack

Current tech stack is Vite (w/ React Plugin) + Netlify (for emails and captcha).
