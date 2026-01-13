import { Link } from 'react-router-dom';

export default function EventCard({event}) {
  return (
    <div style={{border:'1px solid #ccc', padding:10, margin:10, borderRadius:6}}>
      <h3>{event.title}</h3>
      <p>{event.date} — {event.location}</p>
      <p>{event.description}</p>
      <Link to={`/events/${event.id}`}>Details</Link>
    </div>
  );
}
