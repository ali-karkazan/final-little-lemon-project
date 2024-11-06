import React from 'react';
import BookingForm from './BookingForm';

function BookingPage({ availableTimes, updateTimes }) {
    return (
        <div className="booking-page">
            <h2>Reserve Your Table</h2>
            <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
        </div>
    );
}

export default BookingPage;