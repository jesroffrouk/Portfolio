import React from "react";
import { CalendarIcon, HomeIcon, MailIcon,  FolderKanban , NotebookPen } from "lucide-react";

// adjust these imports to relative paths if you're not using shadcn/ui
import { buttonVariants } from "../ui/button";
import { Separator } from "../ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { cn } from "@/lib/utils";
import { Dock,DockIcon } from "../ui/dock";

// ---- ICONS ----
const Icons = {
  calendar: (props) => <CalendarIcon {...props} />,
  email: (props) => <MailIcon {...props} />,
  linkedin: (props) => (
  <svg
    fill="currentColor"
    width="800px"
    height="800px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    {...props}
  >
    <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z" />
  </svg>
  ),
  x: (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="CurrentColor" viewBox="0 0 640 640" {...props}>
    <path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z" />
  </svg>
  ),
  youtube: (props) => (
    <svg viewBox="0 0 32 32" {...props}>
      <path d="M29.41,9.26a3.5,3.5..." />
    </svg>
  ),
  github: (props) => (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    stroke="#000000"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    {...props}
  >
    <path d="m5.75 14.25s-.5-2 .5-3c0 0-2 0-3.5-1.5s-1-4.5 0-5.5c-.5-1.5.5-2.5.5-2.5s1.5 0 2.5 1c1-.5 3.5-.5 4.5 0 1-1 2.5-1 2.5-1s1 1 .5 2.5c1 1 1.5 4 0 5.5s-3.5 1.5-3.5 1.5c1 1 .5 3 .5 3" />
    <path d="m5.25 13.75c-1.5.5-3-.5-3.5-1" />
  </svg>
  ),
};

// ---- DATA ----
const DATA = {
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/projects", icon: FolderKanban, label: "Projects" },
    { href: "https://blog-jesroff.vercel.app/", icon: NotebookPen, label: "Blogs" },
  ],
  contact: {
    social: {
      GitHub: { name: "GitHub", url: "https://github.com/jesroffrouk", icon: Icons.github },
      LinkedIn: { name: "LinkedIn", url: "https://linkedin.com/in/jogendra-padhan-1349802b1", icon: Icons.linkedin },
      X: { name: "X", url: "https://x.com/JesroffR", icon: Icons.x },
      email: { name: "Send Email", url: "mailto:dragonsj93@gmail.com", icon: Icons.email },
    },
  },
};

// ---- COMPONENT ----
export function DockDemo() {
  return (
    <div className='pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-8 flex origin-bottom h-full max-h-14' 

    >
    <div className="w-max p-2 z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1"
    >
      <TooltipProvider>
        <Dock direction="middle">
          {DATA.navbar.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: "link", size: "icon" }),
                      "size-12 rounded-full"
                    )}
                  >
                    <item.icon className="size-4 text-outline1" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full" />
          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={social.url}
                    aria-label={social.name}
                    className={cn(
                      buttonVariants({ variant: "link", size: "icon" }),
                      "size-12 rounded-full"
                    )}
                  >
                    <social.icon className="size-4 text-outline1" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        </Dock>
      </TooltipProvider>
    </div>
</div>
  );
}
