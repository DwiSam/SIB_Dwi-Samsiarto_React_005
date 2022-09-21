import React from "react";
import Moment from "react-moment";
import '../../App.css';


class Education extends React.Component {
    
    render() {
    
    const listEducation = [
        {
            campus: "Institut Teknologi PLN",
            degree: "Engineering Informatics",
            dateFrom: "08/25/2019",
            dateTo: Date.now(),
            description: "Computer Lab Assistant of Information Retrieval Laboratory"
        },
        {
            campus: "SMAN 9 Kota Tangerang",
            degree: "IPS",
            dateFrom: "06/06/2015",
            dateTo: "05/05/2018",
            description: "head of the regeneration department - ROHIS (2016-2017)"
        },
    ]

    return (
        <>
            <div className="container-fluid" id="Education">
                <h2>Education</h2>
                {listEducation.map((v) =>
                    <div className="row">
                        <div className="col-8">
                            <h3>{v.campus}</h3>
                            <h4>{v.degree}</h4>
                            <p>{v.description}</p>
                        </div>
                        <div className="col-4">
                            <p className="educationDate">
                                <Moment format="MMMM YYYY">{v.dateFrom}</Moment>
                                {" - "}
                                {v.dateTo === Date.now() ? "Present" : <Moment format="MMMM YYYY">{v.dateTo}</Moment>}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
}

export default Education;