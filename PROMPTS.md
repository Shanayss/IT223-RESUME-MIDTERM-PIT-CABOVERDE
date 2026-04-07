Entry #1
Tool Used: ChatGPT
Prompt (copy-paste exactly):
How to have another font that is not built-in.
AI Output (summary or screenshot reference):
The AI explained that I can use Google Fonts by adding a <link> in the HTML then applying the font using font-family.

BEST (modern + elegant look using Google Font)
If you want something closer to your template design:
1. Add this in your HTML <head>:
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
2. Then in your CSS:
.header h1 {
    font-family: 'Playfair Display', serif;
}

How I used/modified it in my project: 
I used a Google Font by adding the link in my HTML file and then applied it in my CSS. This helped improve the design and made the text look more modern.


Entry #2
Tool Used: ChatGPT
Prompt (copy-paste exactly):
How to have a feedback when the user does not input something
AI Output (realistic response):

You can validate form inputs using JavaScript by checking if the values are empty. If a field is empty, you can show a message and prevent form submission.
Example:
const input = document.getElementById("name").value.trim();

if (input === "") {
 alert("Please fill out the field.");
}
You can apply this to all required fields before allowing the form to submit.

How I used/modified it in my project:
 I applied this in my contact form and hire me form. I check all input fields, and if any are empty, a popup message appears telling the user to complete the form before submitting.
 
Entry #3
Tool Used: ChatGPT
Prompt (copy-paste exactly):
Give me a list of skills to put in my resume as a web developer
AI Output (summary or screenshot reference):

The AI provided a list of common web development skills such as HTML, CSS, JavaScript, responsive design, version control (Git), and basic knowledge of UI/UX design. It also suggested including both technical and soft skills.

How I used/modified it in my project:
I selected the skills that match my current knowledge and added them to the skills section of my resume, while some of the rest were included based on suggestions.

Entry #4

Tool Used: ChatGPT
Prompt (copy-paste exactly):
How to create a java script that prevents submitting an empty field and give feedback to the user after submitting
AI Output (realistic response):

You can prevent empty form submission by using preventDefault() and checking inputs before allowing submission.
form.addEventListener("submit", function(e) {
  e.preventDefault();

  if (!input.value.trim()) {
    alert("Please fill out the form");
  } else {
    alert("Submitted successfully");
  }
});

How I used/modified it in my project:
I implemented this in both my forms. I used preventDefault() and added conditions to check inputs. If valid, I show a success message and reset the form.

Entry #5

Tool Used: ChatGPT
Prompt (copy-paste exactly):
How to have a smooth scrolling on my resume
AI Output (realistic response):
You can enable smooth scrolling using CSS:

html {
  scroll-behavior: smooth;
}

Or using JavaScript/jQuery for more control:

$("a").on("click", function(e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: $(this.hash).offset().top }, 800);
});

This creates smooth navigation between sections.

How I used/modified it in my project:
I used jQuery animate to smoothly scroll when navigation links are clicked. I also adjusted the scroll position to account for my fixed navbar.

Entry #6

Tool Used: ChatGPT
Prompt (copy-paste exactly):
Create me a paragraph "about me" to put in my resume
AI Output (realistic response):
Here is a sample “About Me” paragraph:

"I am a passionate and detail-oriented web developer who enjoys creating clean, user-friendly, and responsive websites. I have experience in HTML, CSS, and JavaScript, and I am continuously improving my skills in UI/UX design and web development. I like solving problems and turning ideas into functional and visually appealing digital experiences. I am eager to learn new technologies and work on projects that help me grow as a developer." 

How I used/modified it in my project:
I did just copy and pasted the paragraph into my resume’s About Me section.

Entry #7

Tool Used: ChatGPT
Prompt (copy-paste exactly):
Guide me on what to do to have a darkmode feature in my webpage
AI Output (realistic response):

