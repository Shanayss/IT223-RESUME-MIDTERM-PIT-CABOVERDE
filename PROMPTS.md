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
