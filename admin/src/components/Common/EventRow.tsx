import React from "react";
import { NavLink } from "react-router-dom";
import {
  PencilSquareIcon,
  TrashIcon,
  ViewfinderCircleIcon,
} from "@heroicons/react/16/solid";
import { deleteEvent } from "../../services/eventsService";
import { EventInterface } from "../../types/EventInterface";

interface EventRowProps {
  event: EventInterface;
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
