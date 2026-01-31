import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import resumeData from "../../assets/resume.json"
import Badge from "react-bootstrap/Badge";

function ExperienceCard() {
    const work = resumeData.experience.map((job, i) => {
        const technologies = job.technologies.map((technology, idx) => (
            <Badge pill className="main-badge" key={idx} bg="secondary">
                {technology}
            </Badge>
        ));
        const descriptionList = job.descriptions.map((desc, idx) => (
            <li className="exp-description-item" key={idx}>
                {desc}
            </li>
        ));

        return (
            <VerticalTimelineElement
                key={i}
                className="vertical-timeline-element--work"
                date={job.years}
                iconStyle={{ background: "#8AB0D8", color: "#FFF", textAlign: "center" }}
                icon={<i className="fab fa-angular experience-icon"></i>}
                contentStyle={{ position: "relative" }}
            >
                {job.logo && (
                    <div className="exp-logo-container">
                        <img className="exp-logo-img" src={job.logo} alt={`${job.company} logo`} />
                    </div>
                )}

                <div>
                    <div className="exp-card-title">
                        {job.title}
                    </div>

                    <div className="exp-card-company">
                        {job.company}
                    </div>

                    <ul className="exp-description-list">
                        {descriptionList}
                    </ul>

                    <div className="exp-tech-wrapper">
                        {technologies}
                    </div>

                </div>
            </VerticalTimelineElement>
        );
    });
    return (
        <VerticalTimeline>
            {work}
        </VerticalTimeline>
    );
}

export default ExperienceCard;