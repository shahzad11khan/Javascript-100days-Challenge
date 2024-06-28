let str =
  "Experienced web designer specializing in creating visually compelling and user-friendly websites. Proficient in HTML, CSS, and JavaScript, with a keen eye for detail and a passion for innovative design. Committed to delivering high-quality digital experiences that meet client needs and drive engagement.";
let sentences = str.split(". ");

let bulletPoints = sentences
  .map((sentence) => `• ${sentence.trim()}`)
  .join("\n");

console.log(bulletPoints);
