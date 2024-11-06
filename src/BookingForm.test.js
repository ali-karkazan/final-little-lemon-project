// BookingForm.test.js
import { render, screen } from '@testing-library/react'; // Import the necessary utilities
import { initializeTimes } from './timeFunctions'; // Import the initializeTimes function
import BookingForm from './BookingForm'; // Import the component you're testing
// timeFunctions.test.js
import { updateTimes } from './timeFunctions'; // Import the updateTimes function


test('renders static text in the BookingForm', () => {
    // Render the BookingForm component
    render(<BookingForm />);

    // Use getByText to search for the static text you're looking for
    const headingElement = screen.getByText('Reserve Table');

    // Assert that the static text is in the document
    expect(headingElement).toBeInTheDocument();
});

// timeFunctions.test.js


test('initializeTimes should return correct initial times', () => {
    // Call the function (you can replace this with any mock data if needed)
    const times = initializeTimes();

    // Assert that the times returned are what you expect
    expect(times).toEqual([
        '12:00 PM',
        '01:00 PM',
        '02:00 PM',
        '03:00 PM',
        '04:00 PM',
    ]);
});

// Assert that the updated times match the expected result
expect(updatedTimes).toEqual(['12:00 PM', '01:00 PM', '02:00 PM']); // Example updated times
});