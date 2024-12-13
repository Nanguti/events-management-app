<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    /** @use HasFactory<\Database\Factories\EventFactory> */
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'start_date',
        'end_date',
        'location',
        'organizer_name',
        'category',
        'registration_link',
        'contact_email',
        'contact_phone',
        'event_image',
        'tags',
        'max_attendees',
        'price',
        'agenda',
        'sponsors',
        'social_links',
    ];

    protected $casts = [
        'start_date' => 'datetime',
        'end_date' => 'datetime',
        'social_links' => 'array',
    ];
}
