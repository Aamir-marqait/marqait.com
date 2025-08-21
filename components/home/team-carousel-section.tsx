import { useState } from "react";

export default function TeamCarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(2); // Start with middle item active

  const teamMembers = [
    {
      id: 1,
      name: "Team Member 1",
      image: "/user.jpg",
    },
    {
      id: 2,
      name: "Team Member 2",
      image: "/user.jpg",
    },
    {
      id: 3,
      name: "Team Member 3",
      image: "/user.jpg",
    },
    {
      id: 4,
      name: "Team Member 4",
      image: "/user.jpg",
    },
    {
      id: 5,
      name: "Team Member 5",
      image: "/vite.svg",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length
    );
  };

  const getVisibleMembers = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      const index =
        (currentIndex + i + teamMembers.length) % teamMembers.length;
      visible.push({
        ...teamMembers[index],
        position: i,
      });
    }
    return visible;
  };

  const getImageSize = (position) => {
    if (position === 0) {
      // Center image - largest (315.092px)
      return "w-[315.092px] h-[315.092px]";
    } else if (Math.abs(position) === 1) {
      // Adjacent images - medium (222.474px)
      return "w-[222.474px] h-[222.474px]";
    } else {
      // Outer images - smallest (keeping responsive for outer)
      return "w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28";
    }
  };

  const getImageOpacity = (position) => {
    if (position === 0) {
      return "opacity-100";
    } else if (Math.abs(position) === 1) {
      return "opacity-80";
    } else {
      return "opacity-60";
    }
  };

  const getBorderStyle = (position) => {
    if (position === 0) {
      return "border-[0.955px] border-white";
    } else if (Math.abs(position) === 1) {
      return "border-[0.955px] border-white/50";
    } else {
      return "border-2 border-white/20";
    }
  };

  const getImageTransform = (position) => {
    if (position === 0) {
      return "translateX(0px)";
    } else if (position === 1) {
      return "translateX(200px)";
    } else if (position === -1) {
      return "translateX(-200px)";
    } else if (position === 2) {
      return "translateX(380px)";
    } else if (position === -2) {
      return "translateX(-380px)";
    }
    return `translateX(${position * 150}px)`;
  };

  return (
    <section className="relative bg-[#05000A] py-16 sm:py-5 lg:py-5 xl:py-5">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Team Carousel */}
        <div className="flex flex-col items-center">
          {/* Images Container */}
          <div className="relative w-full max-w-6xl mx-auto mb-12 sm:mb-16 lg:mb-10">
            <div className="flex items-center justify-center h-[315.092px] relative overflow-visible">
              {getVisibleMembers().map((member) => (
                <div
                  key={`${member.id}-${currentIndex}`}
                  className={`absolute transition-all duration-700 ease-out ${getImageSize(
                    member.position
                  )} ${getImageOpacity(member.position)}`}
                  style={{
                    transform: getImageTransform(member.position),
                    zIndex:
                      member.position === 0
                        ? 10
                        : 5 - Math.abs(member.position),
                  }}
                >
                  <div
                    className={`w-full h-full rounded-full overflow-hidden transition-all duration-700 ease-out ${getBorderStyle(
                      member.position
                    )}`}
                  >
                    <div className="relative w-full h-full">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                      {Math.abs(member.position) === 1 && (
                        <div
                          className="absolute inset-0 rounded-full"
                          style={{
                            background:
                              "linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%)",
                          }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-6 sm:gap-8">
            <button
              onClick={prevSlide}
              className="w-[43.489px] cursor-pointer h-[43.489px] p-[9.745px] flex justify-center items-center flex-shrink-0 rounded-[44px] bg-white/15 transition-all duration-200 group"
              aria-label="Previous team member"
            >
              
              <img src="/icons/arrow.svg" className="rotate-180" />
            </button>

            <button
              onClick={nextSlide}
              className="w-[43.489px] h-[43.489px] p-[9.745px] flex justify-center items-center flex-shrink-0 rounded-[44px] bg-white/15 transition-all duration-200 group"
              aria-label="Next team member"
            >
              <img src="/icons/arrow.svg" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
