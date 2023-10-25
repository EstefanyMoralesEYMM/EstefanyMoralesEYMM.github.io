let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #000000;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #a78d9e;">Enseño programación web y hago contenido de tecnología.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
