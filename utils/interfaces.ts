import { User } from "@supabase/supabase-js";

export interface IUser extends User {
    university: string
    grade: string
    major: string
}