import React, { useEffect, useState } from "react";
import { getEvents } from "../../services/eventsService";

import { NavLink } from "react-router-dom";
import EventRow from "../../components/Common/EventRow";
import { EventInterface } from "../../types/EventInterface";

const ListEvents: React.FC = () => {
  const [events, setEvents] = useState<EventInterface[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const data = await getEvents();
      setEvents(data);
      setLoading(false);
    };

    fetchEvents();
  }, []);

  const handleEventDeleted = (id: number) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
  };

  return (
    <div className="flex flex-col">
      <div className="my-4 flex justify-end ">
        <NavLink to="/events/create">
          <button
            className={`w-full rounded-md px-4 py-2 text-white bg-black focus:bg-gray-600 block`}
          >
            Create Event
          </button>
        </NavLink>
      </div>
      <div className="overflow-x-auto pb-4">
        <div className="min-w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg border-gray-300">
            {!loading && events.length > 0 && (
              <table className="table-auto min-w-full rounded-xl">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-2">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          className="w-5 h-5 border border-gray-300 rounded-md"
                        />
                      </div>
                    </th>
                    <th className="p-2 text-left text-sm font-semibold text-gray-900">
                      Event Name
                    </th>
                    <th className="p-2 text-left text-sm font-semibold text-gray-900">
                      Start Date
                    </th>
                    <th className="p-2 text-left text-sm font-semibold text-gray-900">
                      Location
                    </th>
                    <th className="p-2 text-left text-sm font-semibold text-gray-900">
                      Budget
                    </th>
                    <th className="p-2 text-left text-sm font-semibold text-gray-900">
                      Status
                    </th>
                    <th className="p-2 text-left text-sm font-semibold text-gray-900">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  {events.map((event) => (
                    <tr
                      className="bg-white transition-all duration-500 hover:bg-gray-50"
                      key={event.id}
                    >
                      <td className="p-2">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            className="w-5 h-5 border border-gray-300 rounded-md"
                          />
                        </div>
                      </td>
                      <td className="p-2 text-sm text-gray-900">
                        {event.title}
                      </td>
                      <td className="p-2 text-sm text-gray-900">
                        {new Date(event.start_date).toLocaleDateString()}
                      </td>
                      <td className="p-2 text-sm text-gray-900">
                        {event.location}
                      </td>
                      <td className="p-2 text-sm text-gray-900">
                        {event.price}
                      </td>
                      <td className="p-2 text-sm text-gray-900">
                        <div
                          className="py-1.5 px-2.5 bg-emerald-50 rounded-md flex 
                      justify-center w-20 items-center gap-1"
                        >
                          <svg
                            width={5}
                            height={6}
                            viewBox="0 0 5 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="2.5" cy={3} r="2.5" fill="#059669" />
                          </svg>
                          <span
                            className={`font-medium text-xs ${
                              event.status === "scheduled"
                                ? "text-yellow-500"
                                : "text-emerald-500"
                            }`}
                          >
                            {event.status}
                          </span>
                        </div>
                      </td>
                      <EventRow
                        key={event.id}
                        event={event}
                        onEventDeleted={handleEventDeleted}
                      />
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            {loading && (
              <div className="text-2xl font-bold text-center py-2 font-serif ">
                Loading...
              </div>
            )}

            {!loading && events.length == 0 && (
              <div className="text-xl font-semibold text-center py-2 font-serif ">
                There are no events available.
                <p className="text-sm">Please create one!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListEvents;
