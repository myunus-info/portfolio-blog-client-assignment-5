import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs } from 'react-icons/si';
import { Badge } from '../ui/badge';

const skills = [
  { name: 'Next.js', icon: <SiNextdotjs className="text-3xl" />, level: 90 },
  { name: 'React.js', icon: <FaReact className="text-3xl text-blue-500" />, level: 85 },
  { name: 'TypeScript', icon: <SiTypescript className="text-3xl text-blue-600" />, level: 80 },
  { name: 'Node.js', icon: <FaNodeJs className="text-3xl text-green-500" />, level: 75 },
  { name: 'MongoDB', icon: <FaDatabase className="text-3xl text-green-700" />, level: 70 },
];

export const Skills = () => {
  return (
    <section className="px-4 py-20 bg-[#f9f9fA]">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Skills
          </Badge>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold">Highlighted Skills</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {skills.map(skill => (
            <div key={skill.name} className="space-y-2">
              <div className="flex items-center space-x-2">
                {skill.icon}
                <span className="font-medium">{skill.name}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// export default Skills;
