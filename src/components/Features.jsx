import { FaBookOpen, FaUserGraduate, FaMapMarkedAlt } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";

function Features() {
  const features = [
    {
      icon: <GiTeacher size={40} />,
      title: "Career Recommendations",
      description:
        "Get personalized career suggestions based on your skills, interests, and market trends. Our AI analyzes your profile to recommend the best career paths.",
    },
    {
      icon: <FaBookOpen size={40} />,
      title: "Course Recommendations",
      description:
        "Discover curated courses and learning resources tailored to your career goals. Stay ahead with relevant skills and certifications.",
    },
    {
      icon: <FaUserGraduate size={40} />,
      title: "Skill Gap Analysis",
      description:
        "Identify the skills you need to develop for your dream role. Our intelligent system highlights your strengths and areas for improvement.",
    },
    {
      icon: <FaMapMarkedAlt size={40} />,
      title: "Personalized Roadmap",
      description:
        "Receive a step-by-step career roadmap customized to your goals. Track your progress and achieve milestones with confidence.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Features
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-blue-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100"
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
