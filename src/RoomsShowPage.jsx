import { useLoaderData } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import { useState, useEffect } from 'react';
import './RoomShowPage.css';
import axios from 'axios';

export function RoomsShowPage() {
  const room = useLoaderData(); // Get the room data
  const [ratings, setRatings] = useState({});
  const [editingReviewId, setEditingReviewId] = useState(null); // Track which review is being edited

  useEffect(() => {
    const initialRatings = {};
    room.reviews.forEach(review => {
      initialRatings[review.id] = review.rating !== null && review.rating !== undefined ? review.rating : 0;
    });
    setRatings(initialRatings);
  }, [room.reviews]);

  const handleRatingChange = (reviewId, newRating) => {
    setRatings(prevRatings => ({
      ...prevRatings,
      [reviewId]: newRating
    }));
  };

  const handleEdit = (reviewId) => {
    setEditingReviewId(reviewId); // Set the review to edit
  };

  const handleSubmit = (event, reviewId) => {
    event.preventDefault();
    
    const params = {
      room_id: event.target.room_id.value,
      rating: ratings[reviewId],
      comment: event.target.comment.value,
    };
    
    axios.post('http://localhost:3000/reviews.json', params)
      .then((response) => { 
        console.log("Response from API:", response.data);
        setEditingReviewId(null); // Reset editing mode after submission
      })
      .catch(error => {
        console.error('Error submitting ratings:', error);
      });
  };

  return (
    <div>
      <h1>Room Details</h1>
      <img src={room.room_images[0]?.url} alt="Room" />
      <h2>Address: {room.address}</h2>
      <h3>City: {room.city}</h3>
      <h3>State: {room.state}</h3>
      <h3>Price: ${room.price}</h3>
      <p>Description: {room.description}</p>
      <h4>Home Details</h4>
      <p>Home Type: {room.home_type}</p>
      <p>Room Type: {room.room_type}</p>
      <p>Total Occupancy: {room.total_occupancy}</p>
      <p>Total Bedrooms: {room.total_bedrooms}</p>
      <p>Total Bathrooms: {room.total_bathrooms}</p>
      <button>Reserve Home</button>
      
      <div className='reviews'>
        <h1>Reviews:</h1>
        {room.reviews.map((review) => (
          <div key={review.id}>
            <h2>Review ID: {review.id}</h2>
            <ReactStars 
              count={5}
              value={ratings[review.id]} // Display the current rating
              edit={editingReviewId === review.id} // Enable editing only if this review is being edited
              onChange={(newRating) => handleRatingChange(review.id, newRating)} 
              size={24}
              activeColor="#ffd700"
            />
            <form onSubmit={(event) => handleSubmit(event, review.id)}>
              <div> Room ID:
                <input type='text' name='room_id' defaultValue={room.id} readOnly />
              </div>
              <div>
                Rating:
                <input type='text' name='rating' value={ratings[review.id]} readOnly />
              </div>
              <div>
                Comment: <input type='text' name='comment' defaultValue={review.comment || ''} />
              </div>
              {editingReviewId === review.id ? ( // Show the submit button only when editing
                <button type='submit'>Submit Ratings</button>
              ) : (
                <button type='button' onClick={() => handleEdit(review.id)}>Edit</button> // Edit button
              )}
            </form>
            <p>Comments: {review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
