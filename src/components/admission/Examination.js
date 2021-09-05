import React from 'react'
import ExamController from './ExamController'
import ExamLanding from './ExamLanding'
import Examnotif from './Examnotif'

const Examination = () => {
    return (
        <div>
            <ExamController/>

            <ExamLanding/>
            <Examnotif/>
        </div>
    )
}

export default Examination
