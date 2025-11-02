document.addEventListener("DOMContentLoaded", () => {
  const quote = document.getElementById("inf");
  const listOfQuotes = [
    "Bug bounty Hunter",
    "Web Application Security Enthusiast",
    "Loves to break things",
    "Pentester by day, coder by night",
    "Script Developer(cheats)",
    "Cybersecurity Advocate",
    "Security Researcher",
    "Vulnerability Assessor",
    "Code Auditor"
  ];

  quote.style.fontStyle = "italic";
  quote.style.color = "cyan";
  quote.style.fontSize = "10px";

  let i = 0;
  let selectedQuote = listOfQuotes[Math.floor(Math.random() * listOfQuotes.length)];
  const typingSpeed = 100;

  function typeWriter() {
    if (i < selectedQuote.length) {
      quote.textContent += selectedQuote.charAt(i);
      i++;
      setTimeout(typeWriter, typingSpeed);
    } else {
      setTimeout(() => {
        quote.textContent = "";
        i = 0;
        selectedQuote = listOfQuotes[Math.floor(Math.random() * listOfQuotes.length)];
        typeWriter();
      }, 4000);
    }
  }
  typeWriter();

  const menuBtn = document.getElementById("menu-btn");
  const sidebar = document.getElementById("sidebar");
  const main = document.getElementById("main-content");
  const navLinks = document.querySelectorAll(".navbar a");
  const sections = document.querySelectorAll("main section");

  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("closed");
    menuBtn.classList.toggle("active");
    main.classList.toggle("expanded");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      if (window.innerWidth <= 768) {
        sidebar.classList.add("closed");
        menuBtn.classList.remove("active");
        main.classList.remove("expanded");
      }
    });
  });

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) link.classList.add("active");
    });
  });

  if (window.innerWidth > 768) {
    const cursor = document.querySelector(".cursor");
    const sparks = [];

    document.addEventListener("mousemove", e => {
      const x = e.clientX;
      const y = e.clientY;
      cursor.style.left = x + "px";
      cursor.style.top = y + "px";

      const spark = document.createElement("div");
      spark.classList.add("spark");
      spark.style.left = `${x}px`;
      spark.style.top = `${y}px`;
      spark.style.position = "fixed";
      spark.style.width = "6px";
      spark.style.height = "6px";
      spark.style.borderRadius = "50%";
      spark.style.background = `rgba(0,255,255,0.8)`;
      spark.style.boxShadow = "0 0 10px cyan";
      spark.style.pointerEvents = "none";
      spark.style.zIndex = 1999;
      document.body.appendChild(spark);

      setTimeout(() => {
        spark.style.transition = "opacity 0.3s ease, transform 0.3s ease";
        spark.style.opacity = "0";
        spark.style.transform = "scale(0.5)";
      }, 50);

      setTimeout(() => spark.remove(), 350);
    });
  } else {
    const cursor = document.querySelector(".cursor");
    if (cursor) cursor.style.display = "none";
  }
});
