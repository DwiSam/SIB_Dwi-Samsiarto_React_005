import React from "react";

class Skills extends React.Component {
    render() {
    
    const listProgrammingLanguagesAndTools = [
        "Javascript", 
        "React", 
        "Python",
        "HTML", 
        "CSS", 
        "Graphic Design", 
        "UI/UX"
    ];

    return (
        <>
            <div className="container-fluid" id="Skills">
                <h2>Skills</h2>
                <h4>Programming Languages & etc.</h4>
                <div className="row">
                    <div className="col-6">
                        <ul>
                            {listProgrammingLanguagesAndTools?.map((v, i) =>
                                !(i % 2) &&
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                    </svg>
                                    {" "}
                                    {v}
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="col-6">
                        <ul>
                            {listProgrammingLanguagesAndTools?.map((v, i) =>
                                !((i - 1) % 2) &&
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                    </svg>
                                    {" "}
                                    {v}
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
    }
}

export default Skills;