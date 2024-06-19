import React, { useState, useEffect } from 'react'

interface Review {
  author_name: string
  rating: number
  relative_time_description: string
  text: string
}

interface PlaceDetails {
  name: string
  reviews: Review[]
}

interface Props {
  placeId: string
  apiKey: string
}

const GoogleReviews: React.FC<Props> = ({ placeId, apiKey }) => {
  const [reviews, setReviews] = useState<Review[]>([])

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,reviews&key=${apiKey}`,
        )
        const data = await response.json()
        if (data.result.reviews) {
          setReviews(data.result.reviews)
        }
      } catch (error) {
        console.error('Error fetching Google reviews:', error)
      }
    }

    fetchReviews()
  }, [placeId, apiKey])

  return (
    <div>
      <h2>Google Reviews</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <strong>{review.author_name}</strong> - {review.rating} stars
            <br />
            <em>{review.relative_time_description}</em>
            <br />
            <p>{review.text}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GoogleReviews
