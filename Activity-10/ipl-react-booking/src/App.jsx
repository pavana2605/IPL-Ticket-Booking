
import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MatchCard from "./components/MatchCard";

import "./App.css";

function App() {

    // React State
    const [showMatches, setShowMatches] = useState(true);

    // Match Details
    const matches = [
        {
            id: 1,
            team1: "RCB",
            team2: "CSK",
            date: "10 April 2027",
            venue: "Bengaluru"
        },
        {
            id: 2,
            team1: "MI",
            team2: "KKR",
            date: "15 April 2027",
            venue: "Mumbai"
        },
        {
            id: 3,
            team1: "CSK",
            team2: "SRH",
            date: "20 April 2027",
            venue: "Chennai"
        }
    ];

    return (
        <div>

            {/* Navbar Component */}
            <Navbar />

            {/* Hero Component */}
            <Hero />

            {/* Match Section */}
            <section id="matches" className="matches-section">

                <h2>Upcoming IPL Matches</h2>

                {/* State Button */}
                <button
                    onClick={() => setShowMatches(!showMatches)}
                >
                    {showMatches ? "Hide Matches" : "Show Matches"}
                </button>

                {/* Reusable Match Cards */}
                {showMatches && (
                    <div className="matches-container">

                        {matches.map(function(match) {

                            return (
                                <MatchCard
                                    key={match.id}
                                    team1={match.team1}
                                    team2={match.team2}
                                    date={match.date}
                                    venue={match.venue}
                                />
                            );

                        })}

                    </div>
                )}

            </section>

        </div>
    );
}

export default App;
