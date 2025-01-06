import gsap from "gsap";
import { useEffect, useState } from "react";

const EducationCarousel = () => {
  const myEducation = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Maulana Abul Kalam Azad University of Technology, West Bengal",
      year: "2022 - 2022",
      cgpa: "8.3",
      spotlight: "/assets/education-image1.jpg",
      logo: "/assets/pngwing.com (1).png",
      logoStyle : {
        backgroundColor: 'lightgrey', // Lighter grey color
        borderRadius: '50%', // Fully rounded corners (circle)
        padding: '1rem', // Optional: adds some space around the logo
      }
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Jogesh Chandra Chaudhuri College",
      year: "2018 - 2021",
      cgpa: "7.6",
      spotlight: "/assets/education-image2.jpg",
      logo: "/assets/pngwing.com (1).png",
      logoStyle : {
        backgroundColor: 'lightgrey', // Lighter grey color
        borderRadius: '50%', // Fully rounded corners (circle)
        padding: '1rem', // Optional: adds some space around the logo
      }
     
    },
    {
        degree: "Higher Secondary (12th)",
        institution: "Harinavi Subhasini Balika Sikshalaya",
        year: "2016 - 2018",
        cgpa: "8.1",
        spotlight: "/assets/education-image2.jpg",
        logo: "/assets/pngwing.com (1).png",
        logoStyle : {
          backgroundColor: 'lightgrey', // Lighter grey color
          borderRadius: '50%', // Fully rounded corners (circle)
          padding: '1rem', // Optional: adds some space around the logo
        }
       
      },
  ];

  const [selectedEducationIndex, setSelectedEducationIndex] = useState(0);
  const educationCount = myEducation.length;

  const handleNavigation = (direction) => {
    setSelectedEducationIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? educationCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === educationCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  useEffect(() => {
    // GSAP animation for text
    gsap.fromTo(
      ".animatedText",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.inOut" }
    );
  }, [selectedEducationIndex]);

  const currentEducation = myEducation[selectedEducationIndex];

  return (
    <section className="c-space  ">
      <p className="head-text text-center text-3xl font-bold ">My Education</p>

      <div className="grid  grid-cols-1 mt-12 gap-5 w-full grid-container custom-neon-shadow">
        {/* Left Section: Carousel Details */}
        <div className="relative flex flex-col gap-5 p-6 rounded-xl shadow-lg custom-light-black-shadow">


          {/* Spotlight Image */}
         

          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentEducation.logoStyle}
          >
            <img
              className="w-10 h-10 shadow-sm"
              src={currentEducation.logo}
              alt="logo"
            />
          </div>

          {/* Education Details */}
          <div className="relative z-10 text-white">
          <p className="text-2xl sm:text-base font-semibold animatedText mb-2 education_rspnsv">
  {currentEducation.degree}
</p>
<p className="text-lg sm:text-sm animatedText mb-2 education_rspnsv">
  {currentEducation.institution}
</p>
<p className="text-md sm:text-xs animatedText mb-2">
  {currentEducation.year}
</p>
<span
  style={{
    borderRadius: '1rem',
    backgroundColor: '#52baee',
    padding: '0.2rem 0.5rem',
    color: 'blue',
    fontSize: '0.7rem',
    marginRight: '0.5rem',
  }}
  className="mb-2 border-b-gray-500"
>
  Completed
</span>
<p className="text-sm sm:text-xs animatedText mt-2">
  CGPA:{' '} {currentEducation.cgpa}
</p>


</div>


          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mt-7 nav_rspnsv">
            <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
              <img src="/assets/left-arrow.png" alt="left arrow" />
            </button>

            <button className="arrow-btn" onClick={() => handleNavigation('next')}>
              <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
            </button>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default EducationCarousel;
