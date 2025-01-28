import pandas as pd
import re

class CourseRecommender:
    def __init__(self, courses_df):
        self.courses_df = courses_df
        self.courses_df['Skills'] = self.courses_df['Skills'].fillna('')

    def recommend_courses(self, field_of_interest, skills, enrolled_courses=None, num_recommendations=5):
        interest_pattern = field_of_interest.strip()
        skills_pattern = '|'.join([re.escape(skill.strip()) for skill in skills])

        matching_courses = self.courses_df[
            (self.courses_df['Category'].str.contains(interest_pattern, case=False, na=False)) |
            (self.courses_df['Sub-Category'].str.contains(interest_pattern, case=False, na=False)) |
            (self.courses_df['Skills'].str.contains(skills_pattern, case=False, na=False))
        ]

        if enrolled_courses:
            enrolled_courses_cleaned = [course.strip() for course in enrolled_courses]
            matching_courses = matching_courses[~matching_courses['Title'].isin(enrolled_courses_cleaned)]

        recommendations = matching_courses[['Title', 'URL']].head(num_recommendations)
        return recommendations