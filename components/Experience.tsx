const experienceData = [
  {
    role: "Data Science Consultant",
    company: "130 Degree Consulting Bristol",
    location:"Bristol, United Kingdom",
    duration: "Jul 2025 – ongoing",
    description: ["Selected as a Data Science Consultant for the Summer Cycle 2025 of 180DC Bristol",
      "Building a centralised data storage system for Weston Housing Action to streamline the organisation and accessibility of key information. "
    ]
  },
  {
    role: "Data Science Student Consultant",
    company: "ECOZE",
    location:"Bristol, United Kingdom",
    duration: "May 2025 – ongoing",
    description: ["Selected to work on an industry thesis project with ECOZE on supermarket product categorisation utilising Azure for storing and automating the product database.",
      "Applying advanced data analysis and product categorisation on 15k+ grocery products for 7+ UK supermarkets each to predict carbon footprint, aligning with business objectives.",
      "Utilising Microsoft Azure for data storage and Tableau, Power BI for visualisations to support sustainability initiatives."]
},
  {
    role: "Data Science intern",
    company: "Fidelis AI",
    location:"Bristol, United Kingdom",
    duration: "Jan 2025 – Jul 2025",
    description: ["Developed synthetic image generation models using CycleGANs, utilising both simulated and real-world image datasets.",
                  "Utilised AWS services, including S3 for scalable data storage and EC2 instances for model training and deployment on virtual servers",
                  "Responsible for autoscaling, general AWS integration, and managing NoSQL-driven databases to handle synthetic data pipelines."]
  },
  {
    role: "Data Science Admin (Client Project)",
    company: "University of Bristol",
    location:"Bristol, United Kingdom",
    duration: "Jan 2025 – May 2025",
    description: ["Selected as a group admin for the client project on predicting the variation in fossil sizes with climate change.",
                  "Successfully concluded the project with proof of concept, earning appreciation from the problem owner.",
                  "Led the project by coordinating tasks on Trello, also handled data cleaning and utilised clustering techniques."]
  },
  {
    role: "Summer intern",
    company: "Humane Society International",
    location:"Remote",
    duration: "Jun 2024 – Aug 2024",
    description: ["Curated databases for plant-forward and sustainable restaurants in Pune and Mumbai.",
                  "Developed a code to automate database creation using the Google Cloud API.",
                  "Interviewed restaurant owners and conducted telephone interviews with owners from Bangalore.",
                  "Developed business case studies and derived conclusions based on these interviews and insights helped shape the NGO's next action plan for plant-based activism and outreach efforts."]
  },
  {
    role: "AI Research intern",
    company: "GreenPepper",
    location:"Banglore, India",
    duration: "Feb 2024 – Jun 2024",
    description: ["Ideated, researched and developed GenAI legal document automation solutions, focusing on efficiency, accuracy, and usability.",
                  "Crafted articles for GreenPepper on different Legal Language Models (LLM), highlighting their applications and benefits."]
  },
  {
    role: "Data Science intern",
    company: "Bank of Maharashtra",
    location:"Pune, India",
    duration: "Jul 2023 – Dec 2023",
    description: ["Predicted financial distress with 89% accuracy via Python using Z-score and SVM models, enabling proactive risk management across 200+ high-risk loans.", 
    "Reduced loan default rates by 10% through strategic risk mitigation based on key insights derived from advanced predictive models, enablingbetter outcomes and data management.",
    "Performed customer-focused sentiment analysis on credit and customer data using NLTK, pinpointing 30% of common grievances, informing targeted customer satisfaction improvements.",
    "Delivered executable insights to stakeholders through compelling presentations and reports with clear data visualisations using Seaborn, enhancing customer satisfaction rates by 15%."
    ]
  },
]

export default function Experience() {
  return (
    <section id="experience" className="px-6">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      <div className="flex overflow-x-auto gap-4 pb-4">
        {experienceData.map((exp, index) => (
          <div
            key={index}
            className="min-w-[400px] max-h-[300px] p-4 bg-secondary dark:bg-gray-800 rounded-lg overflow-hidden flex flex-col"
          >
            {/* Scrollable content inside */}
            <div className="overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600">
              <h3 className="font-semibold">{exp.role}</h3>
              <p className="text-sm">{exp.company}</p>
              <p className="text-xs">{exp.location}</p>
              <p className="text-xs">{exp.duration}</p>

              <div className="mt-2 space-y-1 text-sm">
                {exp.description.map((line, i) => (
                  <p key={i}>• {line}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

