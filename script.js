document.getElementById("read-more-btn").addEventListener("click", function() {
    document.getElementById("full-about").classList.toggle("hidden");
    this.textContent = this.textContent === "Read More" ? "Read Less" : "Read More";
  });

  document.getElementById("Skillinfo1").addEventListener("click", function() {
    if (!document.getElementById("EachSkill2").classList.contains("hidden"))
    document.getElementById("EachSkill2").classList.toggle("hidden");
    if (!document.getElementById("EachSkill3").classList.contains("hidden"))
    document.getElementById("EachSkill3").classList.toggle("hidden");
    document.getElementById("EachSkill1").classList.toggle("hidden");
   });


  document.getElementById("Skillinfo2").addEventListener("click", function() {
    if (!document.getElementById("EachSkill1").classList.contains("hidden"))
    document.getElementById("EachSkill1").classList.toggle("hidden");
    if (!document.getElementById("EachSkill3").classList.contains("hidden"))
    document.getElementById("EachSkill3").classList.toggle("hidden");
    document.getElementById("EachSkill2").classList.toggle("hidden");
  });
  document.getElementById("Skillinfo3").addEventListener("click", function() {
    if (!document.getElementById("EachSkill1").classList.contains("hidden"))
    document.getElementById("EachSkill1").classList.toggle("hidden");
    if (!document.getElementById("EachSkill2").classList.contains("hidden"))
    document.getElementById("EachSkill2").classList.toggle("hidden");
    document.getElementById("EachSkill3").classList.toggle("hidden");
  });




  