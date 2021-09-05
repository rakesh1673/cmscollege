import React from 'react'
import Admission from './Admission'
import UnderGraduates from './UnderGraduates'
import PostGraduate from './PostGraduate'
import LatestNotif from './LatestNotif'
import Programmes from './Programmes'

const AdmissionComp = () => {
    return (
        <div>
             <Admission/>
     <UnderGraduates/>
     <PostGraduate/>
     <LatestNotif/>
     <Programmes/>
        </div>
    )
}

export default AdmissionComp
