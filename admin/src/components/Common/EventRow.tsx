import React from "react";
import { NavLink } from "react-router-dom";
import {
  PencilSquareIcon,
  TrashIcon,
  ViewfinderCircleIcon,
} from "@heroicons/react/16/solid";
import { deleteEvent } from "../../services/eventsService";

interface Event {
  id: number;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  location: string;
  price: number;
  capacity: number;
  attendees: string[];
  status: string;
}

interface EventRowProps {
  event: Event;
  onEventDeleted?: (id: number) => void;
}

const EventRow: React.FC<EventRowProps> = ({ event, onEventDeleted }) => {
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        await deleteEvent(event.id);
        alert("Event deleted successfully!");
        if (onEventDeleted) {
          onEventDeleted(event.id);
        }
      } catch (error) {
        console.error("Error deleting event:", error);
        alert("Failed to delete event. Please try again.");
      }
    }
  };

  return (
    <td className="flex p-2 items-center gap-2">
      <NavLink to={`/events/${event.id}`}>
        <ViewfinderCircleIcon className="h-5 w-5 cursor-pointer text-emerald-500" />
      </NavLink>
      <NavLink to={`/events/${event.id}/edit`}>
        <PencilSquareIcon className="h-5 w-5 cursor-pointer text-gray-700" />
      </NavLink>
      <TrashIcon
        className="h-5 w-5 cursor-pointer text-red-500"
        onClick={handleDelete}
      />
    </td>
  );
};

export default EventRow;
