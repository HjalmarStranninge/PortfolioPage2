import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FadeLoader } from 'react-spinners';

export default function GithubProjects({ limit }) {
    const [repos, setRepos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const url = `https://api.github.com/users/HjalmarStranninge/repos?per_page=${limit}`;

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const extractedRepos = data.map(repo => ({
                    name: repo.name,
                    html_url: repo.html_url,
                    language: repo.language,
                    description: repo.description
                }));
                setRepos(extractedRepos);
                setTimeout(() => {
                    setIsLoading(false);
                }, 1500);
            })
            .catch(error => console.error('Error fetching repositories', error));
    }, [url]);

    if (isLoading) {
        return (
            <div className="Loader-container">
                <FadeLoader color="hsla(180, 2%, 42%, 1)" className="Loader" />
                <span style={{ color: 'hsla(180, 2%, 42%, 1)' }}>Loading...</span>
            </div>
        );
    }

    return (
        <div className="card-container">
            {repos.map((repo, index) => (
                <Card key={index} className="card">
                    <Card.Body className="card-content">
                        <Card.Title className="project-name">{repo.name}</Card.Title>
                        <p>Language: {repo.language}</p>
                        <Card.Text>{repo.description}</Card.Text>
                        <Button variant="primary" href={repo.html_url} target="_blank">View on GitHub</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}
