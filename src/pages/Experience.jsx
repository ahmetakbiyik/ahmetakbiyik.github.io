import React, { useState } from 'react';

const ExperienceItem = ({ title, organization, period, details }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="card" style={{ marginBottom: 'var(--spacing-lg)' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>{title}</h3>
            <p style={{ fontSize: '1rem', fontWeight: '500', color: 'var(--color-accent)', marginBottom: '0.25rem' }}>
                {organization}
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '0.75rem' }}>
                {period}
            </p>
            {details && (
                <>
                    <button
                        onClick={() => setShowDetails(!showDetails)}
                        className="btn btn-outline"
                        style={{ fontSize: '0.85rem', padding: '0.25rem 0.75rem' }}
                    >
                        {showDetails ? 'Hide' : 'Show'} Details
                    </button>
                    {showDetails && (
                        <div style={{
                            marginTop: 'var(--spacing-md)',
                            padding: 'var(--spacing-md)',
                            background: 'var(--color-bg)',
                            borderRadius: 'var(--radius-sm)'
                        }}>
                            {Array.isArray(details) ? (
                                <ul style={{ paddingLeft: '1.25rem', listStyle: 'disc' }}>
                                    {details.map((detail, idx) => (
                                        <li key={idx} style={{ marginBottom: '0.5rem', color: 'var(--color-text-secondary)' }}>
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>{details}</p>
                            )}
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

const Experience = () => {
    const workExperience = [
        {
            title: "Quantitative UX Researcher",
            organization: "Meta",
            period: "2025 - Present, US",
            details: [
                "Led projects that informed product strategy and guided investment decisions",
                "Designed evidence-based interventions to improve user experience",
                "Conducted large-scale experiments to measure impact of product features",
                "Collaborated with cross-functional teams to translate research insights into actionable recommendations"
            ]
        },
        {
            title: "Co-founder and Survey Specialist",
            organization: "Galata Survey Research",
            period: "2023 - 2025, Turkey",
            details: [
                "Co-founded a survey research consultancy focused on delivering data-driven insights for social and political issues",
                "Designed and conducted surveys for various clients including political parties, NGOs, and media organizations",
                "Specialized in public opinion research, election polling, and social attitudes measurement",
                "Provided strategic consulting based on data analysis and research findings"
            ]
        },
        {
            title: "Research Coordinator",
            organization: "23 Talent Association",
            period: "2023 - 2025, Turkey",
            details: [
                "Led the design and implementation of research surveys to better understand youth perspectives and behavior, contributing to more effective organizational strategies and program development.",
                "Developed innovative survey tools and methodologies to capture diverse youth voices, guiding strategic decision-making and policy recommendations.",
                "Managed cross-functional teams, analyzed data to identify trends, and provided insights that shaped initiatives fostering youth leadership and engagement."
            ]
        },
        {
            title: "Survey Consultant",
            organization: "Internews",
            period: "2021 - 2023, UK",
            details: [
                "Designed and conducted comprehensive audience surveys and focus groups for various media outlets to refine product strategies and boost audience engagement.",
                "Developed tailored survey and focus group methodologies to capture nuanced audience insights, improving media outlet responsiveness to community needs and enhancing overall communication strategies.",
                "Collaborated with cross-functional teams to analyze survey and focus group data, providing actionable recommendations for media content development and distribution.",
                "Presented survey and focus group findings and insights to stakeholders, effectively communicating results to inform strategic decision-making and optimize content offerings."
            ]
        }
    ];

    const teaching = [
        {
            title: "Teaching Assistant",
            organization: "GOV1737: Evaluating the Impacts of Public Policies: How to Design and Implement Randomized Controlled Trials",
            period: "Spring 2024, Harvard University",
            details: "Worked closely with students to help them design and implement randomized controlled trials (RCTs) and survey experiments. Guided students through translating complex findings into clear, actionable insights for policymakers and stakeholders."
        },
        {
            title: "Teaching Assistant",
            organization: "GOV50: Data",
            period: "Fall 2023, Harvard University",
            details: "Helped students grasp fundamentals of causal inference and use of R, GitHub, and other essential tools for social science analysis. Supported students in conducting their own research projects."
        },
        {
            title: "Teaching Assistant",
            organization: "Survey Research Methods",
            period: "Spring 2023, Harvard University",
            details: "Assisted students in understanding how to effectively design, conduct, and analyze surveys. Emphasized importance of crafting appropriate questions and approaching sensitive topics thoughtfully."
        },
        {
            title: "Teaching Assistant",
            organization: "Quantitative Research Methods",
            period: "Fall 2019, Boston University",
            details: "Guided students through quantitative analysis methods and statistical techniques for political science research."
        }
    ];

    return (
        <div className="section">
            <div className="container">
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <h1 style={{ marginBottom: 'var(--spacing-xl)' }}>Experience</h1>

                    <h2 style={{ marginBottom: 'var(--spacing-lg)', fontSize: '1.75rem' }}>Work Experience</h2>
                    {workExperience.map((exp, index) => (
                        <ExperienceItem key={index} {...exp} />
                    ))}

                    <h2 style={{ marginTop: 'var(--spacing-xl)', marginBottom: 'var(--spacing-lg)', fontSize: '1.75rem' }}>
                        Teaching
                    </h2>
                    {teaching.map((exp, index) => (
                        <ExperienceItem key={index} {...exp} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
