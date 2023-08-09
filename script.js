document.getElementById("read-more-btn").addEventListener("click", function() {
    document.getElementById("full-about").classList.toggle("hidden");
    this.textContent = this.textContent === "Read More" ? "Read Less" : "Read More";
  });

  document.getElementById("Skillinfo1").addEventListener("click", function() {
    document.getElementById("Skill1").classList.toggle("hidden");
  });



  