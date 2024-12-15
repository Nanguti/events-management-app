import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEventById, updateEvent } from "../../services/eventsService";
import { EventInterface } from "../../types/EventInterface";

const EditEvent: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const navigate = useNavigate();

  const [event, setEvent] = useState<EventInterface | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<EventInterface | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        if (!eventId) throw new Error("Event ID is missing in the URL.");
        const response = await getEventById(Number(eventId));
        setEvent(response.event);
        setFormData(response.event);
      } catch (err) {
        console.error("Error fetching event:", err);
        setError("Failed to load event details.");
      } finally {
        setLoading(false);
      }
    };
    fetchEvent();
  }, [eventId]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      if (prevState) {
        return {
          ...prevState,
          [name]: value,
        };
      }
      return prevState; // Handle the case when prevState is undefined
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    console.log(formData);
    e.preventDefault();
    if (formData) {
      try {
        await updateEvent(Number(eventId), formData);
        navigate(`/events/${eventId}`);
      } catch (err) {
        console.error("Error updating event:", err);
        setError("Failed to update event.");
      }
    }
  };

  if (loading) return <p>Loading event details...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!event) return <p>No event found.</p>;

  return (
    <div className="flex space-x-4">
      {/* Left Column */}
      <div className="bg-white overflow-hidden shadow rounded-lg border mx-4 w-1/2">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Edit Event Details
          </h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <form onSubmit={handleSubmit}>
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Title</dt>
                <dd className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    name="title"
                    value={formData?.title || ""}
                    onChange={handleInputChange}
                    className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 w-full p-2 border rounded"
                  />
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Description
                </dt>
                <dd className="mt-1 sm:mt-0 sm:col-span-2">
                  <textarea
                    name="description"
                    value={formData?.description || ""}
                    onChange={handleInputChange}
                    className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 w-full p-2 border rounded"
                  />
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Category</dt>
                <dd className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    name="category"
                    value={formData?.category || ""}
                    onChange={handleInputChange}
                    className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 w-full p-2 border rounded"
                  />
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Organizer Name
                </dt>
                <dd className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    name="organizer_name"
                    value={formData?.organizer_name || ""}
                    onChange={handleInputChange}
                    className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 w-full p-2 border rounded"
                  />
                </dd>
              </div>
            </dl>
          </form>
        </div>
      </div>

      {/* Right Column */}
      <div className="bg-white overflow-hidden shadow rounded-lg border mx-4 w-1/2">
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <form onSubmit={handleSubmit}>
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Start Date
                </dt>
                <dd className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="datetime-local"
                    name="start_date"
                    value={formData?.start_date || ""}
                    onChange={handleInputChange}
                    className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 w-full p-2 border rounded"
                  />
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">End Date</dt>
                <dd className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="datetime-local"
                    name="end_date"
                    value={formData?.end_date || ""}
                    onChange={handleInputChange}
                    className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 w-full p-2 border rounded"
                  />
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Location</dt>
                <dd className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    name="location"
                    value={formData?.location || ""}
                    onChange={handleInputChange}
                    className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 w-full p-2 border rounded"
                  />
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Registration Link
                </dt>
                <dd className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="url"
                    name="registration_link"
                    value={formData?.registration_link || ""}
                    onChange={handleInputChange}
                    className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 w-full p-2 border rounded"
                  />
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Contact Email
                </dt>
                <dd className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="email"
                    name="contact_email"
                    value={formData?.contact_email || ""}
                    onChange={handleInputChange}
                    className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 w-full p-2 border rounded"
                  />
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Contact Phone
                </dt>
                <dd className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="tel"
                    name="contact_phone"
                    value={formData?.contact_phone || ""}
                    onChange={handleInputChange}
                    className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 w-full p-2 border rounded"
                  />
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Tags</dt>
                <dd className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    name="tags"
                    value={formData?.tags || ""}
                    onChange={handleInputChange}
                    className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 w-full p-2 border rounded"
                  />
                </dd>
              </div>
            </dl>

            <div className=" flex justify-center mb-8 ">
              <button
                type="submit"
                className="mt-6 w-1/2 py-2 px-4 bg-black text-white rounded-md hover:bg-emerald-500 "
              >
                Update Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditEvent;
