# Problem-Solving Documentation

## Problem Definition
Help users find neighborhoods that fit their lifestyle using real data and a matching algorithm.

## Research & Hypotheses
- Users care about safety, affordability, amenities, walkability, and schools.
- Existing solutions lack personalization or are paywalled.

## Algorithm Design Rationale
- Weighted scoring based on user preferences and neighborhood attributes.
- Simple, explainable, and easy to extend.

## Data Challenges
- Limited access to real APIs, so MVP uses mock data.
- Data normalization and scoring handled in backend.

## Testing Approach
- Manual testing via frontend form and API endpoints.
- Edge cases: all-zero preferences, extreme values, missing data.

## Trade-offs & Limitations
- Mock data for MVP; real data can be integrated later.
- Simple scoring, not ML-based.

## Future Improvements
- Integrate real APIs (Census, WalkScore, etc.)
- Add user accounts and save preferences.
- Improve algorithm with more factors and feedback loop. 