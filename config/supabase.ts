import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://adcdwflubzhoodmawzxn.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkY2R3Zmx1Ynpob29kbWF3enhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ4OTA5MjEsImV4cCI6MTk5MDQ2NjkyMX0.IMc6WXxuOGSmq4DEAKW16iRoOviXEEcvoxUYg8LJ0vc"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;