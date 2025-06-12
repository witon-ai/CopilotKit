import { DocsLayout } from "fumadocs-ui/layout";
import type { ReactNode } from "react";
import { baseOptions } from "../layout.config";
import { source } from "@/app/source";
import { SubdocsMenu } from "@/components/react/subdocs-menu";
import { TerminalIcon, RocketIcon } from "lucide-react";
import { SiCrewai } from "@icons-pack/react-simple-icons";
import { TopBar } from "@/components/layout/top-bar";
import { SiLangchain } from "react-icons/si";
import { AG2Icon, MastraIcon } from "@/lib/icons/custom-icons";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <TopBar />
      <DocsLayout
        tree={source.pageTree}
        {...baseOptions}
        sidebar={{
          hideSearch: true,
          banner: (
            <SubdocsMenu
              options={[
                {
                  title: "CopilotKit Overview",
                  description: "The Agentic Application Framework Overview",
                  url: "/",
                  icon: <RocketIcon className="w-4 h-4" />,
                  bgGradient:
                    "bg-gradient-to-b from-blue-700 to-blue-400 text-blue-100",
                  selectedStyle: "ring-blue-500/70 ring-2 rounded-sm",
                },
                {
                  title: "Quickstart",
                  description: "Get started with CopilotKit quickly",
                  url: "/quickstart",
                  icon: <RocketIcon className="w-4 h-4" />,
                  bgGradient:
                    "bg-gradient-to-b from-green-700 to-green-400 text-green-100",
                  selectedStyle: "ring-green-500/70 ring-2 rounded-sm",
                },
                {
                  title: "API Reference",
                  description: "API Reference",
                  url: "/reference",
                  icon: <TerminalIcon className="w-4 h-4" />,
                  bgGradient:
                    "bg-gradient-to-b from-teal-700 to-teal-400 text-teal-100",
                  selectedStyle: "ring-teal-500/70 ring-2 rounded-sm",
                },
                {
                  type: 'separator', // Add this line for a separator
                },
                {
                  title: "Connect to an LLM",
                  description: "Connect directly to an LLM",
                  url: "/direct-to-llm",
                  icon: <TerminalIcon className="w-4 h-4" />,
                  bgGradient:
                    "bg-gradient-to-b from-blue-700 to-blue-400 text-blue-100",
                  selectedStyle: "ring-blue-500/70 ring-2 rounded-sm",
                },
                {
                  title: "Use an Agent Framework",
                  options: [
                    {
                      title: "AutoGen2",
                      description: "Build with AG2 Agents",
                      url: "/ag2",
                      icon: <AG2Icon className="w-4 h-4" />,
                      bgGradient:
                        "bg-gradient-to-b from-indigo-700 to-indigo-400 text-indigo-100",
                      selectedStyle: "ring-indigo-500/70 ring-2 rounded-sm",
                    },
                    {
                      title: "LangGraph",
                      description: "Build with LangGraph",
                      url: "/coagents",
                      icon: <SiLangchain className="w-4 h-4" />,
                      bgGradient:
                        "bg-gradient-to-b from-purple-700 to-purple-400 text-purple-100",
                      selectedStyle: "ring-purple-500/70 ring-2 rounded-sm",
                    },
                    {
                      title: "CrewAI Crews",
                      description: "Build with CrewAI Crews",
                      url: "/crewai-crews",
                      icon: <SiCrewai className="w-4 h-4" />,
                      bgGradient:
                        "bg-gradient-to-b from-orange-700 to-orange-400 text-orange-100",
                      selectedStyle: "ring-orange-500/70 ring-2 rounded-sm",
                    },
                    {
                      title: "CrewAI Flows",
                      description: "Build with CrewAI Flows",
                      url: "/crewai-flows",
                      icon: <SiCrewai className="w-4 h-4" />,
                      bgGradient:
                        "bg-gradient-to-b from-yellow-700 to-yellow-400 text-yellow-100",
                      selectedStyle: "ring-yellow-500/70 ring-2 rounded-sm",
                    },
                    {
                      title: "Mastra",
                      description: "Build with Mastra Agents",
                      url: "/mastra",
                      icon: <MastraIcon className="w-4 h-4" />,
                      bgGradient:
                        "bg-gradient-to-b from-gray-700 to-gray-400 text-gray-100",
                      selectedStyle: "ring-gray-500/70 ring-2 rounded-sm",
                    },
                  ],
                },
                // {
                //   title: "Chat with our docs",
                //   description: "Chat with our docs",
                //   url: "https://entelligence.ai/CopilotKit&CopilotKit",
                //   icon: <CircleArrowOutUpRight className="w-4 h-4" />,
                //   bgGradient:
                //     "bg-gradient-to-b from-purple-700 to-purple-400 text-purple-100",
                //   selectedBorder: "ring-teal-500/70",
                // },
              ]}
            />
          ),
        }}
      >
        {children}
      </DocsLayout>
    </>
  );
}
