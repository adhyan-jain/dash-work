"use client";
import LampDemo from "@/components/ui/lamp";
import { useState } from "react";
import InputBox from "@/components/InputBox";
import ImgBox from "@/components/ImgBox";

export default function Home() {
  const [teamType, setTeamType] = useState("");
  const [selectedTrack, setSelectedTrack] = useState<number | null>(null);
  const [techStack, setTechStack] = useState<string[]>([
    "HTML",
    "React native",
    "Javascript",
  ]);
  const [newTech, setNewTech] = useState<string>("");

  const addTech = (): void => {
    if (newTech.trim() && !techStack.includes(newTech.trim())) {
      setTechStack([...techStack, newTech.trim()]);
      setNewTech("");
    }
  };

  const removeTech = (techToRemove: string): void => {
    setTechStack(techStack.filter((tech) => tech !== techToRemove));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      addTech();
    }
  };

  interface TechTagProps {
    tech: string;
    onRemove: () => void;
  }

  const TechTag: React.FC<TechTagProps> = ({ tech, onRemove }) => {
    return (
      <div className="bg-gray-600 text-white px-3 py-1 rounded-md flex items-center md:gap-2 text-sm">
        {tech}
        <button onClick={onRemove} className="text-gray-300 hover:text-white">
          ×
        </button>
      </div>
    );
  };

  return (
    <LampDemo>
      <div className="w-full flex justify-center pt-[120px] md:pt-[200px] lg:pt-[275px]">
        <div className="w-full max-w-6xl px-2 sm:px-4 md:px-8 text-white">
          <h2 className="pt-10 sm:pt-20 text-lg sm:text-[25px] md:sm:text-[30px] lg:text-[40px] text-center font-bold">
            Ideas are the new currency—spend yours here!
          </h2>
          <h2 className="pt-10 sm:pt-16 text-2xl sm:text-4xl md:text-[70px] text-center font-bold">
            Idea Submission
          </h2>

          <div className="lg:w-[60%] w-full min-h-[180px] md:min-h-[220px] lg:min-h-[250px] mx-auto mt-8 p-2 font-bold">
            <h2 className="sm:text-[30px] text-xl text-left mb-8">Team Type</h2>
            <div className="flex flex-row gap-4 justify-between">
              <button className="bg-[rgba(57,75,67,1)] text-[rgba(166,163,163,1)] text-xs sm:text-lg md:text-xl px-4 py-2 w-full sm:w-[48%] h-[60px] md:h-[87px] rounded-lg border-2 border-emerald-500">
                Internal Participant
              </button>
              <button className="bg-[rgba(6,15,11,1)] text-[rgba(166,163,163,1)] text-xs sm:text-lg md:text-xl px-4 py-2 w-full sm:w-[48%] h-[60px] md:h-[87px] rounded-lg border-2 border-emerald-500">
                External Participant
              </button>
            </div>
          </div>

          <div className="lg:w-[60%] w-full min-h-[120px] md:min-h-[180px] lg:min-h-[220px] mx-auto mt-6 p-2 font-bold">
            <h2 className="sm:text-[30px] text-xl text-left mb-8">Team Name</h2>
            <div className="flex w-full">
              <InputBox placeholder="Hackers"></InputBox>
            </div>
          </div>

          <div className="lg:w-[60%] w-full min-h-[200px] md:min-h-[300px] lg:min-h-[400px] mx-auto mt-6 p-2 font-bold">
            <h2 className="sm:sm:text-[30px] text-xl text-left mb-3">Team Members</h2>
            <div className="flex w-full flex-col gap-2">
              <InputBox placeholder="Enter Teammate 1..."></InputBox>
              <InputBox placeholder="Enter Teammate 2..."></InputBox>
              <InputBox placeholder="Enter Teammate 3..."></InputBox>
              <InputBox placeholder="Enter Teammate 4..."></InputBox>
              <InputBox placeholder="Enter Teammate 5..."></InputBox>
            </div>
          </div>

          <div className="lg:w-[60%] w-full max-w-4xl mx-auto mt-6 py-10 font-bold">
            <h2 className="sm:sm:text-[30px] text-xl text-left mb-3">Tracks</h2>
            <div className="grid grid-cols-6 gap-4 h-auto md:h-[600px]">
              {[
                {
                  text: "AI & Automation",
                  img: "/img1.png",
                  title: "AI & Automation",
                },
                {
                  text: "Healthcare Tech",
                  img: "/img2.png",
                  title: "Healthcare Tech",
                },
                {
                  text: "Green Energy",
                  img: "/img3.png",
                  title: "Green Energy",
                },
                { text: "Education", img: "/img4.png", title: "Education" },
                {
                  text: "Open Innovation",
                  img: "/img5.png",
                  title: "Open Innovation",
                },
              ].map((track, idx) => (
                <ImgBox
                  key={track.title}
                  text={track.text}
                  img={track.img}
                  title={track.title}
                  selected={selectedTrack === idx}
                  onClick={() => setSelectedTrack(idx)}
                />
              ))}
            </div>
          </div>

          {/* Project Title */}
          <div className="lg:w-[60%] w-full mx-auto p-2 font-bold">
            <h2 className="sm:text-[30px] text-xl text-left mb-3">Project Title</h2>
            <div className="flex w-full">
              <InputBox placeholder="Enter Project Title..."></InputBox>
            </div>
          </div>

          {/* Project Description */}
          <div className="lg:w-[60%] w-full mx-auto mt-6 p-2 font-bold">
            <h2 className="sm:text-[30px] text-xl text-left mb-3">Project Description</h2>
            <div className="flex w-full">
              <textarea
                className="w-full h-32 bg-[rgba(6,15,11,1)] border-2 border-emerald-500 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 resize-none"
                placeholder="Enter Project Description in 50 words..."
                rows={4}
              />
            </div>
          </div>

          {/* Tech Stack */}
          <div className="w-full lg:w-[60%] mx-auto mt-6 p-2 font-bold">
            <h2 className="sm:text-[30px] text-xl text-left mb-3">Tech Stack</h2>
            <div className="relative mb-4">
              <input
                className="w-full h-[58px] bg-[rgba(57,75,67,1)] border-2 border-emerald-500 rounded-lg px-4 py-3 pr-12 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400"
                placeholder="Find your tech stack..."
                value={newTech}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNewTech(e.target.value)
                }
                onKeyDown={handleKeyPress}
              />
              <button
                onClick={addTech}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              >
                🔍
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {techStack.map((tech: string) => (
                <TechTag
                  key={tech}
                  tech={tech}
                  onRemove={() => removeTech(tech)}
                />
              ))}
            </div>
          </div>

          {/* Idea Submission */}
          <div className="w-full lg:w-[60%] mx-auto mt-6 p-2 font-bold">
            <h2 className="sm:text-[30px] text-xl text-left mb-3">Idea Submission</h2>
            <p className="text-gray-400 mb-6 text-sm">
              Download the template PPT, fill in your idea details, and upload
              your completed file here.
            </p>
            <div className="flex w-[99%] items-center gap-2 mb-4">
              <input
                className="flex-1 bg-[rgba(6,15,11,1)] border-2 h-[87px] border-emerald-500 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400"
                placeholder="Upload Idea in a PPT/PDF format. File should be under 5MB..."
                readOnly
              />
              <div className="inline-flex">
                <button
                  type="button"
                  className="border-2 border-emerald-500 rounded-lg px-4 h-[87px] py-3 flex justify-center items-center ml-2"
                >
                  <img src="/Group.png" alt="Upload" className="w-10 h-10" />
                </button>
              </div>
            </div>
            <button
              type="button"
              className="bg-[rgba(6,15,11,1)] border-emerald-500 border-2 md:text-[20px] text-[12px] h-[25px] md:h-[47px] text-gray-400 px-6 md:py-2 rounded-lg transition-colors"
            >
              Download Template
            </button>
          </div>

          {/* GitHub Link */}
          <div className="lg:w-[60%] w-full mx-auto mt-6 p-2 font-bold">
            <h2 className="sm:text-[30px] text-xl text-left mb-3">GitHub Link (if any)</h2>
              <div className="flex w-full items-center gap-2 mb-4">
                <input
                type="url"
                className="flex-1 bg-[rgba(6,15,11,1)] border-2 h-[87px] border-emerald-500 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400"
                placeholder="Upload GitHub Link..."
                />
              <div className="inline-flex">
                <button
                type="button"
                className="border-2 border-emerald-500 rounded-lg px-4 h-[87px] py-3 flex justify-center items-center ml-2"
                >
                  <img src="/Group.png" alt="Upload" className="w-10 h-10" />
                </button>
              </div>
            </div>
          </div>


          {/* Figma Link */}
          <div className="lg:w-[60%] w-full mx-auto mt-6 p-2 font-bold">
            <h2 className="sm:text-[30px] text-xl text-left mb-3">Figma Link (if any)</h2>
            <div className="flex w-full items-center gap-2 mb-4">
              <input
                type="url"
                className="flex-1 bg-[rgba(6,15,11,1)] border-2 border-emerald-500 h-[87px] rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400"
                placeholder="Upload Figma Link..."
              />
              <div className="inline-flex">
                <button
                  type="button"
                  className="border-2 border-emerald-500 rounded-lg h-[87px] px-4 py-3 flex justify-center items-center ml-2"
                >
                  <img src="/Group.png" alt="Upload" className="w-10 h-10" />
                </button>
              </div>
            </div>
          </div>

          {/* Google Drive Link */}
          <div className="lg:w-[60%] w-full mx-auto mt-[20px] p-2 font-bold">
            <h2 className="sm:text-[30px] text-xl text-left mb-3">
              Google Drive Link (if any)
            </h2>
            <div className="flex w-full items-center gap-2 mb-4">
              <input
                type="url"
                className="flex-1 bg-[rgba(6,15,11,1)] border-2 h-[87px] border-emerald-500 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400"
                placeholder="Upload Google Drive Link..."
              />
              <div className="inline-flex">
                <button
                  type="button"
                  className="border-2 border-emerald-500 rounded-lg h-[87px] px-4 py-3 flex justify-center items-center ml-2"
                >
                  <img src="/Group.png" alt="Upload" className="w-10 h-10" />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:hidden w-full mx-auto mt-[20px] font-bold mb-20 p-2 flex flex-row gap-4 justify-between">
              <button className="bg-[rgba(57,75,67,1)] text-[rgba(166,163,163,1)] text-xs sm:text-lg md:text-xl lg:hidden px-4 py-2 w-full sm:w-[48%] h-[60px] md:h-[87px] rounded-lg border-2 border-emerald-500">
                Internal Participant
              </button>
              <button className="bg-[rgba(6,15,11,1)] text-[rgba(166,163,163,1)] text-xs sm:text-lg md:text-xl lg:hidden px-4 py-2 w-full sm:w-[48%] h-[60px] md:h-[87px] rounded-lg border-2 border-emerald-500">
                External Participant
              </button>
          </div>
        </div>
      </div>
    </LampDemo>
  );
}
