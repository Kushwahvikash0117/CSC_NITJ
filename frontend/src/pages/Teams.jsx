import React from "react";

// Data structure
const coordinators = [
  { name: "Vikash Kushwah", role: "Student Coordinator", image: "/src/assets/members/vikash.jpeg" },
  { name: "Kritika Joshi", role: "Student Coordinator", image: "/src/assets/members/kritika.jpeg" }
];

const teams = [
  {
    name: "Management Team",
    heads: [
      { name: "Aarav Sharma", role: "Team Head", image: "/src/assets/members/aarav.png" },
      { name: "Riya Singh", role: "Team Head", image: "/src/assets/members/riya.png" }
    ],
    members: [
      { name: "Nisha Patel", role: "Member", image: "/src/assets/members/nisha.png" },
      { name: "Aditya Verma", role: "Member", image: "/src/assets/members/aditya.png" }
    ]
  },
  {
    name: "Digital & PR Team",
    heads: [
      { name: "Simran Maurya", role: "Digital Head", image: "/src/assets/members/simran.jpeg" },
      { name: "Dhruv Tyagi", role: "Social Media Head", image: "/src/assets/members/dhruvt.webp" },
      { name: "Mohit Gangwar", role: "PR Head", image: "/src/assets/members/mohit.jpeg" }
    ],
    members: [
      { name: "Priya Sharma", role: "Member", image: "/src/assets/members/priya.png" },
      { name: "Kunal Jain", role: "Member", image: "/src/assets/members/kunal.png" }
    ]
  },
  {
    name: "Tech Team",
    heads: [
      { name: "Jaspreet Kaur", role: "Team Head", image: "/src/assets/members/jaspreet.jpeg" },
      { name: "Samarth Chakrawarti", role: "Team Head", image: "/src/assets/members/samarth.jpeg" },
      { name: "Anuj Dubey", role: "Team Head", image: "/src/assets/members/anuj.png" }
    ],
    members: [
      { name: "Ritesh Kumar", role: "Member", image: "/src/assets/members/ritesh.png" },
      { name: "Simran Kaur", role: "Member", image: "/src/assets/members/simran.png" }
    ]
  },
  {
    name: "Project Management Team",
    heads: [
      { name: "Abc", role: "Team Head", image: "/src/assets/members/abc.jpeg" },
      { name: "Def", role: "Team Head", image: "/src/assets/members/def.jpeg" }
    ],
    members: [
      { name: "Riya Singh", role: "Member", image: "/src/assets/members/riya.png" },
      { name: "Aditya Verma", role: "Member", image: "/src/assets/members/aditya.png" }
    ]
  }
];

function Teams() {
  const renderCard = (person, type) => {
    let borderColor = "";
    switch (type) {
      case "coordinator":
        borderColor = "border-4 border-yellow-400";
        break;
      case "head":
        borderColor = "border-4 border-[#17EAECff]";
        break;
      case "member":
        borderColor = "border-2 border-gray-500";
        break;
      default:
        borderColor = "border-2 border-gray-500";
    }

    return (
      <div className={`bg-primary rounded-xl shadow-lg hover:scale-105 transition duration-300 p-6 flex flex-col items-center text-center w-60 ${borderColor}`}>
        <img
          src={person.image}
          alt={person.name}
          className="w-24 h-24 mb-4 rounded-full object-cover"
        />
        <h3 className="text-xl font-semibold text-accent mb-1">{person.name}</h3>
        <p className="text-gray-300">{person.role}</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br 
from-[#020617] 
via-[#0A3A5E] 
to-[#17EAEC]
">
      <div className="container mx-auto py-16">
        <h1 className="text-4xl font-bold text-accent mb-12 text-center">
          Our Teams
        </h1>

        {/* Student Coordinators */}
        <div className="flex flex-wrap justify-center gap-12 mb-16">
          {coordinators.map((coord, idx) => renderCard(coord, "coordinator"))}
        </div>

        {/* Teams */}
        <div className="space-y-16">
          {teams.map((team, tIdx) => (
            <div key={tIdx}>
              <h2 className="text-3xl font-bold text-secondary mb-6 text-center">
                {team.name}
              </h2>

              {/* Heads */}
              <div className="flex justify-center gap-8 mb-8 flex-wrap">
                {team.heads.map((head) => renderCard(head, "head"))}
              </div>

              {/* Members */}
              <div className="flex justify-center gap-8 flex-wrap">
                {team.members.map((member) => renderCard(member, "member"))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default Teams;
