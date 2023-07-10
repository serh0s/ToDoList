import { firstLetterUpper } from '../../helpers/Capitalize';
import { filterTypes } from '../../types';
import './TodoMultiselect.css';

const TodosMultiselect = ({
    listToShow = filterTypes,
    onChange,
    value,
}) => {
    return (
        <select
            className="c-select"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        >
            {Object.values(listToShow).map((type) => (
                <option key={type} value={type}>
                    {firstLetterUpper(type)}
                </option>
            ))}
        </select>
    );
};

export default TodosMultiselect;