To implement dark mode, you should mainly use CSS for styling and JavaScript for toggling.
Create a .dark-mode class in CSS that changes the colors of your whole page (body, containers, text, etc.)
Example CSS:
.dark-mode {
  background-color: #121212;
  color: #ffffff;
}
.dark-mode .container {
  background-color: #1e1e1e;
}
.dark-mode .card {
  background-color: #2a2a2a;
}
Use JavaScript to add or remove the .dark-mode class when a button is clicked.
Example JavaScript:
document.getElementById("toggleBtn").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});
This way, all elements will automatically change styles when dark mode is active.

How I used/modified it in my project:
I followed the idea of using CSS to control the dark mode design. I created styles for my body and containers so that their background and text colors change when the dark-mode class is active.

For the functionality, I used jQuery instead of plain JavaScript to toggle the dark-mode class on the body when the user clicks the button. I also added a feature that changes the icon (moon/sun) to show whether dark mode is on or off.

Entry #8

Tool Used: ChatGPT
Prompt (copy-paste exactly):
How to hide words using toggle

AI Output (realistic response):

You can hide and show content by using a CSS class, proper HTML structure, and JavaScript.
Create a CSS class to hide elements:
.hidden {
  display: none;
}
In your HTML, group the extra skills inside a container and hide it by default:
<div class="skills">
  <p>HTML</p>
  <p>CSS</p>
  <p>JavaScript</p>

  <div id="moreSkills" class="hidden">
    <p>Responsive Design</p>
    <p>Git & GitHub</p>
    <p>Basic UI/UX</p>
  </div>

  <button id="toggleSkillsBtn">View More</button>
</div>
Use JavaScript to toggle the hidden class:
document.getElementById("toggleSkillsBtn").addEventListener("click", function() {
  document.getElementById("moreSkills").classList.toggle("hidden");
});
This will show or hide the extra skills when the button is clicked.

How I used/modified it in my project:
I followed this structure in my skills section. I grouped the additional skills inside a container (moreSkills) and set it to hidden by default.
Then I used JavaScript to toggle the hidden class when the button is clicked. I also improved the feature by changing the button text from “View More” to “View Less” and applying the same idea to my projects section

Entry #9

Tool Used: GitHub Copilot
Prompt (copy-paste exactly):
How to change the input in contact form from white to gray in darkmode

AI Output (realistic response):
GitHub Copilot suggested modifying the CSS for input fields when dark mode is active by targeting them inside the .dark-mode class.

Example suggestion:

.dark-mode input,
.dark-mode textarea {
  background-color: #333;
  color: #fff;
  border: 1px solid #555;
}

This changes the background of the input fields from white to gray and makes the text more readable in dark mode.

How I used/modified it in my project:
I used this suggestion and added it to my CSS. I applied the styles to my contact form inputs and textarea so that when dark mode is active, the fields change from white to a darker gray.

Entry #10

Tool Used: GitHub Copilot
Prompt (copy-paste exactly):
How to adjust spacing and padding in css to make layout more clean

AI Output (realistic response):
GitHub Copilot suggested adding padding and margin to improve spacing between elements. It showed examples like:

.container {
  padding: 20px;
}

.section {
  margin-bottom: 20px;
}

How I used/modified it in my project:
I used these suggestions to improve the spacing in my resume. I added padding to my sections and containers, and margin between elements to avoid them being too close.
I adjusted the values (like changing 20px to 30px or 40px) depending on what looked better in my design. This made my layout cleaner and easier to read.

Entry #11

Tool Used: GitHub Copilot
Prompt (copy-paste exactly):
How to show a popup message after submitting a form using javascript

AI Output (realistic response):
GitHub Copilot suggested using an event listener for the form submission and showing a message after the form is submitted.

Example suggestion:

const form = document.getElementById("myForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Form submitted successfully!");
});

It also suggested that instead of using alert(), a custom popup using HTML and CSS can be used for better design.

How I used/modified it in my project:
I followed this idea but instead of using a simple alert, I created my own custom popup using HTML, CSS, and JavaScript.

After the user submits the form, I display a popup message using my showPopup() function. I also added validation so that the popup only shows a success message if all fields are filled, otherwise it shows an error message.
