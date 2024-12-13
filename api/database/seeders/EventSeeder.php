<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $events = [
            [
                'title' => 'Tech Conference 2024',
                'description' => 'An annual conference focusing on emerging technology trends.',
                'start_date' => '2024-03-01',
                'end_date' => '2024-03-03',
                'location' => 'Nairobi, Kenya',
                'organizer_name' => 'Tech Savvy Co.',
                'category' => 'Technology',
                'registration_link' => 'https://example.com/tech-conference-2024',
                'contact_email' => 'info@techsavvy.co',
                'contact_phone' => '254712345678',
                'event_image' => 'tech_conference.jpg',
                'tags' => 'tech, conference, innovation',
                'max_attendees' => 500,
                'price' => 150.00,
                'agenda' => 'Day 1: Keynote speeches; Day 2: Workshops; Day 3: Networking.',
                'sponsors' => 'Company A, Company B',
                'social_links' => json_encode(['facebook' => 'https://facebook.com/techsavvy']),
            ],
            [
                'title' => 'Health and Wellness Expo',
                'description' => 'A two-day expo focusing on health, fitness, and well-being.',
                'start_date' => '2024-05-20',
                'end_date' => '2024-05-21',
                'location' => 'Nairobi, Kenya',
                'organizer_name' => 'Wellness Group',
                'category' => 'Health',
                'registration_link' => 'https://example.com/wellness-expo',
                'contact_email' => 'contact@wellnessgroup.com',
                'contact_phone' => '254722987654',
                'event_image' => 'wellness_expo.jpg',
                'tags' => 'health, wellness, fitness',
                'max_attendees' => 300,
                'price' => 100.00,
                'agenda' => 'Day 1: Health talks; Day 2: Fitness demos and stalls.',
                'sponsors' => 'Health Co., Gym Co.',
                'social_links' => json_encode(['twitter' => 'https://twitter.com/wellnessgroup']),
            ],
            [
                'title' => 'Kenya Music Festival 2024',
                'description' => 'A week-long music festival showcasing Kenya\'s top music talent.',
                'start_date' => '2024-07-10',
                'end_date' => '2024-07-17',
                'location' => 'Mombasa, Kenya',
                'organizer_name' => 'Kenya Arts Council',
                'category' => 'Music',
                'registration_link' => 'https://example.com/kenya-music-festival',
                'contact_email' => 'info@kenyaartscouncil.org',
                'contact_phone' => '254700123456',
                'event_image' => 'music_festival.jpg',
                'tags' => 'music, festival, culture',
                'max_attendees' => 1000,
                'price' => 200.00,
                'agenda' => 'Daily music performances, artist meet-and-greets, and workshops.',
                'sponsors' => 'Kenya Airways, Safaricom',
                'social_links' => json_encode([
                    'facebook' => 'https://facebook.com/kenyamusicfestival'
                ]),
            ],
            [
                'title' => 'Nairobi Fashion Week 2024',
                'description' => 'A premier event showcasing Africa\'s 
                best fashion designers and models.',
                'start_date' => '2024-09-12',
                'end_date' => '2024-09-14',
                'location' => 'Nairobi, Kenya',
                'organizer_name' => 'Fashion Africa',
                'category' => 'Fashion',
                'registration_link' => 'https://example.com/nairobi-fashion-week',
                'contact_email' => 'info@fashionafrica.co.ke',
                'contact_phone' => '254733987654',
                'event_image' => 'fashion_week.jpg',
                'tags' => 'fashion, design, runway',
                'max_attendees' => 700,
                'price' => 250.00,
                'agenda' => 'Runway shows, designer showcases, and after-party.',
                'sponsors' => 'Coca-Cola, Nike, Safaricom',
                'social_links' => json_encode([
                    'twitter' => 'https://twitter.com/nairobi_fashion'
                ]),
            ],
            [
                'title' => 'African Startups Summit 2024',
                'description' => 'A summit bringing together African
                 entrepreneurs to discuss innovation and investment.',
                'start_date' => '2024-04-05',
                'end_date' => '2024-04-06',
                'location' => 'Nairobi, Kenya',
                'organizer_name' => 'Startup Africa',
                'category' => 'Business',
                'registration_link' => 'https://example.com/african-startups-summit',
                'contact_email' => 'info@startupafrica.com',
                'contact_phone' => '254700123789',
                'event_image' => 'startups_summit.jpg',
                'tags' => 'startups, business, innovation',
                'max_attendees' => 400,
                'price' => 180.00,
                'agenda' => 'Panels, networking events, and investor matchmaking.',
                'sponsors' => 'Standard Chartered, Google',
                'social_links' =>
                json_encode(['facebook' => 'https://facebook.com/startupafrica']),
            ],
            [
                'title' => 'Kenya Food Festival 2024',
                'description' => 'A gastronomic event featuring 
                Kenya\'s diverse cuisine and food culture.',
                'start_date' => '2024-06-18',
                'end_date' => '2024-06-20',
                'location' => 'Nairobi, Kenya',
                'organizer_name' => 'Kenya Tourism Board',
                'category' => 'Food',
                'registration_link' => 'https://example.com/kenya-food-festival',
                'contact_email' => 'info@kenyatourismboard.co.ke',
                'contact_phone' => '254701234567',
                'event_image' => 'food_festival.jpg',
                'tags' => 'food, festival, culture',
                'max_attendees' => 600,
                'price' => 120.00,
                'agenda' => 'Food stalls, live cooking demonstrations, and food workshops.',
                'sponsors' => 'Kenya Breweries, Unga Limited',
                'social_links' => json_encode([
                    'instagram' => 'https://instagram.com/kenyafoodfestival'
                ]),
            ],
            [
                'title' => 'Business Networking Dinner 2024',
                'description' => 'An exclusive networking event for business professionals in Nairobi.',
                'start_date' => '2024-08-15',
                'end_date' => '2024-08-15',
                'location' => 'Nairobi, Kenya',
                'organizer_name' => 'Nairobi Chamber of Commerce',
                'category' => 'Business',
                'registration_link' => 'https://example.com/business-networking-dinner',
                'contact_email' => 'events@nairobi-chamber.co.ke',
                'contact_phone' => '254721234890',
                'event_image' => 'business_dinner.jpg',
                'tags' => 'business, networking, dinner',
                'max_attendees' => 150,
                'price' => 100.00,
                'agenda' => 'Dinner, keynote speaker, and networking opportunities.',
                'sponsors' => 'KCB Bank, Deloitte',
                'social_links' => json_encode([
                    'linkedin' => 'https://linkedin.com/company/nairobi-chamber'
                ]),
            ],
            [
                'title' => 'Nairobi Art Exhibition 2024',
                'description' => 'A celebration of African art with local and international artists.',
                'start_date' => '2024-10-10',
                'end_date' => '2024-10-14',
                'location' => 'Nairobi, Kenya',
                'organizer_name' => 'Nairobi Art Center',
                'category' => 'Art',
                'registration_link' => 'https://example.com/nairobi-art-exhibition',
                'contact_email' => 'info@nairobiartcenter.com',
                'contact_phone' => '254701234567',
                'event_image' => 'art_exhibition.jpg',
                'tags' => 'art, exhibition, culture',
                'max_attendees' => 500,
                'price' => 50.00,
                'agenda' => 'Art exhibitions, artist talks, and workshops.',
                'sponsors' => 'British Council, Nairobi Gallery',
                'social_links' => json_encode([
                    'facebook' => 'https://facebook.com/nairobiartcenter'
                ]),
            ],
            [
                'title' => 'Kenya Literature Festival 2024',
                'description' => 'A festival celebrating literature and storytelling from across Africa.',
                'start_date' => '2024-11-05',
                'end_date' => '2024-11-07',
                'location' => 'Nairobi, Kenya',
                'organizer_name' => 'Kenya Writers Association',
                'category' => 'Literature',
                'registration_link' => 'https://example.com/kenya-literature-festival',
                'contact_email' => 'info@kenyawriters.org',
                'contact_phone' => '254710987654',
                'event_image' => 'literature_festival.jpg',
                'tags' => 'literature, books, storytelling',
                'max_attendees' => 350,
                'price' => 80.00,
                'agenda' => 'Book signings, panel discussions, and author meet-ups.',
                'sponsors' => 'Macmillan, Safaricom',
                'social_links' => json_encode([
                    'instagram' => 'https://instagram.com/kenyalitfest'
                ]),
            ],
        ];

        // Insert the events into the database
        DB::table('events')->insert($events);
    }
}
