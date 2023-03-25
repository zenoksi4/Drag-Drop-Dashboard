import { useEffect, useState } from "react";
import { onSortCard } from "../../store/lists/listsSlice";
import { useDispatch } from "react-redux";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';


const SortableArrows = ({_id}) => {
    const [sortByDate, setSortByDate] = useState(true);
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(onSortCard({_id, sortByDate}))

    }, [dispatch, sortByDate, _id]);

    const handleSort = () => {
        setSortByDate(!sortByDate);
    }

    return (
        <div onClick={handleSort}>
        { sortByDate ?
            <KeyboardArrowDownRoundedIcon/>
            :
            <KeyboardArrowUpRoundedIcon />
        }
        </div>
    );
}
export default SortableArrows;
