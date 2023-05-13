import './style.css';
import { category } from '../../data/category';
import { infoType } from '../../types/types';
import { useState } from 'react';

type Props = {
    add: (item: infoType)=> void 
}
export const AddInfo = ({add}: Props) => {

    const [aDate, setADate] = useState('');
    const [aCategory, setACategory] = useState('');
    const [aTitle, setATitle] = useState('');
    const [aValue, setAValue] = useState(0);

    const addNewItem = () => {
        let newItem: infoType = {
            date: correctDate(aDate),
            category: aCategory,
            title: aTitle,
            value: aValue,
            expense: aExpense(aCategory)
        } 

        add(newItem);
        
        setACategory('')
        setADate('');
        setATitle('');
        setAValue(0);
    }
    const correctDate = (date: string): Date => {
        let [year, month, day] = date.split('-');
        return new Date(parseInt(year), (parseInt(month)-1), parseInt(day));
    }

    const aExpense = (cat: string): boolean => {
        let expense = true;
        for(let i in category){
            if(cat === category[i].name){
                expense = category[i].expense;
            }
        }
        return expense;
    }

    return(
        <form className='f-addinfo'>
            <div>
                <label>Data</label>
                <input type='date' value={aDate} onChange={(e)=>{setADate(e.target.value)}} />
            </div>
            <div>
                <label>Categoria</label>
                <select onChange={(e)=>{setACategory(e.target.value)}} value={aCategory}>
                    <option></option>
                    {category.map((item, index)=>(
                        <option value={item.name}>{item.name}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>Título</label>
                <input type='text' onChange={(e)=>{setATitle(e.target.value)}} value={aTitle}/>
            </div>
            <div>
                <label>Valor</label>
                <input type='number' onChange={(e)=>{setAValue(parseFloat(e.target.value))}} value={aValue} />
            </div>
            <div className='button' onClick={addNewItem}>Adicionar</div>
        </form>
    )
}