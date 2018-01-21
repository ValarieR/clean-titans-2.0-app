import React, {Component} from "react";
import API from "../../utils/API";

//import "./Nav.css";
import MissCard from '../../components/Card/MissCard';

export class CMissions extends React.Component {

    state = {
        missions: [],
        sampleMissions: [],
    };

    componentDidMount() {
        const cid=1;
        this.loadMissionSection(cid);
    }

    loadMissionSection (cid) {
        API.loadChildMissionSec(cid)
            .then(res =>
                    // console.log(res.data)
                    this.setState({missions: res.data})
                //this.setState({children: JSON.stringify(res.data)})
            )
            .catch(err => console.log(err));
    };

    /** constructor() {
        super();
        this.sampleChildren = [
            {
                first_name: "Maya",
                nickname: "Supergirlie",
                points: "5",
                avatar: "1"
            },
            {
                first_name: "Tim",
                nickname: "Tiny",
                points: "15",
                avatar: "1"
            },
        ]
    } **/

    render() {

        if (this.state.missions.length > 0) {
            return (
                <div className="container">
                    <h1>Missions</h1>
                    <div>
                        <div className={'row'}>
                            {console.log(this.state.missions)}
                            {this.state.missions.map((each, i) => {
                                // console.log(each);
                                // console.log(i);
                                return <MissCard key={i} title={each.mission.mission_title} points={each.mission.mission_point_value}
                                                 description={each.mission.mission_description} video={each.mission.mission_video_url}
                                                 status={each.mission_status}
                                />;
                            })}
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="container">
                    <h1>Missions</h1>
                    <div>
                        <p>There are no missions on file</p>
                    </div>
                </div>
            );
        }
    }
}