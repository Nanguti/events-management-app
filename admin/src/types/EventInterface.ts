export interface EventInterface {
  id?: number;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  location: string;
  organizer_name: string;
  category: string;
  registration_link?: string | null;
  contact_email?: string | null;
  contact_phone?: string | null;
  event_image?: string | null;
  tags?: string | null;
  max_attendees?: number | null;
  price?: number | null;
  agenda?: string | null;
  sponsors?: string | null;
  social_links?: Record<string, string> | null;
  created_at?: string | null;
  updated_at?: string | null;
  status: "scheduled" | "cancelled" | "completed";
}
