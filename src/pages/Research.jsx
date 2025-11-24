import React, { useState } from 'react';

const ResearchPaper = ({ title, authors, abstract, link, venue }) => {
    const [showAbstract, setShowAbstract] = useState(false);

    return (
        <div className="card" style={{ marginBottom: 'var(--spacing-lg)' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                {link ? (
                    <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
                ) : (
                    title
                )}
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
                {authors}
            </p>
            {venue && (
                <p style={{ fontSize: '0.9rem', color: 'var(--color-accent)', fontWeight: '500', marginBottom: '0.5rem' }}>
                    {venue}
                </p>
            )}
            <button
                onClick={() => setShowAbstract(!showAbstract)}
                className="btn btn-outline"
                style={{ fontSize: '0.85rem', padding: '0.25rem 0.75rem' }}
            >
                {showAbstract ? 'Hide' : 'Show'} Abstract
            </button>
            {showAbstract && (
                <p style={{
                    marginTop: 'var(--spacing-md)',
                    padding: 'var(--spacing-md)',
                    background: 'var(--color-bg)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.95rem',
                    lineHeight: '1.7'
                }}>
                    {abstract}
                </p>
            )}
        </div>
    );
};

const Research = () => {
    const publications = [
        {
            title: "Social Media Narratives across Platforms in Conflict: Evidence from Syria",
            authors: "with Erin Walk, Elizabeth Parker-Magyar, Kiran Garimella, Fotini Christia",
            venue: "2025, The Journal of Politics",
            link: "https://www.journals.uchicago.edu/doi/10.1086/732997",
            abstract: "The conflict in Syria has killed hundreds of thousands and forced more than half of the country's population to flee their homes. We constructed and analyzed comparable datasets of public messages and images from three popular social media platforms to study how Syrian users represent the conflict amid a period of relative de-escalation. Paired with a sample of users' responses to an open-ended questionnaire, our findings show that complementary if divergent discussions of violence remain central even as they vary across platforms. Narratives on Telegram address the violence's day-to-day impacts, while on Twitter they contextualize violence within the conflict's broader cleavages. A site with stricter surveillance, Facebook features more loyalist narratives. Our results underscore how actors diversify their presentation of violence to reach domestic and international audiences and to accommodate platform affordances, in ways that can impact how both users and researchers understand ongoing conflict."
        }
    ];

    const preprints = [
        {
            title: "Aiding Harmony: How International Aid Shapes Local Policy Preferences and Behavior toward Refugees",
            authors: "with Melani Cammett",
            link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4781005",
            abstract: "A key challenge for countries with large refugee populations is to establish policies that help refugees while ensuring that host country nationals do not resent them. International aid can potentially mitigate tensions between host country nationals and large refugee populations by fostering more altruistic attitudes and policies. This research, conducted over two months in Turkey through online surveys, examines the impact of different aid types—cash transfers, vocational training, and social cohesion programs—on Turkish nationals' policy preferences and behaviors towards refugees. It explores how these effects vary by funding source (host government vs. international donors) and the framing of aid (supporting the local economy vs. refugee populations). The study finds that local attitudes are primarily influenced by economic concerns, suggesting that aid aimed at enhancing refugee self-sufficiency is viewed more favorably."
        },
        {
            title: "How Populist Incumbents Use Strategic Communication to Survive Economic Crises: The Surprising Effectiveness of Incumbent Economic Appeals",
            authors: "with Andrew O'Donohue",
            link: "https://osf.io/preprints/osf/9ahtp",
            abstract: "How do populist incumbents use strategic communication to survive economic crises? To persuade voters, incumbents generally—and populist incumbents specifically—may deploy two communication strategies. First, to reduce the salience of their poor economic performance, incumbents can shift the agenda to sociocultural issues. Alternatively, despite presiding over economic crisis, incumbents can employ economic appeals by emphasizing their economic competence and the opposition's incompetence. To test the effectiveness of these strategies, we conducted an ethnographically informed survey experiment with 2,400 Turkish citizens before Turkey's 2023 election, in which respondents were exposed to rhetoric simulating the incumbent's campaign messaging about sociocultural or economic issues. Whereas incumbent sociocultural rhetoric had no marginal effect, economic appeals increased respondents' approval of the incumbent's economic management and overall performance."
        },
        {
            title: "Language-Agnostic Bias Detection in Language Models with Bias Probing",
            authors: "with Abdullatif Koksal, Omer Faruk Yalcin, M. Tahir Kilavuz, Anna Korhonen, Hinrich Schutze",
            link: "https://arxiv.org/abs/2305.13302",
            abstract: "Pretrained language models (PLMs) are key components in NLP, but they contain strong social biases. Quantifying these biases is challenging because current methods focusing on fill-the-mask objectives are sensitive to slight changes in input. To address this, we propose a bias probing technique called LABDet, for evaluating social bias in PLMs with a robust and language-agnostic method. For nationality as a case study, we show that LABDet surfaces nationality bias by training a classifier on top of a frozen PLM on non-nationality sentiment detection. We find consistent patterns of nationality bias across monolingual PLMs in six languages that align with historical and political context."
        }
    ];

    const workingPapers = [
        {
            title: "How Does Exposure to Discordant Media Sources Affect Political Attitudes and Behavior? Experimental Evidence from Turkey",
            authors: "with Jeremy Bowles, Horacio Larreguy, Shelley Lui",
            abstract: "When citizens lack exposure to media sources which offer contrasting perspectives, biased information consumption diets risk undermining democratic accountability. This might especially be the case in dominant party settings where many citizens lack familiarity with credible media sources from across the political spectrum. In the context of Turkey, we implement a randomized control trial that induces citizens' exposure to politically non-aligned (discordant) online media sources over the course of half a year. We examine this intervention's effects on media consumption, political attitudes, and affective polarization."
        }
    ];

    return (
        <div className="section">
            <div className="container">
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <h1 style={{ marginBottom: 'var(--spacing-xl)' }}>Research</h1>

                    <h2 style={{ marginBottom: 'var(--spacing-lg)', fontSize: '1.75rem' }}>Publications</h2>
                    {publications.map((paper, index) => (
                        <ResearchPaper key={index} {...paper} />
                    ))}

                    <h2 style={{ marginTop: 'var(--spacing-xl)', marginBottom: 'var(--spacing-lg)', fontSize: '1.75rem' }}>
                        Preprints
                    </h2>
                    {preprints.map((paper, index) => (
                        <ResearchPaper key={index} {...paper} />
                    ))}

                    <h2 style={{ marginTop: 'var(--spacing-xl)', marginBottom: 'var(--spacing-lg)', fontSize: '1.75rem' }}>
                        Working Papers
                    </h2>
                    {workingPapers.map((paper, index) => (
                        <ResearchPaper key={index} {...paper} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Research;
