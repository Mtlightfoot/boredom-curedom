import activityType from '../data/ActivityTypes.json';
import CureMeBtn from './CureMeBtns';
import Grid from '@mui/material/Grid';

function CureMe() {
    console.log(activityType)
    return (
        <div><Grid
            container
            spacing={0}
            justifyContent="center"
            sx={{
                border: "none",
                boxShadow: "none"
            }}>

            {activityType.map((activity) => <CureMeBtn
                key={activity._id}
                type={activity.type}
                img={activity.img}
                color={activity.color}
            />
            )}
        </Grid>
        </div>
    )
}

export default CureMe;