import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getEventById } from "../../services/eventsService";
import { EventInterface } from "../../types/EventInterface";

const ViewEvent: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const [event, setEvent] = useState<EventInterface | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        if (!eventId) throw new Error("Event ID is missing in the URL.");
        const response = await getEventById(Number(eventId));
        setEvent(response.event);
      } catch (err) {
        console.error("Error fetching event:", err);
        setError("Failed to load event details.");
      } finally {
        setLoading(false);
      }
    };
    fetchEvent();
  }, [eventId]);

  if (loading) return <p>Loading event details...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!event) return <p>No event found.</p>;

  const leftColumn = [
    { label: "Title", value: event.title },
    { label: "Description", value: event.description },
    { label: "Category", value: event.category },
    { label: "Organizer Name", value: event.organizer_name },
    { label: "Start Date", value: new Date(event.start_date).toLocaleString() },
    { label: "End Date", value: new Date(event.end_date).toLocaleString() },
    { label: "Location", value: event.location },
    { label: "Registration Link", value: event.registration_link },
  ];

  const rightColumn = [
    { label: "Contact Email", value: event.contact_email },
    { label: "Contact Phone", value: event.contact_phone },
    { label: "Tags", value: event.tags },
    { label: "Max Attendees", value: event.max_attendees?.toString() },
    { label: "Price", value: event.price },
    { label: "Agenda", value: event.agenda },
    { label: "Sponsors", value: event.sponsors },
    {
      label: "Social Links",
      value: event.social_links ? JSON.stringify(event.social_links) : "N/A",
    },
    { label: "Status", value: event.status },
  ];

  return (
    <div className="flex space-x-4">
      {/* Left Column */}
      <div className="bg-white overflow-hidden shadow rounded-lg border mx-4 w-1/2">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Event Details
          </h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            {leftColumn.map(({ label, value }, index) => (
              <div
                key={index}
                className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt className="text-sm font-medium text-gray-500">{label}</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {value || "N/A"}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Right Column */}
      <div className="bg-white overflow-hidden shadow rounded-lg border mx-4 w-1/2">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Additional Details
          </h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            {rightColumn.map(({ label, value }, index) => (
              <div
                key={index}
                className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt className="text-sm font-medium text-gray-500">{label}</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {value || "N/A"}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ViewEvent;
