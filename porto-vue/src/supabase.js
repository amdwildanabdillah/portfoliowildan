import { createClient } from '@supabase/supabase-js'

// 👇 GANTI INI DENGAN DATA DARI SUPABASE MAS TADI
const supabaseUrl = 'https://fqqqdodxtdhhfwbsmomw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxcXFkb2R4dGRoaGZ3YnNtb213Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc3OTQ2NzcsImV4cCI6MjA4MzM3MDY3N30.NXb9Wa8w4gr4TszwlvvTT0e2u6tORjCsYk1QB0_7rqg'

export const supabase = createClient(supabaseUrl, supabaseKey)
