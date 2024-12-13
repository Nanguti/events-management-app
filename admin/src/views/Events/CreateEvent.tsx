import React, { useState } from "react";
import { createEvent } from "../../services/eventsService";

const CreateEvent: React.FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    agenda: "",
    category: "",
    start_date: "",
    end_date: "",
    location: "",
    price: 0,
    max_attendees: 0,
    status: "scheduled",
    organizer_name: "",
    event_image: "",
    registration_link: "",
    tags: "",
    contact_email: "",
    sponsors: "",
    social_links: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createEvent(formData);
      alert("Event created successfully!");
      setFormData({
        title: "",
        description: "",
        agenda: "",
        category: "",
        start_date: "",
        end_date: "",
        location: "",
        price: 0,
        max_attendees: 0,
        status: "scheduled",
        organizer_name: "",
        event_image: "",
        registration_link: "",
        tags: "",
        contact_email: "",
        sponsors: "",
        social_links: "",
      });
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 max-w-4xl mx-auto border rounded-md shadow-sm bg-white/70"
    >
      <h2 className="text-lg font-bold mb-6">Create New Event</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Column */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />

          <label className="block text-sm font-medium text-gray-700 mt-4">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          ></textarea>

          <label className="block text-sm font-medium text-gray-700 mt-4">
            Agenda
          </label>
          <textarea
            name="agenda"
            value={formData.agenda}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md w-full"
          ></textarea>

          <label className="block text-sm font-medium text-gray-700 mt-4">
            Category
          </label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md w-full"
          />

          <label className="block text-sm font-medium text-gray-700 mt-4">
            Organizer Name
          </label>
          <input
            type="text"
            name="organizer_name"
            value={formData.organizer_name}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>

        {/* Second Column */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Start Date
          </label>
          <input
            type="datetime-local"
            name="start_date"
            value={formData.start_date}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />

          <label className="block text-sm font-medium text-gray-700 mt-4">
            End Date
          </label>
          <input
            type="datetime-local"
            name="end_date"
            value={formData.end_date}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />

          <label className="block text-sm font-medium text-gray-700 mt-4">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />

          <label className="block text-sm font-medium text-gray-700 mt-4">
            Price
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md w-full"
          />

          <label className="block text-sm font-medium text-gray-700 mt-4">
            Max Attendees
          </label>
          <input
            type="number"
            name="max_attendees"
            value={formData.max_attendees}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
      </div>

      {/* Full-width Section */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700">Tags</label>
        <input
          type="text"
          name="tags"
          value={formData.tags}
          onChange={handleInputChange}
          className="mt-1 p-2 border rounded-md w-full"
        />

        <label className="block text-sm font-medium text-gray-700 mt-4">
          Sponsors
        </label>
        <textarea
          name="sponsors"
          value={formData.sponsors}
          onChange={handleInputChange}
          className="mt-1 p-2 border rounded-md w-full"
        ></textarea>
      </div>
      <div className=" flex justify-center ">
        <button
          type="submit"
          className="mt-6 w-1/2 py-2 px-4 bg-black text-white rounded-md hover:bg-emerald-500 "
        >
          Create An Event
        </button>
      </div>
    </form>
  );
};

export default CreateEvent;
