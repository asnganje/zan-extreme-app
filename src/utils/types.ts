import { LucideIcon } from "lucide-react";

export type Contact = {
  id:number;
  icon: LucideIcon
  info:string;
}

export type sIcons = {
  id:number;
  href:string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color:string;
} 

export type Service = {
  id: number;
  description: string;
}

export type DashboardItems = {
  id: number;
  heading:string;
  text:string;
  image: string;
  alt?:string;
}

export interface RService {
  id: number;
  img:string;
  heading:string;
  content:string;
}