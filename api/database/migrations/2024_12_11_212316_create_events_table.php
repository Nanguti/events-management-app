<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description');
            $table->dateTime('start_date');
            $table->dateTime('end_date');
            $table->string('location');
            $table->string('organizer_name');
            $table->string('category');
            $table->string('registration_link')->nullable();
            $table->string('contact_email')->nullable();
            $table->string('contact_phone')->nullable();
            $table->string('event_image')->nullable();
            $table->string('tags')->nullable(); // Comma-separated tags
            $table->integer('max_attendees')->nullable();
            $table->decimal('price', 10, 2)->nullable();
            $table->text('agenda')->nullable();
            $table->text('sponsors')->nullable(); // Could store JSON or text for simplicity
            $table->json('social_links')->nullable(); // JSON to store multiple links
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
