import React from "react";
import Moment from "react-moment";
import '../../App.css';


class Experience extends React.Component {

    render() {

    const listExperience = [
        {
            title: "Waitress",
            institution: "Kong Djie Coffee",
            dateFrom: "06/28/2018",
            dateTo: "07/08/2018",
            description: "ensuring customers needs were met with patience, diligence and positive attitude."
        },
        {
            title: "Barista",
            institution: "Dum Dum Thai Tea ",
            dateFrom: "07/01/2018",
            dateTo: "07/08/2019",
            description: "ensuring customers needs were met with patience, diligence and positive attitude."
        },
    ];
    
    return (
        <>
            <div className="container-fluid" id="Experience">
                <h2>Experience</h2>
                {listExperience.map((v) =>
                    <div className="row">
                        <div className="col-8">
                            <h3 className="experienceTitle">{v.title}</h3>
                            <h4>{v.institution}</h4>
                            <p>{v.description}</p>
                        </div>

                        <div className="col-4">
                            <p className="experienceDate">
                                <Moment format="MMMM YYYY">{v.dateFrom}</Moment>
                                {" - "}
                                {v.dateTo === Date.now() ? "Present" : <Moment format="MMMM YYYY">{v.dateTo}</Moment>}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
    }
}

export default Experience;