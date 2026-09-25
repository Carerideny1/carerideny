import {getChatGPTUser} from "@/app/chatgpt-auth";
// Explicit server-side allowlist for the owner of this review website.
const staffEmails=new Set(["ali.mohsin12340@gmail.com"]);
export function isStaffEmail(email:string){return staffEmails.has(email.trim().toLowerCase());}
export async function isStaff(){const user=await getChatGPTUser();return !!user&&isStaffEmail(user.email);}
