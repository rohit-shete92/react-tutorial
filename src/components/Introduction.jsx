import React from 'react';
import { useNavigate } from 'react-router-dom';
function Introduction() {
  const navigate = useNavigate(); 
  const handleClick = () => {
      navigate('/setup');
  };
  return (
    <div className="container mt-5">
      <section className="mb-5">
        <h2 className="h4">What is React?</h2>
        <p>
          React is a popular JavaScript library for building user interfaces, particularly for single-page
          applications. It allows developers to create reusable UI components that manage their own state.
        </p>
        <ul>
          <li>Developed and maintained by Facebook</li>
          <li>Open-source and widely used in web development</li>
          <li>Focuses on a component-based architecture</li>
        </ul>
      </section>

      <section className="mb-5">
        <h2 className="h4">Why We Use React?</h2>
        <p>React offers several advantages that make it a preferred choice for developers:</p>
        <ul>
          <li><strong>Component-Based:</strong> Build encapsulated components that manage their own state.</li>
          <li><strong>Virtual DOM:</strong> Efficient updates and rendering with a virtual representation of the DOM.</li>
          <li><strong>Reusable Components:</strong> Write once and reuse components across the application.</li>
          <li><strong>Large Ecosystem:</strong> Extensive libraries and tools to enhance development.</li>
          <li><strong>Strong Community Support:</strong> A vast community for learning and collaboration.</li>
        </ul>
      </section>

      <section>
        <h2 className="h4">Extra Points</h2>
        <p>Here are some additional reasons why React stands out:</p>
        <ul>
          <li>Supports server-side rendering for better SEO.</li>
          <li>Works well with TypeScript for type safety.</li>
          <li>Flexible and can be integrated with other frameworks.</li>
          <li>Rich developer tools for debugging and performance monitoring.</li>
          <li>Widely adopted by companies such as Facebook, Instagram, and Airbnb.</li>
        </ul>
      </section>
      <button className='btn btn-light px-5 fw-bold d-block w-100 m-2' onClick={handleClick}>Click To Next</button>
    </div>
  );
}

export default Introduction;
