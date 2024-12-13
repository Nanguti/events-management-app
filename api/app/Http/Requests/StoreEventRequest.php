<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreEventRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
            'location' => 'required|string|max:255',
            'organizer_name' => 'required|string|max:255',
            'category' => 'required|string|max:100',
            'registration_link' => 'nullable|url',
            'contact_email' => 'nullable|email',
            'contact_phone' => 'nullable|string|max:20',
            'event_image' => 'nullable|string',
            'tags' => 'nullable|string',
            'max_attendees' => 'nullable|integer',
            'price' => 'nullable|numeric',
            'agenda' => 'nullable|string',
            'sponsors' => 'nullable|string',
            'social_links' => 'nullable|array',
        ];
    }
}
