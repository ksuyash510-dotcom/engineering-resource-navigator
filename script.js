const app = document.getElementById("app");

const data = {
  Mechanical: {
    Thermodynamics: {
      "Concept Clarity": [
        {
          name: "NPTEL – Thermodynamics",
          link: "https://nptel.ac.in/courses/112/105/112105123/",
          note: "Best conceptual understanding from IIT professors"
        },
        {
          name: "Learn Engineering (YouTube)",
          link: "https://www.youtube.com/@LearnEngineering",
          note: "Visual explanations of energy systems"
        }
      ],

      "Problem Solving": [
        {
          name: "GATE Academy Numericals",
          link: "https://www.gateacademy.co.in/",
          note: "Exam-oriented problem solving approach"
        }
      ],

      "Tools & Software": [
        {
          name: "MATLAB Online",
          link: "https://matlab.mathworks.com",
          note: "Plot P–V and T–S diagrams"
        },
        {
          name: "NIST Steam Tables",
          link: "https://webbook.nist.gov/chemistry/fluid/",
          note: "Accurate thermodynamic property data"
        }
      ],

      "AI as Learning Partner": [
        {
          name: "ChatGPT",
          link: "https://chat.openai.com",
          note: "Concept explanation and solution verification"
        },
        {
          name: "Wolfram Alpha",
          link: "https://www.wolframalpha.com",
          note: "Equation solving and unit checking"
        }
      ],

      "Exams & Viva": [
        {
          name: "GATE Previous Year Questions",
          link: "https://gate.iitk.ac.in/",
          note: "Understand question patterns"
        }
      ],

      "Mini Projects": [
        {
          name: "Solar Water Heater Analysis",
          link: "https://www.energy.gov/eere/solar",
          note: "Real-life application of heat transfer"
        }
      ]
    }
  },

  Electrical: {
    "Network Theory": {
      "Concept Clarity": [
        {
          name: "All About Circuits",
          link: "https://www.allaboutcircuits.com",
          note: "Clear circuit theory explanations"
        }
      ]
    }
  },

  ECE: {
    "Digital Electronics": {
      "Concept Clarity": [
        {
          name: "Neso Academy",
          link: "https://www.youtube.com/@nesoacademy",
          note: "Excellent for logic gates and timing diagrams"
        }
      ]
    }
  },

  Civil: {
    "Structural Analysis": {
      "Concept Clarity": [
        {
          name: "Engineering Explained",
          link: "https://www.coursera.org",
          note: "Structural fundamentals"
        }
      ]
    }
  },

  Computer: {
    "Data Structures": {
      "Concept Clarity": [
        {
          name: "GeeksforGeeks",
          link: "https://www.geeksforgeeks.org",
          note: "Algorithms and implementation logic"
        }
      ]
    }
  }
};

function showBranches() {
  app.innerHTML = "<h2>Select Your Engineering Branch</h2>";
  Object.keys(data).forEach(branch => {
    app.innerHTML += `<button onclick="showSubjects('${branch}')">${branch}</button>`;
  });
}

function showSubjects(branch) {
  app.innerHTML = `<h2>${branch} Subjects</h2>`;
  Object.keys(data[branch]).forEach(subject => {
    app.innerHTML += `<button onclick="showSubject('${branch}','${subject}')">${subject}</button>`;
  });
}

function showSubject(branch, subject) {
  const content = data[branch][subject];
  app.innerHTML = `<h2>${subject}</h2>`;

  for (let section in content) {
    app.innerHTML += `
      <div class="card">
        <h3 class="section-title">${section}</h3>
        ${content[section].map(r => `
          <div class="resource">
            🔗 <a href="${r.link}" target="_blank">${r.name}</a>
            <div class="note">${r.note}</div>
          </div>
        `).join("")}
      </div>
    `;
  }
}

showBranches();
