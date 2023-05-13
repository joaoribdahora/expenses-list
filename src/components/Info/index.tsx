import { monthYear } from '../../helpers/filterDate';
import './style.css';

type Props = {
    month: string;
    theNewDate: (nDate: string) => void;
    expenseS: () => number;
    incomeS: () => number;
}
export const Info = ({month, theNewDate, expenseS, incomeS}: Props) => {
    
    const prevMonth = () => {
        let [tyear, tmonth] = month.split('-');
        let currentDate = new Date(parseInt(tyear), parseInt(tmonth)-1, 1);
        currentDate.setMonth( currentDate.getMonth() - 1);
        theNewDate(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }

    const nextMonth = () => {
        let [tyear, tmonth] = month.split('-');
        let currentDate = new Date(parseInt(tyear), parseInt(tmonth)-1, 1);
        currentDate.setMonth( currentDate.getMonth()+1);
        theNewDate(`${currentDate.getFullYear()}-${currentDate.getMonth()+1}`);
    }

    return(
        <main className='m-info'>
            <div className='d-one'>
                <span onClick={prevMonth}> ← </span>
                <h4>{monthYear(month)}</h4>
                <span onClick={nextMonth}> → </span>
            </div>
            <div className='d-two'>
                <h6>Receita</h6>
                <span> R$ {incomeS()}</span>
            </div>
            <div className='d-three'>
                <h6>Despesas</h6>
                <span>R$ {expenseS()}</span>
            </div>
            <div className='d-four'>
                <h6>Blanço</h6>
                <span style={{color: (incomeS() - expenseS()) >= 0 ? 'green' : 'red'}}>R$ {incomeS() - expenseS()}</span>
            </div>
        </main>
    )
}