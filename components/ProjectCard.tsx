"use client";
import { Project } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Blocks, Check, CircleDot, Loader, Timer, Users } from "lucide-react";
import Image from "next/image";
import Headline from "./Headline";

const BASE_CARD_STYLES =
  "backdrop-blur-xl bg-gradient-to-br from-primary-500/30 to-primary-600/10 border border-light/30 shadow-card rounded-2xl transition-all duration-300 hover:bg-primary-500/40 hover:shadow-project-card-hover hover:border-primary-400/30 lg:left-1/2 lg:right-1/2 lg:-translate-x-4/5 hover:-translate-y-2.5 hover:z-20";

const BASE_TEXT_STYLES = "text-xs text-light/90 text-left";
const BASE_IMAGE_STYLES = "rounded-xl filter brightness-80";

interface Props {
  index: number;
  project: Project;
}

export default function ProjectCard({ index, project }: Props) {
  const {
    title,
    description,
    purpose,
    techStack,
    status,
    duration,
    contributors,
    project_url,
    image_url,
  } = project;

  const Wrapper = project_url ? "a" : "div";
  const wrapperProps = project_url
    ? { href: project_url, target: "_blank", className: "shrink-0 hidden lg:block" }
    : { className: "shrink-0 hidden lg:block" };

  return (
    <>
      <Wrapper {...wrapperProps}>
        <div
          className={cn(
            BASE_CARD_STYLES,
            "project absolute flex h-[300px] w-[500px] flex-col gap-y-1 p-4 hover:z-10",
          )}
          style={{
            marginLeft: `${index * 60}px`,
            top: `${index * 60 + 90}px`,
          }}
        >
          <div className="flex min-h-1/4 items-center gap-x-3">
            <Headline level={2} className="font-inter shrink-0 text-xl font-bold">
              {title.toUpperCase()}
            </Headline>
            <p className={BASE_TEXT_STYLES}>{description}</p>
          </div>
          <div className="flex h-full w-full items-center justify-between gap-x-2">
            <div className="flex w-full flex-col items-start gap-y-3 pl-1">
              <span className="flex items-center gap-x-2">
                <Blocks size={14} className="text-light/90 shrink-0" />
                <p className="text-light/90 text-left text-xs font-bold">
                  {techStack.map((t, i) => (i + 1 == techStack.length ? `${t}.` : `${t}, `))}
                </p>
              </span>
              <span className="flex items-center gap-x-2">
                <CircleDot size={14} className="text-light/90 shrink-0" />
                <p className="text-light/90 text-left text-xs font-medium">{purpose}</p>
              </span>
              <span className="flex items-center gap-x-2">
                <Timer size={14} className="text-light/90 shrink-0" />
                <p className="text-light/90 text-left text-xs font-medium">{duration}</p>
              </span>
              <span className="flex items-center gap-x-2">
                {status.finished ? (
                  <Check size={14} className="text-light/90 shrink-0" />
                ) : (
                  <Loader size={14} className="text-light/90 shrink-0" />
                )}

                <p className="text-light/90 text-left text-xs font-medium">{status.message}</p>
              </span>
              <span className="flex items-center gap-x-2">
                <Users size={14} className="text-light/90 shrink-0" />
                <p className="text-light/90 text-left text-xs font-medium">{contributors}</p>
              </span>
            </div>
            <div className="flex h-full items-center justify-center">
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
      </Wrapper>
      {/* mobile adaptation */}
      <div
        className={cn(
          BASE_CARD_STYLES,
          "project relative flex w-full max-w-lg shrink-0 flex-col p-4 hover:z-0 hover:translate-y-0 lg:hidden",
        )}
      >
        <div className="flex flex-col gap-y-4">
          <Headline
            level={2}
            className="font-inter text-light shrink-0 self-start text-xl font-bold"
          >
            {title}
          </Headline>
          <p className="text-secondary-text-color-light pb-1 text-left text-xs">{description}</p>
        </div>
        <div className="mt-2 flex w-full items-center justify-between gap-x-2">
          <div className="flex w-full flex-col items-start gap-y-3">
            <span className="flex items-center gap-x-2">
              <Blocks size={14} className="text-secondary-text-color-light" />
              <p className="text-light/90 text-left text-xs font-bold">
                {techStack.map((t, i) => (i + 1 == techStack.length ? `${t}.` : `${t}, `))}
              </p>
            </span>
            <span className="flex items-center gap-x-2">
              <CircleDot size={14} className="text-secondary-text-color-light" />
              <p className="text-light/90 text-left text-xs font-medium">{purpose}</p>
            </span>
            <span className="flex items-center gap-x-2">
              <Timer size={14} className="text-secondary-text-color-light" />
              <p className="text-light/90 text-left text-xs font-medium">{duration}</p>
            </span>
            <span className="flex items-center gap-x-2">
              {status.finished ? (
                <Check size={14} className="text-secondary-text-color-light shrink-0" />
              ) : (
                <Loader size={14} className="text-secondary-text-color-light shrink-0" />
              )}
              <p className="text-light/90 text-left text-xs font-medium">{status.message}</p>
            </span>
            <span className="flex items-center gap-x-2">
              <Users size={14} className="text-secondary-text-color-light shrink-0" />
              <p className="text-light/90 text-left text-xs font-medium">{contributors}</p>
            </span>
          </div>
          <div className="flex shrink-0 items-center justify-center">
            <Image
              src={image_url}
              width={120}
              height={120}
              alt="Project Image"
              className={BASE_IMAGE_STYLES}
            />
          </div>
        </div>
      </div>
    </>
  );
}
