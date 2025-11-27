"use client";
import { cn } from "@/lib/utils";
import { Blocks, Check, CircleDot, Loader, Timer, Users } from "lucide-react";
import Image from "next/image";
import Headline from "./Headline";

interface ProjectCardProps {
  index: number;
  title: string;
  description: string;
  purpose: string;
  techStack: string[];
  status: {
    finished: boolean;
    message: string;
  };
  duration: string;
  contributors: string;
  project_url: string;
  image_url: string;
}

const BASE_CARD_STYLES =
  "backdrop-blur-xl bg-gradient-to-br from-primary-500/30 to-primary-600/10 border border-light/30 shadow-card rounded-2xl transition-all duration-300 hover:bg-primary-500/40 hover:shadow-project-card-hover hover:border-primary-400/30 lg:left-1/2 lg:right-1/2 lg:-translate-x-4/5 hover:-translate-y-2.5 hover:z-20";

const BASE_TEXT_STYLES = "text-xs text-light/90 text-left";
const BASE_IMAGE_STYLES = "rounded-xl shadow-md filter brightness-80";

export default function ProjectCard({
  index,
  title,
  description,
  purpose,
  techStack,
  status,
  duration,
  contributors,
  project_url,
  image_url,
}: ProjectCardProps) {
  return (
    <>
      <a href={project_url} target="_blank" className="shrink-0">
        <div
          className={cn(
            BASE_CARD_STYLES,
            "project w-[500px] h-[300px] absolute flex-col gap-y-1 p-4 hidden lg:flex hover:z-10 "
          )}
          style={{
            marginLeft: `${index * 60}px`,
            top: `${index * 60 + 90}px`,
          }}
        >
          <div className="flex items-center gap-x-3 min-h-1/4">
            <Headline
              level={2}
              className="text-xl font-bold shrink-0  font-inter"
            >
              {title.toUpperCase()}
            </Headline>
            <p className={BASE_TEXT_STYLES}>{description}</p>
          </div>
          <div className="flex items-center justify-between gap-x-2 h-full w-full ">
            <div className="flex flex-col gap-y-3 items-start w-full pl-1">
              <span className="flex items-center gap-x-2">
                <Blocks size={14} className="text-light/90 shrink-0" />
                <p className="font-bold text-xs text-light/90 text-left ">
                  {techStack.map((t, i) =>
                    i + 1 == techStack.length ? `${t}.` : `${t}, `
                  )}
                </p>
              </span>
              <span className="flex items-center gap-x-2">
                <CircleDot size={14} className="text-light/90 shrink-0" />
                <p className="font-medium  text-xs text-light/90 text-left ">
                  {purpose}
                </p>
              </span>
              <span className="flex items-center gap-x-2">
                <Timer size={14} className="text-light/90 shrink-0" />
                <p className="font-medium text-xs text-light/90 text-left">
                  {duration}
                </p>
              </span>
              <span className="flex items-center gap-x-2">
                {status.finished ? (
                  <Check size={14} className="text-light/90 shrink-0" />
                ) : (
                  <Loader size={14} className="text-light/90 shrink-0" />
                )}

                <p className="font-medium text-xs text-light/90 text-left ">
                  {status.message}
                </p>
              </span>
              <span className="flex items-center gap-x-2">
                <Users size={14} className="text-light/90 shrink-0" />
                <p className="font-medium text-xs text-light/90 text-left">
                  {contributors}
                </p>
              </span>
            </div>
            <div className="flex justify-center items-center h-full">
              <Image
                src={image_url}
                alt="Project Image"
                width={250}
                height={250}
                className={BASE_IMAGE_STYLES}
              />
            </div>
          </div>
        </div>
      </a>
      {/* mobile adaptation */}
      <div
        className={cn(
          BASE_CARD_STYLES,
          "project w-full  h-[300px] absolute flex-col p-4 flex lg:hidden shrink-0"
        )}
        style={{ top: `${index * 60 + 90}px` }}
      >
        <div className="flex flex-col gap-y-4 ">
          <Headline level={2} className="text-xl font-bold shrink-0 self-start font-inter text-light">
            {title}
          </Headline>
          <p className="text-xs pb-1 text-secondary-text-color-light text-left ">
            {description}
          </p>
        </div>
        <div className="flex items-center justify-between gap-x-2  h-full w-full ">
          <div className="flex flex-col gap-y-3 items-start w-full ">
            <span className="flex items-center gap-x-2">
              <Blocks size={14} className="text-secondary-text-color-light" />
              <p className="font-bold text-xs text-light/90 text-left ">
                {techStack.map((t, i) =>
                  i + 1 == techStack.length ? `${t}.` : `${t}, `
                )}
              </p>
            </span>
            <span className="flex items-center gap-x-2">
              <CircleDot
                size={14}
                className="text-secondary-text-color-light"
              />
              <p className="font-medium  text-xs text-light/90 text-left ">
                {purpose}
              </p>
            </span>
            <span className="flex items-center gap-x-2">
              <Timer size={14} className="text-secondary-text-color-light" />
              <p className="font-medium text-xs text-light/90 text-left">
                {duration}
              </p>
            </span>
            <span className="flex items-center gap-x-2">
              {status.finished ? (
                <Check
                  size={14}
                  className="text-secondary-text-color-light shrink-0"
                />
              ) : (
                <Loader
                  size={14}
                  className="text-secondary-text-color-light shrink-0"
                />
              )}
              <p className="font-medium text-xs text-light/90 text-left ">
                {status.message}
              </p>
            </span>
            <span className="flex items-center gap-x-2">
              <Users
                size={14}
                className="text-secondary-text-color-light shrink-0"
              />
              <p className="font-medium text-xs text-light/90 text-left">
                {contributors}
              </p>
            </span>
          </div>
          <div className="flex justify-center items-center ">
            <Image
              src={image_url}
              width={200}
              height={200}
              alt="Project Image"
              className={BASE_IMAGE_STYLES}
            />
          </div>
        </div>
      </div>
    </>
  );
}
