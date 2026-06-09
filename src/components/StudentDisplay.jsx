import { useEffect, useState } from "react";
function StudentDisplay({studentList}){
    return (
        <>
            <div className="students-list">
                {studentList.map(s=>{
                    return (
                        <div className="student-data" key={s.id}>
                            <h2>Student Name: {s.name}</h2>
                            <p>Selected Course: {s.course}</p>
                            </div>
                    )
                }

                )}
            </div>
        </>
    );
}
export default StudentDisplay;