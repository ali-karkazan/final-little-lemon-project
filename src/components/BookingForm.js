import React, { useState, useRef } from 'react';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: '',
        occasion: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false); // Track if form is submitted
    const timeInputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setIsSubmitted(true); // Set the form as submitted
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        if (name === 'date' && value !== '') {
            timeInputRef.current.focus();
        }
    };

    return (
        <div>
            {isSubmitted ? (
                <p>Your reservation has been confirmed!</p> // Show confirmation message
            ) : (
                <form className='booking-form' onSubmit={handleSubmit}>
                    <label>
                        Date:
                        <input
                            type="date"
                            name="date"
                            required
                            value={formData.date}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Time:
                        <input
                            ref={timeInputRef}
                            type="time"
                            name="time"
                            required
                            value={formData.time}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Number of Guests:
                        <input
                            type="number"
                            name="guests"
                            required
                            value={formData.guests}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Occasion:
                        <input
                            type="text"
                            name="occasion"
                            required
                            value={formData.occasion}
                            onChange={handleChange}
                        />
                    </label>
                    <button type="submit">Make Your Reservation</button>
                </form>
            )}
        </div>
    );
};

export default BookingForm;