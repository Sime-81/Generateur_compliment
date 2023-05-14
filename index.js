fetch("compliments.json")
  .then((response) => response.json())
  .then((data) => {
    function generateCompliment() {
      const compliments = data.compliments;
    
      let num = 0;
      let categorie = [];
      let elementnum = 0;
      let compliment = [];

      for(cat in compliments) {
        categorie.push(cat)
        num ++;
      };

      const randomIndex = Math.floor(Math.random() * num);

      const complimentcat = compliments[categorie[randomIndex]];

      const randomElement = Math.floor(Math.random() * complimentcat.length);

      compliment.push([categorie[randomIndex]], complimentcat[randomElement])

      return compliment;
    }

    const button = document.getElementById("generate-button");
    const output = document.getElementById("compliment-output");

    button.addEventListener("click", () => {
      const compliment = generateCompliment();
      output.innerHTML = 
      `
        <h2>${compliment[0]} :</h2>
        <h3>${compliment[1]}</h3>
      `;
    });
  });
