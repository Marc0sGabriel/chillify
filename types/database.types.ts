export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      songs: {
        Row: {
          artist: string | null
          created_at: string
          id: string
          song_cover: string | null
          song_link: string | null
          title: string | null
        }
        Insert: {
          artist?: string | null
          created_at?: string
          id?: string
          song_cover?: string | null
          song_link?: string | null
          title?: string | null
        }
        Update: {
          artist?: string | null
          created_at?: string
          id?: string
          song_cover?: string | null
          song_link?: string | null
          title?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
